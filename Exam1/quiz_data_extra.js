/* Supplemental questions — Animal tissues & embryology PDF learning objectives
   Covers content NOT in the original quiz_data.js export:
   goblet cells, basal lamina, dense connective tissue, neural plate/tube, notochord,
   unfertilized egg, and frog/neurula-stage embryology.
*/
const QUIZ_DATA_EXTRA = [

  // ── HISTOLOGY: Goblet Cells ─────────────────────────────────────────────────
  {
    id: 90001, position: 230,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>What specialized mucus-secreting cells are embedded within simple columnar epithelium and are found lining the gut (jejunum) and trachea?</p></div>",
    images: [],
    answers: ["goblet cells", "fibroblasts", "chondrocytes", "osteocytes"],
    correct: 0, points: 1
  },
  {
    id: 90002, position: 231,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>In which specific epithelial tissue type are goblet cells characteristically found?</p></div>",
    images: [],
    answers: ["simple columnar epithelium", "stratified squamous epithelium", "simple squamous epithelium", "simple cuboidal epithelium"],
    correct: 0, points: 1
  },

  // ── HISTOLOGY: Basal Lamina ─────────────────────────────────────────────────
  {
    id: 90003, position: 232,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>What thin, acellular layer of extracellular matrix anchors epithelial cells to the underlying connective tissue?</p></div>",
    images: [],
    answers: ["basal lamina", "mesoglea", "mesenchyme", "cuticle"],
    correct: 0, points: 1
  },
  {
    id: 90004, position: 233,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>The basal lamina is a structural feature found in association with which tissue type?</p></div>",
    images: [],
    answers: ["epithelial tissue", "nervous tissue", "cardiac muscle", "fluid connective tissue"],
    correct: 0, points: 1
  },

  // ── HISTOLOGY: Dense Connective Tissue ─────────────────────────────────────
  {
    id: 90005, position: 234,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>Which type of connective tissue has densely packed, parallel collagen fibers and relatively few cells, providing great tensile strength? It is visible at the outer edge of tracheal cartilage and forms tendons and ligaments.</p></div>",
    images: [],
    answers: ["dense connective tissue", "loose areolar connective tissue", "adipose tissue", "hyaline cartilage"],
    correct: 0, points: 1
  },
  {
    id: 90006, position: 235,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>Compared to loose areolar connective tissue, dense connective tissue is characterized by:</p></div>",
    images: [],
    answers: ["more collagen fibers packed tightly with fewer cells", "more cells and fewer collagen fibers", "an abundance of elastin fibers and adipocytes", "a liquid extracellular matrix (plasma)"],
    correct: 0, points: 1
  },

  // ── EMBRYOLOGY: Unfertilized Egg ───────────────────────────────────────────
  {
    id: 90007, position: 236,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>In the correct sequence of early animal development, which stage comes BEFORE the fertilized egg?</p></div>",
    images: [],
    answers: ["unfertilized egg", "blastula", "gastrula", "neurula"],
    correct: 0, points: 1
  },
  {
    id: 90008, position: 237,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>An unfertilized egg is haploid (n) because it has already completed which process?</p></div>",
    images: [],
    answers: ["meiosis", "mitosis", "gastrulation", "cleavage"],
    correct: 0, points: 1
  },

  // ── EMBRYOLOGY: Neural Plate ────────────────────────────────────────────────
  {
    id: 90009, position: 238,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>What flat, thickened sheet of dorsal ectoderm forms during the early neurula stage and is the precursor to the neural tube?</p></div>",
    images: [],
    answers: ["neural plate", "notochord", "neural crest", "endoderm"],
    correct: 0, points: 1
  },
  {
    id: 90010, position: 239,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>The neural plate is the defining structure of which embryonic stage?</p></div>",
    images: [],
    answers: ["early neurula", "late neurula", "blastula", "gastrula"],
    correct: 0, points: 1
  },

  // ── EMBRYOLOGY: Neural Tube ─────────────────────────────────────────────────
  {
    id: 90011, position: 240,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>What hollow tube forms when the edges of the neural plate roll up and fuse dorsally, eventually giving rise to the brain and spinal cord?</p></div>",
    images: [],
    answers: ["neural tube", "notochord", "gastrocoel", "blastocoel"],
    correct: 0, points: 1
  },
  {
    id: 90012, position: 241,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>The neural tube (closed, hollow) is the defining structure of which embryonic stage?</p></div>",
    images: [],
    answers: ["late neurula", "early neurula", "gastrula", "blastula"],
    correct: 0, points: 1
  },
  {
    id: 90013, position: 242,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>In chicken embryo cross-sections, the paired blocks of paraxial mesoderm flanking the neural tube that give rise to vertebrae, skeletal muscles of the trunk, and dermis are called:</p></div>",
    images: [],
    answers: ["somites", "neural crest cells", "lateral plate mesoderm", "notochord segments"],
    correct: 0, points: 1
  },

  // ── EMBRYOLOGY: Notochord ───────────────────────────────────────────────────
  {
    id: 90014, position: 243,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>What rigid, rod-shaped mesodermal structure runs longitudinally beneath the neural tube, provides temporary support, and induces the overlying ectoderm to form the neural plate in chordate embryos?</p></div>",
    images: [],
    answers: ["notochord", "neural tube", "dorsal blood vessel", "spinal cord"],
    correct: 0, points: 1
  },
  {
    id: 90015, position: 244,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>In adult vertebrates, the notochord is largely replaced by which structure?</p></div>",
    images: [],
    answers: ["vertebral column (spine)", "spinal cord", "neural tube", "dorsal aorta"],
    correct: 0, points: 1
  },

  // ── EMBRYOLOGY: Frog neurula structures ─────────────────────────────────────
  {
    id: 90016, position: 245,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>In a frog embryo neurula, the neural plate and neural tube are derived from which primary germ layer?</p></div>",
    images: [],
    answers: ["ectoderm", "endoderm", "mesoderm", "gastrodermis"],
    correct: 0, points: 1
  },
  {
    id: 90017, position: 246,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>The notochord in a frog embryo neurula is derived from which primary germ layer?</p></div>",
    images: [],
    answers: ["mesoderm", "ectoderm", "endoderm", "gastrodermis"],
    correct: 0, points: 1
  },
  {
    id: 90018, position: 247,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>In the correct sequence, place these embryonic stages in order from earliest to latest:</p></div>",
    images: [],
    answers: [
      "unfertilized egg → fertilized egg → blastula → gastrula → early neurula → late neurula",
      "fertilized egg → unfertilized egg → blastula → gastrula → neurula",
      "blastula → gastrula → fertilized egg → neurula → unfertilized egg",
      "gastrula → blastula → fertilized egg → neurula"
    ],
    correct: 0, points: 1
  },

  // ── ARTHROPODA: Crayfish external anatomy ────────────────────────────────
  {
    id: 90019, position: 248,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p><img src=\"quiz_images/qi_0147.png\" alt=\"Labeled crayfish external anatomy diagram\"/></p><p>Identify the structure labeled with the ORANGE arrow.</p></div>",
    images: ["qi_0147.png"],
    answers: ["carapace", "cephalothorax", "rostrum", "abdomen"],
    correct: 0, points: 1
  },

  // ── MOLLUSCA: Slug (Gastropoda) external anatomy ──────────────────────────
  {
    id: 90020, position: 266,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>In a slug (Class Gastropoda, Phylum Mollusca), the large dorsal lobe covering the visceral mass — labeled <strong>A</strong> — is the:</p></div>",
    images: [],
    answers: ["mantle", "foot", "visceral mass", "pneumostome"],
    correct: 0, points: 1
  },
  {
    id: 90021, position: 267,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>In a slug, the small opening on the right side of the mantle that allows gas exchange — labeled <strong>B</strong> — is the:</p></div>",
    images: [],
    answers: ["pneumostome", "osculum", "ostium", "spiracle"],
    correct: 0, points: 1
  },
  {
    id: 90022, position: 268,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>The pneumostome of a terrestrial gastropod opens into the:</p></div>",
    images: [],
    answers: ["mantle cavity (lung-like space for gas exchange)", "coelom", "hemocoel directly", "gastrovascular cavity"],
    correct: 0, points: 1
  },
  {
    id: 90023, position: 269,
    type: "multiple_choice_question",
    question: "<div class=\"question_text user_content\"><p>Unlike aquatic gastropods that use gills, terrestrial slugs and snails breathe by drawing air through the pneumostome into the:</p></div>",
    images: [],
    answers: ["mantle cavity (acting as a lung)", "tracheal system", "book lungs", "gill chamber"],
    correct: 0, points: 1
  },

];
