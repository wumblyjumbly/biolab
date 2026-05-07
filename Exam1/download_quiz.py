#!/usr/bin/env python3
"""
Scrape a Canvas quiz from a saved review-page HTML file.

STEP 1 — Save the quiz page:
  1. Open your Canvas quiz, submit it (even blank) to reach the review page
  2. File → Save Page As → "Web Page, HTML Only"
  3. Save as: quiz_page.html  (default location; override with --html)

STEP 2 — (optional, for images) Save your browser cookie:
  1. DevTools → Network → any shoreline.instructure.com request
  2. Copy the full "cookie:" header value
  3. Paste into canvas_cookie.txt  (default; override with --cookie)

STEP 3 — Run:
  python3 download_quiz.py
  python3 download_quiz.py --html exam2_page.html --out quiz_data2.js
  python3 download_quiz.py --help
"""

import argparse, requests, json, os, sys, re
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# ── CLI args ──────────────────────────────────────────────────
def parse_args():
    ap = argparse.ArgumentParser(
        description="Convert a saved Canvas quiz review page to a JS data file.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    ap.add_argument(
        "--html", "-H", default=None, metavar="FILE",
        help="Saved quiz HTML file (default: quiz_page.html beside this script)",
    )
    ap.add_argument(
        "--out", "-o", default=None, metavar="FILE",
        help="Output JS data file (default: quiz_data.js beside this script)",
    )
    ap.add_argument(
        "--images", "-i", default=None, metavar="DIR",
        help="Directory to save downloaded images (default: quiz_images/ beside --out)",
    )
    ap.add_argument(
        "--cookie", "-c", default=None, metavar="FILE",
        help="File containing Canvas session cookie (default: canvas_cookie.txt beside --html)",
    )
    ap.add_argument(
        "--base", "-b", default="https://shoreline.instructure.com", metavar="URL",
        help="Canvas base URL for resolving relative image paths (default: https://shoreline.instructure.com)",
    )
    return ap.parse_args()

args      = parse_args()
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

HTML_FILE   = os.path.abspath(args.html   or os.path.join(SCRIPT_DIR, "quiz_page.html"))
JS_FILE     = os.path.abspath(args.out    or os.path.join(SCRIPT_DIR, "quiz_data.js"))
OUT_DIR     = os.path.dirname(JS_FILE)
IMG_DIR     = os.path.abspath(args.images or os.path.join(OUT_DIR, "quiz_images"))
COOKIE_FILE = os.path.abspath(args.cookie or os.path.join(os.path.dirname(HTML_FILE), "canvas_cookie.txt"))
BASE        = args.base.rstrip("/")

# Relative path from the output JS directory to the images directory
# (used inside the rewritten <img src="…"> attributes)
IMG_REL = os.path.relpath(IMG_DIR, OUT_DIR)

os.makedirs(IMG_DIR, exist_ok=True)

# ── Session (used for image downloads) ───────────────────────
SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
})

if os.path.exists(COOKIE_FILE):
    SESSION.headers.update({"Cookie": open(COOKIE_FILE).read().strip()})
    print(f"🔑  Loaded {os.path.basename(COOKIE_FILE)}")
else:
    print(f"⚠   No cookie file ({COOKIE_FILE}) — images will be skipped")

# ── Load page HTML ────────────────────────────────────────────
if not os.path.exists(HTML_FILE):
    print()
    print(f"❌  HTML file not found: {HTML_FILE}")
    print()
    print("  1. Open your Canvas quiz, submit it to reach the review page")
    print("  2. File → Save Page As → 'Web Page, HTML Only'")
    print(f"  3. Save as: {HTML_FILE}")
    print("  4. Re-run this script")
    sys.exit(1)

print(f"📄  Reading {os.path.basename(HTML_FILE)} …")
html_source = open(HTML_FILE, encoding="utf-8", errors="replace").read()

# ── Image helpers ─────────────────────────────────────────────
_img_cache = {}

# Start sequence after the highest existing qi_NNNN file so names never collide
_max_existing = 0
for _f in os.listdir(IMG_DIR):
    _m = re.match(r'qi_(\d{4})\.\w+$', _f)
    if _m:
        _max_existing = max(_max_existing, int(_m.group(1)))
_img_seq = [_max_existing]

def download_image(src):
    if src in _img_cache:
        return _img_cache[src]
    full = src if src.startswith("http") else urljoin(BASE, src)
    try:
        r = SESSION.get(full, timeout=30, allow_redirects=True)
        if r.status_code != 200:
            print(f"    ⚠  HTTP {r.status_code}: {full[:70]}")
            return None
        ct  = r.headers.get("content-type", "").split(";")[0].strip()
        if not ct.startswith("image/"):
            print(f"    ⚠  Skipped (got '{ct}', expected image — cookie may be expired): {full[:60]}")
            return None
        ext = {
            "image/jpeg": "jpg", "image/jpg": "jpg", "image/png": "png",
            "image/gif":  "gif", "image/webp": "webp", "image/svg+xml": "svg",
        }.get(ct, "jpg")
        _img_seq[0] += 1
        fname = f"qi_{_img_seq[0]:04d}.{ext}"
        open(os.path.join(IMG_DIR, fname), "wb").write(r.content)
        _img_cache[src] = fname
        print(f"    ↓  {fname}")
        return fname
    except Exception as e:
        print(f"    ⚠  {e}")
        return None

def rewrite_images(tag):
    """Download <img> srcs to IMG_DIR; rewrite src to relative path. Returns filenames."""
    local = []
    for img in tag.find_all("img"):
        src = img.get("src", "")
        if not src or src.startswith("data:"):
            continue
        if "Cookie" not in SESSION.headers:
            continue  # no auth — leave src unchanged
        fname = download_image(src)
        if fname:
            img["src"] = f"{IMG_REL}/{fname}"
            local.append(fname)
    return local

# ── Parse questions ───────────────────────────────────────────
soup          = BeautifulSoup(html_source, "html.parser")
question_divs = soup.select("div.display_question")

if not question_divs:
    print()
    print("❌  No questions found.")
    print("    Make sure you saved the REVIEW page (after submitting), not the start page.")
    sys.exit(1)

print(f"🔍  Found {len(question_divs)} questions\n")

quiz_data = []

for i, qd in enumerate(question_divs, 1):
    # ── Meta ──────────────────────────────────────────────────
    qtype_el = qd.select_one("span.question_type")
    qtype    = qtype_el.get_text(strip=True) if qtype_el else "multiple_choice_question"

    name_el = qd.select_one(".name.question_name")
    qname   = name_el.get_text(strip=True) if name_el else f"Question {i}"

    raw_id = qd.get("id", "")
    try:
        qid = int(raw_id.replace("question_", ""))
    except ValueError:
        qid = i

    print(f"  [{i:>3}] {qname} ({qtype})")

    # ── Question text ─────────────────────────────────────────
    q_text_el = qd.select_one("div.question_text.user_content")
    q_imgs = []
    if q_text_el:
        q_imgs = rewrite_images(q_text_el)
        q_html = str(q_text_el)
    else:
        q_html = ""

    # ── Answers ───────────────────────────────────────────────
    answer_divs = qd.select("div.answers div.answer")

    # ── Matching ──────────────────────────────────────────────
    if qtype == "matching_question":
        matches = []
        for ad in answer_divs:
            left_el  = ad.select_one(".answer_match_left")
            right_el = ad.select_one(".answer_match_right")
            left  = left_el.get_text(strip=True)  if left_el  else ""
            right = right_el.get_text(strip=True) if right_el else ""
            if left:
                matches.append({"left": left, "right": right})
        quiz_data.append({
            "id": qid, "position": i, "type": qtype,
            "question": q_html, "images": q_imgs,
            "matches": matches, "correct": None, "points": 1,
        })
        continue

    # ── Build answer list + detect correct(s) ─────────────────
    answers      = []
    correct_idxs = []  # indices of all correct answers

    for j, ad in enumerate(answer_divs):
        classes   = " ".join(ad.get("class", []))
        weight_el = ad.select_one("span.answer_weight")
        weight    = int(weight_el.get_text(strip=True)) if weight_el else 0
        is_correct = ("correct_answer" in classes) or (weight == 100)

        text_el = ad.select_one("div.answer_text")
        html_el = ad.select_one("div.answer_html")
        if text_el and text_el.get_text(strip=True):
            a_text = text_el.get_text(strip=True)
        elif html_el and html_el.get_text(strip=True):
            a_text = html_el.get_text(separator=" ", strip=True)
        else:
            inp    = ad.select_one("div.short_answer input[name='answer_text']")
            a_text = inp["value"].strip() if inp and inp.get("value") else ""

        answers.append(a_text)
        if is_correct:
            correct_idxs.append(j)

    # multiple_answers → store list; everything else → single int or None
    if qtype == "multiple_answers_question":
        correct_out = correct_idxs          # e.g. [0, 2, 3]
    else:
        correct_out = correct_idxs[0] if correct_idxs else None

    quiz_data.append({
        "id": qid, "position": i, "type": qtype,
        "question": q_html, "images": q_imgs,
        "answers": answers, "correct": correct_out, "points": 1,
    })

# ── Write output JS ───────────────────────────────────────────
os.makedirs(OUT_DIR, exist_ok=True)

# If file exists, merge new questions into existing data (deduplicate by id)
existing_data = []
if os.path.exists(JS_FILE):
    try:
        text = open(JS_FILE, encoding="utf-8").read()
        m = re.search(r'const QUIZ_DATA\s*=\s*(\[.*?\]);', text, re.DOTALL)
        if m:
            existing_data = json.loads(m.group(1))
            print(f"📂  Found {len(existing_data)} existing questions in {os.path.basename(JS_FILE)}")
    except Exception as e:
        print(f"⚠   Could not parse existing {os.path.basename(JS_FILE)}: {e}")

if existing_data:
    existing_ids = {q['id'] for q in existing_data}
    new_qs = [q for q in quiz_data if q['id'] not in existing_ids]
    merged = existing_data + new_qs
    print(f"✚   Merged: {len(new_qs)} new + {len(existing_data)} existing = {len(merged)} total")
else:
    merged = quiz_data

payload = json.dumps(merged, ensure_ascii=False, indent=2)
with open(JS_FILE, "w", encoding="utf-8") as f:
    f.write("/* Auto-generated by download_quiz.py */\n")
    f.write(f"const QUIZ_DATA = {payload};\n")

out_name = os.path.basename(JS_FILE)
print(f"\n✅  Done!")
print(f"    Questions : {len(merged)} total ({len(quiz_data)} from this run)")
print(f"    Images    : {_img_seq[0]}  →  {IMG_DIR}")
print(f"    Data file : {JS_FILE}")
print(f"\nOpen quiz.html in your browser to study.\n")
