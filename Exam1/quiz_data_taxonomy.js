/* Taxonomy ID questions — common name ↔ phylum / class / order
   Positions 270–332. All tagged 'taxonomy' in quiz.html TAXONOMY_POSITIONS.
   Base categories mapped in Q_CAT_MAP additions (also in quiz.html).
*/
const QUIZ_DATA_TAXONOMY = [

  // ══ PHYLUM CNIDARIA — CLASSES (270–277) ══════════════════════════════════════

  { id:91001, position:270, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Aurelia aurita (moon jelly), with its 4-fold symmetry and horseshoe-shaped gonads, belongs to which class of Phylum Cnidaria?</p></div>",
    images:[], answers:["Scyphozoa","Hydrozoa","Anthozoa","Cubozoa"], correct:0, points:1 },

  { id:91002, position:271, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Hydra and the Portuguese man-of-war (a colonial organism) both belong to which class of Cnidaria?</p></div>",
    images:[], answers:["Hydrozoa","Scyphozoa","Anthozoa","Cubozoa"], correct:0, points:1 },

  { id:91003, position:272, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Sea anemones, reef corals, and sea pens all belong to which class of Phylum Cnidaria?</p></div>",
    images:[], answers:["Anthozoa","Scyphozoa","Hydrozoa","Cubozoa"], correct:0, points:1 },

  { id:91004, position:273, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Box jellyfish — the most venomous cnidarians, with a distinctive cube-shaped medusa — belong to which class?</p></div>",
    images:[], answers:["Cubozoa","Scyphozoa","Hydrozoa","Anthozoa"], correct:0, points:1 },

  { id:91005, position:274, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Phylum Cnidaria exists ONLY as a polyp — a medusa form NEVER occurs?</p></div>",
    images:[], answers:["Anthozoa","Hydrozoa","Scyphozoa","Cubozoa"], correct:0, points:1 },

  { id:91006, position:275, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Cnidaria exhibits BOTH a polyp and a medusa form in its life cycle?</p></div>",
    images:[], answers:["Hydrozoa","Anthozoa","Scyphozoa","Cubozoa"], correct:0, points:1 },

  { id:91007, position:276, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>In which class of Cnidaria is the medusa the dominant form and the polyp small or reduced? These are the \"true jellyfish.\"</p></div>",
    images:[], answers:["Scyphozoa","Hydrozoa","Anthozoa","Cubozoa"], correct:0, points:1 },

  { id:91008, position:277, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Cnidaria is NOT a lab specimen but is important to know — identified by its cube-shaped, highly venomous medusa?</p></div>",
    images:[], answers:["Cubozoa","Anthozoa","Scyphozoa","Hydrozoa"], correct:0, points:1 },

  // ══ PHYLUM PLATYHELMINTHES — CLASSES (278–285) ════════════════════════════════

  { id:91009, position:278, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Dugesia tigrina (the cross-eyed planarian) belongs to which class of Phylum Platyhelminthes?</p></div>",
    images:[], answers:["Turbellaria","Cestoda","Trematoda","Hirudinea"], correct:0, points:1 },

  { id:91010, position:279, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Taenia (tapeworm), with a scolex, rostellum, and proglottids but no digestive gut, belongs to which class?</p></div>",
    images:[], answers:["Cestoda","Turbellaria","Trematoda","Nematoda"], correct:0, points:1 },

  { id:91011, position:280, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Fasciola hepatica (the liver fluke), a leaf-shaped endoparasite with oral and ventral suckers, belongs to which class of Platyhelminthes?</p></div>",
    images:[], answers:["Trematoda","Cestoda","Turbellaria","Monogenea"], correct:0, points:1 },

  { id:91012, position:281, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Platyhelminthes is FREE-LIVING (non-parasitic) and found primarily in freshwater?</p></div>",
    images:[], answers:["Turbellaria","Cestoda","Trematoda","Hirudinea"], correct:0, points:1 },

  { id:91013, position:282, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Platyhelminthes has a scolex with hooks/suckers and absorbs nutrients through its tegument because it has NO digestive tract?</p></div>",
    images:[], answers:["Cestoda","Trematoda","Turbellaria","Polychaeta"], correct:0, points:1 },

  { id:91014, position:283, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Flukes — endoparasites with an oral sucker AND a ventral sucker (acetabulum) — belong to which class of Platyhelminthes?</p></div>",
    images:[], answers:["Trematoda","Cestoda","Turbellaria","Hirudinea"], correct:0, points:1 },

  { id:91015, position:284, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Schistosoma (blood fluke) and Fasciola hepatica both belong to which class?</p></div>",
    images:[], answers:["Trematoda","Cestoda","Turbellaria","Monogenea"], correct:0, points:1 },

  { id:91016, position:285, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Platyhelminthes is characterized by a body divided into a scolex plus repeating proglottid segments?</p></div>",
    images:[], answers:["Cestoda","Trematoda","Turbellaria","Oligochaeta"], correct:0, points:1 },

  // ══ PHYLUM ANNELIDA — CLASSES (286–292) ═══════════════════════════════════════

  { id:91017, position:286, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Nereis virens (the clamworm), a marine annelid with parapodia bearing many setae, belongs to which class?</p></div>",
    images:[], answers:["Polychaeta","Oligochaeta","Hirudinea","Turbellaria"], correct:0, points:1 },

  { id:91018, position:287, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Lumbricus terrestris (the common earthworm), with a clitellum on segments 32–37 and 5 pairs of aortic arches, belongs to which class of Annelida?</p></div>",
    images:[], answers:["Oligochaeta","Polychaeta","Hirudinea","Gastropoda"], correct:0, points:1 },

  { id:91019, position:288, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Hirudo medicinalis (medicinal leech) — with anterior and posterior suckers but NO setae — belongs to which class of Annelida?</p></div>",
    images:[], answers:["Hirudinea","Oligochaeta","Polychaeta","Turbellaria"], correct:0, points:1 },

  { id:91020, position:289, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Annelida is characterized by parapodia bearing many setae and is the dominant marine group?</p></div>",
    images:[], answers:["Polychaeta","Oligochaeta","Hirudinea","Insecta"], correct:0, points:1 },

  { id:91021, position:290, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Annelida has anterior AND posterior suckers, NO setae, and belongs to Clade Clitellata?</p></div>",
    images:[], answers:["Hirudinea","Polychaeta","Oligochaeta","Trematoda"], correct:0, points:1 },

  { id:91022, position:291, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Clade Clitellata (named for the shared clitellum structure) unites which two classes of Annelida?</p></div>",
    images:[], answers:["Oligochaeta and Hirudinea","Polychaeta and Oligochaeta","Polychaeta and Hirudinea","Turbellaria and Oligochaeta"], correct:0, points:1 },

  { id:91023, position:292, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Annelida is terrestrial/freshwater, has FEW setae per segment, NO parapodia, and includes the common earthworm?</p></div>",
    images:[], answers:["Oligochaeta","Polychaeta","Hirudinea","Gastropoda"], correct:0, points:1 },

  // ══ PHYLUM MOLLUSCA — CLASSES (293–300) ═══════════════════════════════════════

  { id:91024, position:293, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Snails and slugs — with a single spiral shell (absent in slugs) and a radula — belong to which class of Mollusca?</p></div>",
    images:[], answers:["Gastropoda","Bivalvia","Cephalopoda","Polyplacophora"], correct:0, points:1 },

  { id:91025, position:294, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Clams, oysters, mussels, and scallops — with two hinged valves and NO radula — belong to which class of Mollusca?</p></div>",
    images:[], answers:["Bivalvia","Gastropoda","Cephalopoda","Polyplacophora"], correct:0, points:1 },

  { id:91026, position:295, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Loligo/Doryteuthis (market squid) — with 8 arms + 2 tentacles, an internal pen, ink sac, and siphon — belongs to which class of Mollusca?</p></div>",
    images:[], answers:["Cephalopoda","Gastropoda","Bivalvia","Polyplacophora"], correct:0, points:1 },

  { id:91027, position:296, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Chitons — with 8 overlapping dorsal plates and a radula — belong to which class of Mollusca?</p></div>",
    images:[], answers:["Polyplacophora","Gastropoda","Bivalvia","Cephalopoda"], correct:0, points:1 },

  { id:91028, position:297, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Mollusca is the ONLY one that lacks a radula?</p></div>",
    images:[], answers:["Bivalvia","Gastropoda","Cephalopoda","Polyplacophora"], correct:0, points:1 },

  { id:91029, position:298, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Mollusca has 8 overlapping dorsal shell plates and is demonstrated (not dissected) in lab?</p></div>",
    images:[], answers:["Polyplacophora","Bivalvia","Gastropoda","Cephalopoda"], correct:0, points:1 },

  { id:91030, position:299, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Squid, octopus, nautilus, and cuttlefish all belong to which class of Mollusca?</p></div>",
    images:[], answers:["Cephalopoda","Gastropoda","Bivalvia","Polyplacophora"], correct:0, points:1 },

  { id:91031, position:300, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which class of Mollusca is characterized by TWO hinged valves and is the lab dissection specimen (clam)?</p></div>",
    images:[], answers:["Bivalvia","Gastropoda","Cephalopoda","Polyplacophora"], correct:0, points:1 },

  // ══ PHYLUM ARTHROPODA — SUBPHYLA & CLASSES (301–312) ══════════════════════════

  { id:91032, position:301, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Spiders, scorpions, ticks, and mites — with 8 legs (4 pairs) and a cephalothorax + abdomen — belong to which class of Arthropoda?</p></div>",
    images:[], answers:["Arachnida","Insecta","Malacostraca","Chilopoda"], correct:0, points:1 },

  { id:91033, position:302, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Lobsters, crabs, crayfish, shrimp, and pill bugs belong to which class of Crustacea?</p></div>",
    images:[], answers:["Malacostraca","Maxillopoda","Arachnida","Insecta"], correct:0, points:1 },

  { id:91034, position:303, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Insects (grasshoppers, beetles, flies, bees, etc.) — 6 legs, 3 body regions — belong to which class of Subphylum Hexapoda?</p></div>",
    images:[], answers:["Insecta","Arachnida","Malacostraca","Diplopoda"], correct:0, points:1 },

  { id:91035, position:304, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Centipedes — with ONE pair of legs per body segment and predatory venomous forcipules — belong to which class of Arthropoda?</p></div>",
    images:[], answers:["Chilopoda","Diplopoda","Arachnida","Insecta"], correct:0, points:1 },

  { id:91036, position:305, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Millipedes — with TWO pairs of legs per body segment and a cylindrical detritivore body — belong to which class of Arthropoda?</p></div>",
    images:[], answers:["Diplopoda","Chilopoda","Arachnida","Malacostraca"], correct:0, points:1 },

  { id:91037, position:306, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Barnacles and copepods — with reduced or highly modified appendages — belong to which class of Crustacea?</p></div>",
    images:[], answers:["Maxillopoda","Malacostraca","Arachnida","Merostomata"], correct:0, points:1 },

  { id:91038, position:307, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Horseshoe crabs — a \"living fossil\" with 10 walking legs, a cephalothorax + abdomen + telson, and NOT a true crab — belong to which class?</p></div>",
    images:[], answers:["Merostomata","Malacostraca","Arachnida","Maxillopoda"], correct:0, points:1 },

  { id:91039, position:308, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>How many legs does Class Arachnida have? (This distinguishes arachnids from insects.)</p></div>",
    images:[], answers:["8 legs (4 pairs)","6 legs (3 pairs)","10 legs","14 legs"], correct:0, points:1 },

  { id:91040, position:309, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which arthropod subphylum has chelicerae instead of antennae? (Includes spiders, scorpions, horseshoe crabs.)</p></div>",
    images:[], answers:["Chelicerata","Crustacea","Hexapoda","Myriapoda"], correct:0, points:1 },

  { id:91041, position:310, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which arthropod subphylum has TWO pairs of antennae and breathes via gills? (Includes crayfish, lobsters, crabs, barnacles.)</p></div>",
    images:[], answers:["Crustacea","Chelicerata","Hexapoda","Myriapoda"], correct:0, points:1 },

  { id:91042, position:311, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Pill bugs (roly-polies) belong to which order of Class Malacostraca?</p></div>",
    images:[], answers:["Isopoda","Decapoda","Diptera","Orthoptera"], correct:0, points:1 },

  { id:91043, position:312, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>The crayfish dissection represents Order Decapoda of Class Malacostraca. \"Decapoda\" means what?</p></div>",
    images:[], answers:["ten feet / ten legs","four wings","many bristles","two antennae"], correct:0, points:1 },

  // ══ CLASS INSECTA — ORDERS (313–324) ══════════════════════════════════════════

  { id:91044, position:313, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Beetles (ladybugs, weevils, fireflies) — with hardened front wings called elytra — belong to which order? This is the LARGEST insect order.</p></div>",
    images:[], answers:["Coleoptera","Diptera","Lepidoptera","Hymenoptera"], correct:0, points:1 },

  { id:91045, position:314, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Houseflies, mosquitoes, and fruit flies — with ONE functional wing pair and hind wings modified into halteres (balance organs) — belong to which order?</p></div>",
    images:[], answers:["Diptera","Coleoptera","Lepidoptera","Orthoptera"], correct:0, points:1 },

  { id:91046, position:315, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Butterflies and moths — with wings covered in tiny scales and a coiled proboscis — belong to which order?</p></div>",
    images:[], answers:["Lepidoptera","Diptera","Coleoptera","Hymenoptera"], correct:0, points:1 },

  { id:91047, position:316, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Bees, wasps, and ants — with 4 transparent wings (some wingless), highly social, membrane-winged — belong to which order?</p></div>",
    images:[], answers:["Hymenoptera","Coleoptera","Lepidoptera","Diptera"], correct:0, points:1 },

  { id:91048, position:317, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Grasshoppers, crickets, and katydids — with large hind legs for jumping — belong to which order? This is the lab dissection organism.</p></div>",
    images:[], answers:["Orthoptera","Hemiptera","Coleoptera","Diptera"], correct:0, points:1 },

  { id:91049, position:318, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Stink bugs, bed bugs, and aphids — with piercing-sucking mouthparts and a half-membranous front wing — belong to which order?</p></div>",
    images:[], answers:["Hemiptera","Orthoptera","Coleoptera","Diptera"], correct:0, points:1 },

  { id:91050, position:319, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which insect order is characterized by hardened front wings called elytra that cover the folded membranous hind wings?</p></div>",
    images:[], answers:["Coleoptera","Diptera","Lepidoptera","Hemiptera"], correct:0, points:1 },

  { id:91051, position:320, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which insect order has halteres — reduced, club-shaped hind wings used for balance during flight?</p></div>",
    images:[], answers:["Diptera","Coleoptera","Hymenoptera","Orthoptera"], correct:0, points:1 },

  { id:91052, position:321, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Which insect order has wings covered in tiny, overlapping scales — visible as the powder left on your fingers when you touch a wing?</p></div>",
    images:[], answers:["Lepidoptera","Hymenoptera","Diptera","Coleoptera"], correct:0, points:1 },

  { id:91053, position:322, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>What does the name \"Coleoptera\" mean, and what key structure identifies this order?</p></div>",
    images:[], answers:["sheath-winged; hardened elytra","two-winged; halteres","scale-winged; wing scales","straight-winged; jumping legs"], correct:0, points:1 },

  { id:91054, position:323, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>What does the name \"Lepidoptera\" mean?</p></div>",
    images:[], answers:["scale-winged","two-winged","sheath-winged","membrane-winged"], correct:0, points:1 },

  { id:91055, position:324, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>What does the name \"Diptera\" mean, and which feature in this group serves as a balance organ?</p></div>",
    images:[], answers:["two-winged; halteres","sheath-winged; elytra","scale-winged; proboscis","half-winged; beak"], correct:0, points:1 },

  // ══ CROSS-PHYLUM SPECIES IDENTIFICATION (325–332) ═════════════════════════════

  { id:91056, position:325, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Ascaris lumbricoides (giant roundworm) belongs to which phylum?</p></div>",
    images:[], answers:["Nematoda","Annelida","Platyhelminthes","Arthropoda"], correct:0, points:1 },

  { id:91057, position:326, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Dugesia tigrina (planarian) belongs to which phylum AND class?</p></div>",
    images:[], answers:["Platyhelminthes — Turbellaria","Annelida — Oligochaeta","Nematoda — (none)","Cnidaria — Hydrozoa"], correct:0, points:1 },

  { id:91058, position:327, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Aurelia aurita belongs to which phylum AND class?</p></div>",
    images:[], answers:["Cnidaria — Scyphozoa","Cnidaria — Hydrozoa","Cnidaria — Anthozoa","Cnidaria — Cubozoa"], correct:0, points:1 },

  { id:91059, position:328, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Lumbricus terrestris (common earthworm) belongs to which phylum AND class?</p></div>",
    images:[], answers:["Annelida — Oligochaeta","Annelida — Polychaeta","Annelida — Hirudinea","Nematoda — (none)"], correct:0, points:1 },

  { id:91060, position:329, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Loligo / Doryteuthis (market squid) belongs to which phylum AND class?</p></div>",
    images:[], answers:["Mollusca — Cephalopoda","Mollusca — Bivalvia","Mollusca — Gastropoda","Arthropoda — Malacostraca"], correct:0, points:1 },

  { id:91061, position:330, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Nereis virens is the scientific name for which common organism?</p></div>",
    images:[], answers:["clamworm (polychaete)","medicinal leech","common earthworm","planarian"], correct:0, points:1 },

  { id:91062, position:331, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Hirudo medicinalis belongs to which phylum AND class?</p></div>",
    images:[], answers:["Annelida — Hirudinea","Annelida — Polychaeta","Platyhelminthes — Turbellaria","Annelida — Oligochaeta"], correct:0, points:1 },

  { id:91063, position:332, type:"multiple_choice_question",
    question:"<div class=\"question_text user_content\"><p>Fasciola hepatica is the scientific name for which common organism, and what is its phylum and class?</p></div>",
    images:[], answers:["liver fluke — Platyhelminthes, Trematoda","tapeworm — Platyhelminthes, Cestoda","planarian — Platyhelminthes, Turbellaria","blood fluke — Platyhelminthes, Trematoda"], correct:0, points:1 },

];
