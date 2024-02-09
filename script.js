//scipt.js

const words = ["altitude", "ambassador", "ambitious", "amendment", "amnesia", "analysis", "angelfish", "announce", "antenna", "antique", "antiseptic", "apparently", "astound", "astrology", "audience", "author", "automobile", "avenue", "awesome", "backpack", "bacteria", "ballet", "banis", "bareheaded", "blowgun", "blustering", "bologna", "boredom", "botany", "bothersome", "bouillon", "boundary", "bravado", "brigade", "brochure", "bronco", "brotherhood", "brunet", "bugaboo", "bulletin", "bullying", "buoyant", "burly", "burnish", "cadence", "cafeteria", "calculating", "candidate", "canister", "caramel", "caricature", "casualty", "catlike", "celebration", "centigrade", "certainly", "certify", "challenge", "character", "charcoal", "confetti", "consistent", "container", "controversial", "copyright", "courteous", "craftier", "criticism", "curable", "custody", "daffodil", "dangerous", "deadliness", "debrief", "decade", "decal", "diabetic", "dictionary", "diligence", "diminish", "diplomat", "disabled", "discourage", "disdainful", "disguise", "dishonest", "dispatch", "disrupt", "distortion", "disturbance", "dormant", "downtrodden", "drainage", "dressier", "dwelling", "dynamite", "eaglet", "eastward", "eccentric", "ecosystem", "efficiency", "eggplant", "electricity", "elemental", "erode", "erupt", "escalator", "essence", "establish", "etching", "eventual", "everlasting", "evolution", "exceed", "exhaust", "expansive", "expect", "explicit", "external", "extinguish", "facade", "factor", "fainthearted", "fallacy", "fascinate", "fashionable", "fatigue", "feasible", "fierceness", "filtrate", "finance", "finicky", "fixation", "flamingo", "flexible", "flippant", "fondant", "forcible", "foregoing", "Forgetful", "fortnight", "foundation", "fracture", "fragment", "fraternal", "fusible", "galosh", "galvanize", "gangrene", "gavotte", "gearshift", "gene", "generic", "genteel", "geologic", "grapefruit", "graphite", "gratitude", "gravy", "greasy", "greediness", "grieving", "grimace", "groundless", "grubbily", "guilty", "gumption", "gusto", "halfway", "hallucination", "helicopter", "herbivore", "heredity", "heroics", "hesitate", "heyday", "historical", "hoax", "holiness", "homonym", "hoodwink", "hopefulness", "horseradish", "hypodermic", "ideally", "identity", "idolatry", "illegible", "illuminate", "imagination", "imbalance", "immediate", "immerse", "impartial", "impostor", "insincere", "inspector", "intensity", "interval", "intimidate", "intricate", "introvert", "intuition", "investment", "invincible", "irksome", "irritant", "isolation", "Italian", "jacket", "jackhammer", "jargon", "jasmine", "jealous", "jeopardy", "jester", "kimono", "kindling", "king cobra", "kneehole", "knish", "knowledge", "laborious", "laconic", "laminated", "lamppost", "landholder", "lanyard", "latecomer", "latish", "launchpad", "lawless", "leafhopper", "leakage", "leaven", "lecture", "leek", "legible", "legitimate", "lengthen", "liable", "lotion", "loudspeaker", "lovable", "loyally", "lucent", "lullaby", "lynch", "lyrical", "machinery", "magnificent", "magnitude", "maintenance", "malnutrition", "mannerism", "manuscript", "minimum", "misery", "misfile", "misquote", "mockery", "momentum", "monsoon", "morale", "mortician", "mournful", "mulberry", "multiplication", "mundane", "murky", "mysterious", "myth", "namesake", "nanosecond", "narrate", "nasal", "naturalness", "nautical", "niche", "nimbleness", "ninja", "nitrogen", "nominal", "nondemocratic", "nonobjective", "nontropical", "nonwoven", "nosebleed", "notched", "noticeable", "novelty", "nowhere", "nullify", "numberless", "nunnery", "nutcracker", "oafish", "obelisk", "objectivity", "oblong", "obnoxious", "observable", "obstacle", "occupancy", "octopus", "online", "opal", "opponent", "optical", "optimist", "oration", "ordinance", "organization", "originally", "oust", "outdistance", "outrageous", "ovate", "overboard", "overcome", "overrule", "owing", "oxidize", "parachute", "paranoid", "parcel", "parole", "passenger", "passion", "pathology", "pawnbroker", "peasantry", "pecan", "petrified", "phobia", "phrase", "piddling", "pigment", "pistachio", "pledged", "procession", "protrusion", "publish", "quadrant", "quadrillion", "qualifier", "quandary", "quarterdeck", "querulously", "questionable", "quick-freeze", "quirky", "quorum", "quoting", "rebellion", "recessive", "recital", "rectify", "redeem", "refraction", "relapse", "releasing", "remedial", "remissible", "reportedly", "reservation", "respectful", "restriction", "retirement", "returnable", "revenge", "rewarding", "rhinestone", "ridicule", "rotation", "royalty", "rueful", "rupture", "sacrifice", "salutation", "sapphire", "sarcastic", "saturate", "scalpel", "scheming", "scholastic", "scoutmaster", "scrimmage", "sculptor", "sediment", "semester", "senator", "sensitive", "separation", "serenade", "specialist", "spigot", "squander", "stamina", "stampede", "starvation", "status", "subordinate", "subsequent", "suffix", "synthesis", "tactical", "tamale", "tasteful", "teachable", "tedious", "teenybopper", "teeter", "telltale", "temptation", "tenderize", "tentative", "term", "terrorize", "thickening", "thrasher", "thumbprint", "tightfisted", "time-honored", "tinderbox", "toiletry", "tonal", "treatment", "trembling", "trespassing", "trickster", "trifling", "truism", "tuition", "turbulent", "uglify", "ulterior", "unabated", "unarmed", "unbeknownst", "unbiased", "uncanny", "uncertain", "unseal", "unspeakable", "unyielding", "uproot", "utility", "utterance", "vagrant", "valiant", "vanity", "vantage", "vascular", "veil", "vengeful", "verdant", "vermin", "vocabulary", "vocalist", "vogue", "voluntary", "vulture", "wagered", "walkway", "warranty", "warthog", "wasteful", "winning", "woolen", "wrathful", "x-axis", "yachting", "yardage", "youthfulness", "zipper", "zonal", "zoological"];

let currentWordIndex;

function readAndSpeakWord() {
    currentWordIndex = getCurrentWordIndex();
    const currentWord = words[currentWordIndex];
    speakWord(currentWord);
    document.getElementById("userInput").value = "";
}

function checkSpelling() {
    const userInput = document.getElementById("userInput").value;
    const currentWord = words[currentWordIndex];
    if (userInput.toLowerCase() === currentWord.toLowerCase()) {
        speakFeedback("Correct!");
        document.getElementById("userInput").value = ""; // Clear input box
    } else {
        speakFeedback("Incorrect!");
    }
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
}

function speakFeedback(feedback) {
    const utterance = new SpeechSynthesisUtterance(feedback);
    speechSynthesis.speak(utterance);
    // Remove this line if you don't want to update any captions
    // document.getElementById("feedback").innerText = feedback;
}

function getCurrentWordIndex() {
    return Math.floor(Math.random() * words.length);
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        checkSpelling();
    }
}
