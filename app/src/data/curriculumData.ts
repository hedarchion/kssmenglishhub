// KSSM English Curriculum Data - Forms 1-5
// Combined data from Syllabus and DSKP documents

export interface PerformanceStandard {
  band: string;
  descriptor: string;
}

export interface LearningStandard {
  code: string;
  description: string;
  performanceStandards?: PerformanceStandard[];
}

export interface SkillStandards {
  skill: string;
  standards: LearningStandard[];
}

export interface FormData {
  form: number;
  cefrLevel: string;
  themes: string[];
  grammar: string[];
  vocabulary: Record<string, string[]>;
  textTypes: string[];
  skills: SkillStandards[];
}

// Helper to get all grammar as formatted text
export const getAllGrammarText = (formData: FormData): string => {
  return `Form ${formData.form} Grammar (${formData.cefrLevel}):\n\n${formData.grammar.map((g, i) => `${i + 1}. ${g}`).join('\n')}`;
};

// Helper to get all vocabulary as formatted text
export const getAllVocabularyText = (formData: FormData): string => {
  const sections = Object.entries(formData.vocabulary).map(([category, words]) => {
    return `${category}:\n${words.join(', ')}`;
  });
  return `Form ${formData.form} Vocabulary (${formData.cefrLevel}):\n\n${sections.join('\n\n')}`;
};

// Helper to get all text types as formatted text
export const getAllTextTypesText = (formData: FormData): string => {
  return `Form ${formData.form} Text Types (${formData.cefrLevel}):\n\n${formData.textTypes.join(', ')}`;
};

// Helper to get all standards for a skill as formatted text
export const getAllStandardsText = (formData: FormData, skillName: string): string => {
  const skill = formData.skills.find(s => s.skill === skillName);
  if (!skill) return '';
  const standardsText = skill.standards.map(s => `${s.code}: ${s.description}`).join('\n');
  return `Form ${formData.form} ${skillName} Standards (${formData.cefrLevel}):\n\n${standardsText}`;
};

// Helper to get all skill standards with performance descriptors
export const getAllStandardsWithPerformanceText = (formData: FormData, skillName: string): string => {
  const skill = formData.skills.find(s => s.skill === skillName);
  if (!skill) return '';
  
  const standardsText = skill.standards.map(s => {
    let text = `${s.code}: ${s.description}`;
    if (s.performanceStandards && s.performanceStandards.length > 0) {
      text += '\n' + s.performanceStandards.map(p => `   ${p.band}: ${p.descriptor}`).join('\n');
    }
    return text;
  }).join('\n\n');
  
  return `Form ${formData.form} ${skillName} Standards with Performance Levels (${formData.cefrLevel}):\n\n${standardsText}`;
};

export const curriculumData: FormData[] = [
  {
    form: 1,
    cefrLevel: "A2 Mid",
    themes: [
      "People and Culture",
      "Health and Environment",
      "Science and Technology",
      "Consumerism and Financial Awareness"
    ],
    grammar: [
      "Present simple (affirmative, negative, questions, short answers)",
      "Present continuous (affirmative, negative, questions, short answers)",
      "Past simple (affirmative, negative, questions, short answers)",
      "was/were (affirmative, negative, questions, short answers)",
      "could/couldn't (affirmative, negative, questions, short answers)",
      "Past continuous (affirmative, negative, questions, short answers)",
      "Adjectives and Adverbs",
      "Comparatives and superlatives",
      "a/an, some, any, countable/uncountable nouns",
      "Much, many, a lot of",
      "will/won't (affirmative, negative, questions, short answers)",
      "First conditional",
      "Indirect questions with present and past tenses",
      "Past tense with sequencing adverbs (first, then, after that)",
      "Modal verbs for rules and obligations (must, mustn't, should, shouldn't)",
      "Present continuous, going to, will for future events",
      "Modal verbs for advice (can, could, should, shouldn't, might)",
      "Defining relative clauses (who, which, that)",
      "Growing range of prepositions",
      "Infinitive of purpose",
      "Passive sentences (present simple and past simple)"
    ],
    vocabulary: {
      "Free-time activities": ["chat online", "do water sports", "go to a café", "go to a concert", "go to the gym", "go for a run", "go shopping", "hang out with friends", "listen to music", "play computer games", "play volleyball", "send text messages", "surf the internet", "watch DVDs"],
      "Skills and abilities": ["act", "bake a cake", "cook", "dance", "do tricks", "draw", "drive a car", "paint", "play a musical instrument", "ride a motorbike", "sing", "speak a language", "tell jokes", "write songs"],
      "Time words": ["always", "at the moment", "every day", "now", "often", "once a week/month/year", "never", "sometimes", "today", "tonight", "usually"],
      "Literature": ["adventure story", "autobiography", "biography", "comic novel", "cookery book", "detective novel", "fairy tale", "historical novel", "poetry book", "romantic novel", "science fiction novel", "thriller", "travel guide"],
      "Professions": ["astronaut", "athlete", "comedian", "dancer", "engineer", "explorer", "inventor", "musician", "painter", "pilot", "politician", "scientist", "writer"],
      "Weather": ["blizzard", "cloudy", "damp", "dry", "foggy", "hailstones", "heatwave", "icy", "rainy", "snowy", "stormy", "sunny", "thunder and lightning", "warm", "wet", "windy"],
      "Natural disasters": ["avalanche", "drought", "earthquake", "famine", "flood", "hurricane", "landslide", "tornado", "tsunami", "volcano", "wildfire"],
      "Geography and landscape": ["beach", "canyon", "cave", "cliff", "coast", "desert", "forest", "island", "lake", "mountain", "ocean", "reef", "river", "valley", "waterfalls"],
      "Animals": ["bee", "butterfly", "crocodile", "elephant", "giraffe", "gorilla", "owl", "penguin", "polar bear", "rhinoceros", "snake", "tiger", "turtle", "whale"],
      "Science": ["battery", "clone", "cure", "disease", "DNA", "genetically modified crops", "planet", "satellite", "solar panel", "spacecraft", "vaccine", "wind turbine"],
      "Science in the classroom": ["acid", "air", "bubbles", "chemical reaction", "explosion", "gas", "gravity", "jug", "laboratory", "liquid", "pressure", "temperature", "test tube", "thermometer"]
    },
    textTypes: [
      "Articles", "Adverts", "Blog posts", "Charts", "Comics", "Dialogues",
      "Graphs", "Guides", "Instructions", "Interviews", "Leaflets", "Maps",
      "Message boards", "Online articles", "Poems", "Questionnaires", "Quizzes",
      "Stories", "Web pages"
    ],
    skills: [
      {
        skill: "Listening",
        standards: [
          { 
            code: "1.1", 
            description: "Understand meaning in a variety of familiar contexts",
            performanceStandards: [
              { band: "B1", descriptor: "Can understand the main points of clear standard speech on familiar matters" },
              { band: "B2", descriptor: "Can understand extended speech and lectures and follow complex lines of argument" },
              { band: "B3", descriptor: "Can understand most TV news and current affairs programmes" },
              { band: "B4", descriptor: "Can understand films in standard dialect" },
              { band: "B5", descriptor: "Can understand extended speech even when it is not clearly structured" },
              { band: "B6", descriptor: "Can understand television programmes and films without too much effort" }
            ]
          },
          { 
            code: "1.2", 
            description: "Use appropriate listening strategies in a variety of contexts",
            performanceStandards: [
              { band: "B1", descriptor: "Can use basic listening strategies to identify key information" },
              { band: "B2", descriptor: "Can use listening strategies to understand main ideas and specific details" },
              { band: "B3", descriptor: "Can adapt listening strategies according to purpose and context" },
              { band: "B4", descriptor: "Can effectively use a range of listening strategies" },
              { band: "B5", descriptor: "Can critically evaluate and respond to spoken texts" },
              { band: "B6", descriptor: "Can demonstrate sophisticated listening skills in all contexts" }
            ]
          },
          { 
            code: "1.3", 
            description: "Recognise features of spoken genres on familiar topics",
            performanceStandards: [
              { band: "B1", descriptor: "Can recognise basic features of common spoken genres" },
              { band: "B2", descriptor: "Can identify distinguishing features of different spoken genres" },
              { band: "B3", descriptor: "Can analyse how language features create meaning in spoken texts" },
              { band: "B4", descriptor: "Can explain the effect of language choices in spoken genres" },
              { band: "B5", descriptor: "Can critically evaluate genre conventions" },
              { band: "B6", descriptor: "Can create spoken texts using genre conventions effectively" }
            ]
          }
        ]
      },
      {
        skill: "Speaking",
        standards: [
          { 
            code: "2.1", 
            description: "Communicate information, ideas, opinions and feelings intelligibly on familiar topics",
            performanceStandards: [
              { band: "B1", descriptor: "Can communicate in simple and routine tasks requiring direct exchange of information" },
              { band: "B2", descriptor: "Can exchange information and ideas on familiar topics" },
              { band: "B3", descriptor: "Can express and respond to feelings and attitudes" },
              { band: "B4", descriptor: "Can engage in extended conversation on most general topics" },
              { band: "B5", descriptor: "Can express ideas and opinions with precision" },
              { band: "B6", descriptor: "Can communicate fluently and spontaneously without much obvious searching for expressions" }
            ]
          },
          { 
            code: "2.2", 
            description: "Use register appropriately",
            performanceStandards: [
              { band: "B1", descriptor: "Can use formal and informal register in basic situations" },
              { band: "B2", descriptor: "Can adjust register according to situation" },
              { band: "B3", descriptor: "Can use appropriate register in most situations" },
              { band: "B4", descriptor: "Can consistently use appropriate register" },
              { band: "B5", descriptor: "Can manipulate register for effect" },
              { band: "B6", descriptor: "Can use register with sophistication and sensitivity" }
            ]
          },
          { 
            code: "2.3", 
            description: "Use appropriate communication strategies",
            performanceStandards: [
              { band: "B1", descriptor: "Can use basic strategies to keep communication going" },
              { band: "B2", descriptor: "Can use strategies to clarify and confirm understanding" },
              { band: "B3", descriptor: "Can use a range of strategies to maintain interaction" },
              { band: "B4", descriptor: "Can effectively use communication strategies" },
              { band: "B5", descriptor: "Can adapt strategies flexibly" },
              { band: "B6", descriptor: "Can use sophisticated communication strategies effortlessly" }
            ]
          },
          { 
            code: "2.4", 
            description: "Communicate appropriately to a small or large group on familiar topics",
            performanceStandards: [
              { band: "B1", descriptor: "Can present information in a simple way to a small group" },
              { band: "B2", descriptor: "Can present ideas with some coherence to a group" },
              { band: "B3", descriptor: "Can engage an audience when presenting" },
              { band: "B4", descriptor: "Can present confidently to different audiences" },
              { band: "B5", descriptor: "Can adapt presentation style to audience and purpose" },
              { band: "B6", descriptor: "Can present complex topics with clarity and impact" }
            ]
          }
        ]
      },
      {
        skill: "Reading",
        standards: [
          { 
            code: "3.1", 
            description: "Understand a variety of texts by using a range of appropriate reading strategies to construct meaning",
            performanceStandards: [
              { band: "B1", descriptor: "Can understand texts that consist mainly of high frequency everyday language" },
              { band: "B2", descriptor: "Can understand texts related to areas of most immediate priority" },
              { band: "B3", descriptor: "Can understand the description of events, feelings and wishes in personal letters" },
              { band: "B4", descriptor: "Can read correspondence relating to interests and easily understand the essential meaning" },
              { band: "B5", descriptor: "Can understand long complex factual and literary texts" },
              { band: "B6", descriptor: "Can read with ease virtually all forms of written language" }
            ]
          },
          { 
            code: "3.2", 
            description: "Explore and expand ideas for personal development by reading independently and widely",
            performanceStandards: [
              { band: "B1", descriptor: "Can read short simple texts on familiar topics" },
              { band: "B2", descriptor: "Can read texts on topics of personal interest" },
              { band: "B3", descriptor: "Can read independently for information and enjoyment" },
              { band: "B4", descriptor: "Can read widely across different genres" },
              { band: "B5", descriptor: "Can critically evaluate what they read" },
              { band: "B6", descriptor: "Can use reading to support learning and personal growth" }
            ]
          }
        ]
      },
      {
        skill: "Writing",
        standards: [
          { 
            code: "4.1", 
            description: "Communicate intelligibly through print and digital media on familiar topics",
            performanceStandards: [
              { band: "B1", descriptor: "Can write short simple notes and messages relating to matters of immediate need" },
              { band: "B2", descriptor: "Can write personal letters describing experiences and impressions" },
              { band: "B3", descriptor: "Can write clear detailed text on a wide range of subjects" },
              { band: "B4", descriptor: "Can write an essay or report passing on information or giving reasons" },
              { band: "B5", descriptor: "Can write clear well-structured texts in an appropriate style" },
              { band: "B6", descriptor: "Can write clear smoothly flowing text in an appropriate style" }
            ]
          },
          { 
            code: "4.2", 
            description: "Communicate with appropriate language, form and style",
            performanceStandards: [
              { band: "B1", descriptor: "Can use basic conventions of written language" },
              { band: "B2", descriptor: "Can use appropriate form for different purposes" },
              { band: "B3", descriptor: "Can adapt style to audience and purpose" },
              { band: "B4", descriptor: "Can use language effectively for different purposes" },
              { band: "B5", descriptor: "Can craft writing with attention to language choices" },
              { band: "B6", descriptor: "Can write with sophistication and control of language" }
            ]
          }
        ]
      },
      {
        skill: "Literature in Action",
        standards: [
          { 
            code: "5.1", 
            description: "Engage with, respond to and interpret a variety of literary text types",
            performanceStandards: [
              { band: "B1", descriptor: "Can identify basic elements of literary texts" },
              { band: "B2", descriptor: "Can respond personally to literary texts" },
              { band: "B3", descriptor: "Can interpret meaning in literary texts" },
              { band: "B4", descriptor: "Can analyse how techniques create meaning" },
              { band: "B5", descriptor: "Can evaluate literary texts critically" },
              { band: "B6", descriptor: "Can demonstrate deep understanding of literary texts" }
            ]
          },
          { 
            code: "5.2", 
            description: "Analyse and evaluate a variety of literary text types",
            performanceStandards: [
              { band: "B1", descriptor: "Can identify simple literary devices" },
              { band: "B2", descriptor: "Can explain the effect of literary devices" },
              { band: "B3", descriptor: "Can analyse the use of language in texts" },
              { band: "B4", descriptor: "Can evaluate how techniques achieve effects" },
              { band: "B5", descriptor: "Can make informed judgments about texts" },
              { band: "B6", descriptor: "Can provide sophisticated analysis and evaluation" }
            ]
          },
          { 
            code: "5.3", 
            description: "Express an imaginative response to literary texts",
            performanceStandards: [
              { band: "B1", descriptor: "Can express simple personal responses" },
              { band: "B2", descriptor: "Can explain personal responses to texts" },
              { band: "B3", descriptor: "Can create responses inspired by texts" },
              { band: "B4", descriptor: "Can produce creative work based on literary models" },
              { band: "B5", descriptor: "Can develop imaginative responses with originality" },
              { band: "B6", descriptor: "Can create sophisticated imaginative responses" }
            ]
          }
        ]
      }
    ]
  },
  {
    form: 2,
    cefrLevel: "A2 High",
    themes: [
      "People and Culture",
      "Health and Environment",
      "Science and Technology",
      "Consumerism and Financial Awareness"
    ],
    grammar: [
      "be going to (affirmative, negative, questions)",
      "Time expression + will, when + will",
      "would like + infinitive (affirmative, negative, questions, short answers)",
      "Present perfect (affirmative, negative, questions, short answers)",
      "Present perfect + for and since",
      "Tense review (present simple, present continuous, past simple, past continuous, present perfect, will, be going to)",
      "should/shouldn't (affirmative, negative, questions, short answers)",
      "must/mustn't (affirmative, negative, questions, short answers)",
      "Review of present simple and present continuous",
      "Growing range of quantifiers (all, both, any, a few, a lot of, too much, too many)",
      "Review of past simple and past continuous",
      "Question forms and indirect questions",
      "Adjectives ending with -ed/-ing",
      "Comparatives and superlative adjectives",
      "Countable and uncountable nouns",
      "Modal verbs for rules and obligation (must, mustn't, have to, don't have to, had to, didn't have to)",
      "Question tags to show interest/request clarification",
      "Passive (present and past simple)",
      "Infinitive of purpose"
    ],
    vocabulary: {
      "Jobs and chores": ["babysit", "clean the windows", "deliver newspapers", "do the gardening", "do the ironing", "do the washing up", "lay the table", "make the beds", "pet sit", "take dogs for walks", "tidy your room", "wash cars"],
      "Money and shopping": ["borrow", "buy", "collect", "cost", "earn", "lend", "lose", "pay for", "save", "sell", "spend", "swap", "win"],
      "Transport": ["bicycle", "caravan", "coach", "ferry", "helicopter", "horse and carriage", "hot-air balloon", "lorry", "motorbike", "plane", "ship", "the Underground", "tram", "yacht"],
      "Verbs of movement (1)": ["arrive", "carry", "climb", "crash", "cross", "drive", "fall", "fly", "follow", "land", "pull", "push", "sail", "take off"],
      "Sport and competitions": ["captain", "champion", "coach", "goal", "loser", "match", "opponent", "race", "stadium", "supporter", "team", "tournament", "winner"],
      "Verbs of movement (2)": ["break", "carry", "cross", "drop", "meet", "open", "pick", "put", "scratch", "spill", "touch", "walk"],
      "Personal issues": ["appearance", "arguments", "bullying", "depression", "diet", "exercise", "health", "relationships", "social life", "stress", "vegetarian"],
      "Health": ["backache", "bee sting", "cold", "cough", "earache", "eye strain", "headache", "mosquito bite", "spots", "stomach ache", "sunburn", "toothache"]
    },
    textTypes: [
      "Articles", "Adverts", "Blog posts", "Brochures", "Charts", "Comics",
      "Dialogues", "Graphs", "Guides", "Instructions", "Interviews", "Leaflets",
      "Letters", "Maps", "Message boards", "News reports", "Online articles",
      "Poems", "Questionnaires", "Quizzes", "Stories", "Web pages"
    ],
    skills: [
      {
        skill: "Listening",
        standards: [
          { code: "1.1", description: "Understand meaning in a variety of familiar contexts" },
          { code: "1.2", description: "Use appropriate listening strategies in a variety of contexts" },
          { code: "1.3", description: "Recognise features of spoken genres on familiar topics" }
        ]
      },
      {
        skill: "Speaking",
        standards: [
          { code: "2.1", description: "Communicate information, ideas, opinions and feelings intelligibly on familiar topics" },
          { code: "2.2", description: "Use register appropriately" },
          { code: "2.3", description: "Use appropriate communication strategies" },
          { code: "2.4", description: "Communicate appropriately to a small or large group on familiar topics" }
        ]
      },
      {
        skill: "Reading",
        standards: [
          { code: "3.1", description: "Understand a variety of texts by using a range of appropriate reading strategies to construct meaning" },
          { code: "3.2", description: "Explore and expand ideas for personal development by reading independently and widely" }
        ]
      },
      {
        skill: "Writing",
        standards: [
          { code: "4.1", description: "Communicate intelligibly through print and digital media on familiar topics" },
          { code: "4.2", description: "Communicate with appropriate language, form and style" }
        ]
      },
      {
        skill: "Literature in Action",
        standards: [
          { code: "5.1", description: "Engage with, respond to and interpret a variety of literary text types" },
          { code: "5.2", description: "Analyse and evaluate a variety of literary text types" },
          { code: "5.3", description: "Express an imaginative response to literary texts" }
        ]
      }
    ]
  },
  {
    form: 3,
    cefrLevel: "B1 Low",
    themes: [
      "People and Culture",
      "Health and Environment",
      "Science and Technology",
      "Consumerism and Financial Awareness"
    ],
    grammar: [
      "Present perfect simple (with just, already and yet)",
      "Present perfect simple (with for and since)",
      "Present perfect simple vs. past simple",
      "Articles (a, an, the or no article)",
      "Adverbs of manner and comparison",
      "Indefinite pronouns (everyone, no one, someone, etc.)",
      "Present perfect continuous",
      "Present perfect continuous vs. present perfect simple",
      "Future forms (present simple, present continuous, going to, will/won't)",
      "The passive (present simple, past simple, present continuous, present perfect)",
      "Question tags to check information/make conversation",
      "Modals for prediction and possibility (might, may, will, probably)",
      "Modals for permission or prohibition in present and past",
      "Showing agreement using: So (do I); Neither/Nor (do I)",
      "Phrases to show opinion (in my opinion)",
      "Phrases for describing mood and emotion (it makes me feel)",
      "Connecting words: to explain and inform (in addition); to sequence (first, next, finally); for conclusions (to summarise)",
      "Numbering words to describe (it has three...)"
    ],
    vocabulary: {
      "Clothes and Accessories": ["cotton", "dress (v)", "glasses", "jacket", "jeans", "jumper", "leather", "material", "pattern", "plastic", "sandal", "scarf", "silk", "stripe", "sunglasses", "sweater", "tie", "underpants", "underwear", "undress (v)"],
      "Colours": ["black", "blue", "brown", "gold", "green", "grey", "orange", "pink", "purple", "red", "silver", "white", "yellow"],
      "Health": ["accident", "ambulance", "ankle", "bandage", "damage", "danger", "dangerous", "emergency", "feel better/ill/sick", "fever", "get better/worse", "heel", "medicine", "nurse", "operate", "operation", "pain", "painful", "patient (n)", "temperature", "well (adj)"],
      "House and home": ["basin", "bath(tub)", "bathroom", "digital (adj)", "downstairs", "duvet", "electric(al)", "laptop", "plug", "plug in", "remote control", "safe (adj)", "stay (v)", "telephone", "television", "TV (screen/set)", "upstairs (adv)", "video"],
      "Money and shopping": ["bargain", "bill", "cash", "change", "cheap", "choose", "complain", "customer", "exchange", "label", "logo", "price", "spend", "store"],
      "Personal Issues": ["afraid", "alone", "angry", "bored", "boring", "bossy", "brave", "busy", "calm", "clever", "cool", "crazy", "cruel", "cute", "difficult", "fond", "glad", "kind", "lazy", "lovely", "lucky", "noisy", "pretty", "quick", "quiet", "rude", "slim", "strange", "sure", "sweet", "tired", "worried"],
      "Work and jobs": ["assistant", "cv", "diary", "employ (v)", "employee", "employer", "employment", "factory", "housework", "instructions", "instructor", "journalist", "laboratory", "meeting", "message", "occupation", "staff", "unemployed"]
    },
    textTypes: [
      "Articles", "Adverts", "Blog posts", "Biographies", "Brochures", "Charts",
      "Comics", "Dialogues", "Emails", "Fables", "Graphs", "Guides",
      "Instructions", "Interviews", "Leaflets", "Letters", "Maps", "Message boards",
      "News reports", "Online articles", "Packaging information", "Poems",
      "Postcards", "Questionnaires", "Quizzes", "Recipes", "Song lyrics",
      "Stories", "Text messages", "Web pages"
    ],
    skills: [
      {
        skill: "Listening",
        standards: [
          { code: "1.1", description: "Understand meaning in a variety of familiar contexts" },
          { code: "1.2", description: "Use appropriate listening strategies in a variety of contexts" },
          { code: "1.3", description: "Recognise features of spoken genres on familiar topics" }
        ]
      },
      {
        skill: "Speaking",
        standards: [
          { code: "2.1", description: "Communicate information, ideas, opinions and feelings intelligibly on familiar topics" },
          { code: "2.2", description: "Use register appropriately" },
          { code: "2.3", description: "Use appropriate communication strategies" },
          { code: "2.4", description: "Communicate appropriately to a small or large group on familiar topics" }
        ]
      },
      {
        skill: "Reading",
        standards: [
          { code: "3.1", description: "Understand a variety of texts by using a range of appropriate reading strategies to construct meaning" },
          { code: "3.2", description: "Explore and expand ideas for personal development by reading independently and widely" }
        ]
      },
      {
        skill: "Writing",
        standards: [
          { code: "4.1", description: "Communicate intelligibly through print and digital media on familiar topics" },
          { code: "4.2", description: "Communicate with appropriate language, form and style in a variety of contexts" }
        ]
      },
      {
        skill: "Literature in Action",
        standards: [
          { code: "5.1", description: "Respond to, analyse and evaluate a variety of literary text types" },
          { code: "5.2", description: "Appreciate and inculcate values, positive attitude, patriotism and citizenship through language activities" }
        ]
      }
    ]
  },
  {
    form: 4,
    cefrLevel: "B1 Mid",
    themes: [
      "People and Culture",
      "Health and Environment",
      "Science and Technology",
      "Consumerism and Financial Awareness"
    ],
    grammar: [
      "Broader range of intensifiers (too, so, such)",
      "Used to and would (for past habits, routines and states)",
      "Would for imaginary situations",
      "Be able to/can/manage to",
      "I wish (Wish + Past Simple - Regrets about now)",
      "Zero, First and Second Conditional (unless in first conditional)",
      "Neither...nor / Either...or",
      "Reflexive pronouns",
      "Reported speech (requests/reporting verbs: agree to, remind someone to, suggest that, accuse of, deny + ing, refuse to)",
      "Connecting words expressing contrast (although, even though, however, in case, despite, in spite of)",
      "Connecting words expressing cause (because, because of, as a result of, due to)",
      "Connecting words expressing effect (so, consequently, as a result, thus, therefore)",
      "Wh- questions in the present and past",
      "Indirect questions with know, wonder etc.",
      "Asking for help/offering advice (Would you mind/like + -ing?)"
    ],
    vocabulary: {
      "Clothes and Accessories": ["chain", "collar", "earring", "fashion", "fit (v)", "fold (v)", "glove", "handbag", "handkerchief", "jewellery/jewelry", "make-up", "match (v)", "necklace", "perfume", "purse", "sleeve(less)", "suit", "swimming costume", "swimsuit", "tracksuit", "trainers", "wallet", "wool(len)"],
      "Environment": ["bottle bank", "litter", "recycle", "recycled", "recycling", "rubbish (bin)"],
      "Health": ["bleed (v)", "blood (n)", "breath", "breathe", "chemist", "gym", "gymnastics", "illness", "injure", "pharmacy", "pill", "prescription", "problem", "recover", "tablet"],
      "House and home": ["accommodation", "address", "apartment", "flat", "flatmate", "neighbour", "property"],
      "Money and shopping": ["ad", "advert", "advertise", "advertisement", "bargain", "cheap", "cheque", "expensive", "inexpensive", "luxury", "reasonable", "receipt", "reduce", "reduced", "second-hand", "try on"],
      "Personal Issues": ["amazed", "amazing", "amusing", "awful", "beautiful", "brilliant", "careful", "cheerful", "confident", "confused", "confusing", "curious", "excellent", "excited", "exciting", "keen", "miserable", "negative", "nervous", "pleasant", "reasonable", "relaxed", "reliable", "satisfied", "surprised"],
      "Work and jobs": ["application", "apply", "architect", "banker", "boss", "break (n)", "businessman", "businesswoman", "candidate", "career", "colleague", "conference", "contract", "department", "diploma", "manager", "profession", "professional", "qualification"]
    },
    textTypes: [
      "Articles", "Adverts", "Blog posts", "Biographies", "Brochures", "Charts",
      "Comics", "Dialogues", "Emails", "Fables", "Graphs", "Guides",
      "Instructions", "Interviews", "Leaflets", "Letters", "Maps", "Message boards",
      "News reports", "Online articles", "Packaging information", "Poems",
      "Postcards", "Questionnaires", "Quizzes", "Recipes", "Song lyrics",
      "Stories", "Text messages", "Web pages"
    ],
    skills: [
      {
        skill: "Listening",
        standards: [
          { code: "1.1", description: "Understand meaning in a variety of familiar contexts" },
          { code: "1.2", description: "Use appropriate listening strategies in a variety of contexts" },
          { code: "1.3", description: "Recognise features of spoken genres on familiar topics" }
        ]
      },
      {
        skill: "Speaking",
        standards: [
          { code: "2.1", description: "Communicate information, ideas, opinions and feelings intelligibly on familiar topics" },
          { code: "2.2", description: "Use register appropriately" },
          { code: "2.3", description: "Use appropriate communication strategies" },
          { code: "2.4", description: "Communicate appropriately to a small or large group on familiar topics" }
        ]
      },
      {
        skill: "Reading",
        standards: [
          { code: "3.1", description: "Understand a variety of texts by using a range of appropriate reading strategies to construct meaning" },
          { code: "3.2", description: "Explore and expand ideas for personal development by reading independently and widely" }
        ]
      },
      {
        skill: "Writing",
        standards: [
          { code: "4.1", description: "Communicate intelligibly through print and digital media on familiar topics" },
          { code: "4.2", description: "Communicate with appropriate language, form and style in a variety of contexts" }
        ]
      },
      {
        skill: "Literature in Action",
        standards: [
          { code: "5.1", description: "Respond to, analyse and evaluate a variety of literary text types" },
          { code: "5.2", description: "Appreciate and inculcate values, positive attitude, patriotism and citizenship through language activities" }
        ]
      }
    ]
  },
  {
    form: 5,
    cefrLevel: "B1 High",
    themes: [
      "People and Culture",
      "Health and Environment",
      "Science and Technology",
      "Consumerism and Financial Awareness"
    ],
    grammar: [
      "Future simple (using shall); future perfect simple; future perfect continuous",
      "Temporals (using: when, before, after, until, etc.)",
      "Third Conditional and mixed conditionals",
      "Gerunds and infinitives (using: make, let)",
      "Reported speech: commands and questions",
      "Modals for requests, offers and suggestions, necessity, deduction, advice, criticism",
      "The passive: impersonal and personal structures",
      "Causative forms (using: have or got)",
      "Explaining effects using determining verbs (caused, led to)",
      "Making comparisons to explain opinion (in the old days, in the past, nowadays, now)",
      "Connecting words expressing contrast (although, however, on the other hand)",
      "Using conditional sentences to explain reasons",
      "Phrases to show opinion (in my opinion)"
    ],
    vocabulary: {
      "Clothes and Accessories": ["blouse", "bracelet", "go (with/together) (phr v)", "old-fashioned (adj)", "put on (phr v)", "take off (phr v)", "try on (phr v)"],
      "Communications and technology": ["access", "blog", "blogger", "chat", "chat room", "click (v)", "connect", "connection", "delete", "download (n & v)", "drag", "enter", "hardware", "homepage", "install", "keyboard", "message", "mobile phone", "mouse", "mouse mat", "online", "operator", "password", "program(me)", "reply", "screen talk", "turn on webcam", "server", "software", "switch off text message", "volume", "text", "upload", "video clip", "web page", "website"],
      "Entertainment and media": ["actor", "actress", "admission", "adventure", "article", "audience", "band", "board game", "camera", "cartoon", "celebrity", "channel", "chat show", "cinema", "comedy", "comic", "concert", "disco", "DJ/disc jockey", "documentary", "drama", "entrance", "festival", "film maker", "film star", "go out", "group", "headline", "hip hop", "hit song", "instrument", "interval", "listen to", "look at", "music", "musician", "news", "newspaper", "paint", "painter", "perform", "performance", "performer", "pop music", "programme", "soap opera", "talk show"],
      "Environment": ["climate change", "gas (Am Eng)", "petrol (Br Eng)", "pollution", "public transport", "traffic jam"],
      "Health": ["go jogging", "keep fit", "lie down", "take exercise"],
      "The natural world": ["autumn (Br Eng)", "climate", "continent", "country", "countryside", "environmental", "fall (Am Eng)", "farmland", "forest", "mosquito", "mountain", "pollution", "scenery", "spring", "summer", "sunrise", "sunset", "today", "tomorrow", "wildlife", "winter"],
      "Personal Issues": ["annoyed", "anxious", "ashamed", "challenging", "charming", "delighted", "depressed", "disappointed", "disappointing", "embarrassed", "embarrassing", "favourite", "generous", "important", "intelligent", "interested", "interesting", "jealous", "ordinary", "original", "patient", "realistic", "reasonable", "wonderful"],
      "Travel and transport": ["abroad", "backpacker", "announcement", "arrival", "arrive", "backpack", "brochure", "check in (v)", "check out (v)", "check-in (n)", "currency", "customs", "depart", "departure", "destination", "direction", "facilities", "harbour", "immigration", "information", "journey", "land (v)", "licence", "nationality", "park (v)", "reception", "repair (v)", "reservation", "reserve", "return (n & v)", "sail (v)", "take off", "tour (n & v)"]
    },
    textTypes: [
      "Articles", "Adverts", "Blog posts", "Biographies", "Brochures", "Charts",
      "Comics", "Dialogues", "Emails", "Graphs", "Guides", "Instructions",
      "Interviews", "Leaflets", "Letters", "Maps", "Message boards", "News reports",
      "Online articles", "Packaging information", "Poems", "Questionnaires",
      "Quizzes", "Reviews (of films/book/music/exhibitions)", "Scientific experiment reports",
      "Stories/novels", "Text messages", "Web pages"
    ],
    skills: [
      {
        skill: "Listening",
        standards: [
          { code: "1.1", description: "Understand meaning in a variety of familiar contexts" },
          { code: "1.2", description: "Use appropriate listening strategies in a variety of contexts" },
          { code: "1.3", description: "Recognise features of spoken genres on familiar topics" }
        ]
      },
      {
        skill: "Speaking",
        standards: [
          { code: "2.1", description: "Communicate information, ideas, opinions and feelings intelligibly on familiar topics" },
          { code: "2.2", description: "Use register appropriately" },
          { code: "2.3", description: "Use appropriate communication strategies" },
          { code: "2.4", description: "Communicate appropriately to a small or large group on familiar topics" }
        ]
      },
      {
        skill: "Reading",
        standards: [
          { code: "3.1", description: "Understand a variety of texts by using a range of appropriate reading strategies to construct meaning" },
          { code: "3.2", description: "Explore and expand ideas for personal development by reading independently and widely" }
        ]
      },
      {
        skill: "Writing",
        standards: [
          { code: "4.1", description: "Communicate intelligibly through print and digital media on familiar topics" },
          { code: "4.2", description: "Communicate with appropriate language, form and style in a variety of contexts" }
        ]
      },
      {
        skill: "Literature in Action",
        standards: [
          { code: "5.1", description: "Respond to, analyse and evaluate a variety of literary text types" },
          { code: "5.2", description: "Appreciate and inculcate values, positive attitude, patriotism and citizenship through language activities" }
        ]
      }
    ]
  }
];

export const crossCurricularElements = [
  "Language",
  "Environmental Sustainability",
  "Values",
  "Science and Technology",
  "Patriotism and Citizenship",
  "Creativity and Innovation",
  "Entrepreneurship",
  "Information and Communications Technology",
  "Global Sustainability",
  "Financial Education"
];

export const pupilsProfile = [
  { name: "Resilient", description: "Pupils are steadfast in facing and overcoming hardship and challenges with wisdom, confidence, tolerance and empathy." },
  { name: "Thinker", description: "Pupils are able to think critically, creatively and innovatively; solve complex problems and make ethical judgments." },
  { name: "Communicator", description: "Pupils are able to voice out and express their thoughts, ideas and information with confidence and creativity." },
  { name: "Team Player", description: "Pupils are able to co-operate effectively and harmoniously with one another." },
  { name: "Inquisitive", description: "Pupils are able to develop natural inquisitiveness to explore new strategies and ideas." },
  { name: "Principled", description: "Pupils have a sense of integrity, sincerity, equality, fairness, high moral standards and respect." },
  { name: "Informed", description: "Pupils are able to obtain knowledge and develop a broad and balanced understanding across various disciplines." },
  { name: "Caring", description: "Pupils are able to show empathy, sympathy and respect towards the needs and feelings of others." },
  { name: "Patriotic", description: "Pupils are able to show their love, support and respect for the country." }
];

export const hotsLevels = [
  { level: "Applying", description: "Using knowledge, skills and values in different situations to complete a piece of work." },
  { level: "Analysing", description: "Breaking down information into smaller parts in order to understand and make connections between these parts." },
  { level: "Evaluating", description: "Considering, making decisions using knowledge, experience, skills, and values and justifying decisions made." },
  { level: "Creating", description: "Producing an idea or product using creative and innovative methods." }
];
