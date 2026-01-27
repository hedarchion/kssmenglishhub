// Quiz Data - 10 Levels of Questions
// Based on KSSM English Curriculum Content

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizLevel {
  level: number;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passScore: number;
}

export const quizLevels: QuizLevel[] = [
  {
    level: 1,
    title: "Curriculum Foundations",
    description: "Test your knowledge of the basic structure and philosophy of KSSM English",
    passScore: 3,
    questions: [
      {
        id: "l1q1",
        question: "What does CEFR stand for?",
        options: [
          "Common English Framework for References",
          "Common European Framework of Reference for Languages",
          "Curriculum English Framework for Reading",
          "Common Education Framework for References"
        ],
        correctAnswer: 1,
        explanation: "CEFR stands for Common European Framework of Reference for Languages, an international framework for language teaching, learning and assessment."
      },
      {
        id: "l1q2",
        question: "What is the CEFR level for Form 1?",
        options: ["A1", "A2 Mid Revised", "B1 Low", "B2"],
        correctAnswer: 1,
        explanation: "Form 1 is aligned to CEFR proficiency level A2 Mid Revised."
      },
      {
        id: "l1q3",
        question: "How many Content Standards are there for Listening in Form 1?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "There are 3 Content Standards for Listening: 1.1 (Understand meaning), 1.2 (Use strategies), and 1.3 (Recognise features)."
      },
      {
        id: "l1q4",
        question: "What are the four broad themes in SBELC?",
        options: [
          "People, Places, Things, Actions",
          "People and Culture, Health and Environment, Science and Technology, Consumerism and Financial Awareness",
          "Family, Friends, School, Community",
          "Reading, Writing, Listening, Speaking"
        ],
        correctAnswer: 1,
        explanation: "The four broad themes are: People and Culture, Health and Environment, Science and Technology, and Consumerism and Financial Awareness."
      },
      {
        id: "l1q5",
        question: "How many Performance Levels are there in the Performance Standards?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        explanation: "There are 6 Performance Levels arranged in an ascending manner to differentiate pupils' achievement."
      }
    ]
  },
  {
    level: 2,
    title: "Listening Standards",
    description: "Master the Content and Learning Standards for Listening",
    passScore: 3,
    questions: [
      {
        id: "l2q1",
        question: "What is the focus of Content Standard 1.1?",
        options: [
          "Use appropriate listening strategies",
          "Recognise features of spoken genres",
          "Understand meaning in a variety of familiar contexts",
          "Communicate information clearly"
        ],
        correctAnswer: 2,
        explanation: "Content Standard 1.1 focuses on understanding meaning in a variety of familiar contexts."
      },
      {
        id: "l2q2",
        question: "Which Learning Standard requires pupils to 'guess the meaning of unfamiliar words'?",
        options: ["1.1.1", "1.1.4", "1.2.1", "1.3.1"],
        correctAnswer: 2,
        explanation: "Learning Standard 1.2.1 requires pupils to guess the meaning of unfamiliar words from clues provided by other known words and by context."
      },
      {
        id: "l2q3",
        question: "What does Performance Level 6 indicate?",
        options: [
          "Requires support to achieve curriculum target",
          "On track to achieve curriculum target",
          "Achieves expectations",
          "Exceeds expectations to achieve curriculum target"
        ],
        correctAnswer: 3,
        explanation: "Performance Level 6 indicates that the pupil exceeds expectations to achieve curriculum target (A2 High) and displays exemplary model of language use."
      },
      {
        id: "l2q4",
        question: "Which Learning Standard has 'No learning standard (will be taught in subsequent years)' for Form 1?",
        options: ["1.1.1", "1.1.3", "1.1.5", "1.2.1"],
        correctAnswer: 1,
        explanation: "Learning Standard 1.1.3 (Understand attitude or opinion) has no learning standard for Form 1 as it will be taught in subsequent years."
      },
      {
        id: "l2q5",
        question: "What is the focus of Learning Standard 1.1.4?",
        options: [
          "Understand main ideas",
          "Understand specific information",
          "Understand longer sequences of supported classroom instructions",
          "Understand narratives"
        ],
        correctAnswer: 2,
        explanation: "Learning Standard 1.1.4 focuses on understanding longer sequences of supported classroom instructions."
      }
    ]
  },
  {
    level: 3,
    title: "Speaking Standards",
    description: "Test your knowledge of Speaking Content and Learning Standards",
    passScore: 3,
    questions: [
      {
        id: "l3q1",
        question: "How many Content Standards are there for Speaking?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "There are 4 Content Standards for Speaking: 2.1 (Communicate information), 2.2 (Use register), 2.3 (Use strategies), and 2.4 (Communicate to audience)."
      },
      {
        id: "l3q2",
        question: "What does Learning Standard 2.1.2 require pupils to do?",
        options: [
          "Ask about and give detailed information",
          "Ask about and express rules and obligations",
          "Ask about and describe future plans",
          "Explain and give reasons for advice"
        ],
        correctAnswer: 1,
        explanation: "Learning Standard 2.1.2 requires pupils to ask about and express rules and obligations."
      },
      {
        id: "l3q3",
        question: "Which Content Standard focuses on 'Use appropriate communication strategies'?",
        options: ["2.1", "2.2", "2.3", "2.4"],
        correctAnswer: 2,
        explanation: "Content Standard 2.3 focuses on using appropriate communication strategies."
      },
      {
        id: "l3q4",
        question: "What is the focus of Content Standard 2.4?",
        options: [
          "Spoken Interaction",
          "Spoken Production",
          "Written Communication",
          "Reading Comprehension"
        ],
        correctAnswer: 1,
        explanation: "Content Standard 2.4 focuses on Spoken Production - communicating appropriately to a small or large group on familiar topics."
      },
      {
        id: "l3q5",
        question: "Which Learning Standard requires pupils to 'narrate short stories, events and experiences'?",
        options: ["2.3.1", "2.3.2", "2.4.1", "2.1.5"],
        correctAnswer: 2,
        explanation: "Learning Standard 2.4.1 requires pupils to narrate short stories, events and experiences."
      }
    ]
  },
  {
    level: 4,
    title: "Reading & Writing Standards",
    description: "Master the standards for Reading and Writing skills",
    passScore: 3,
    questions: [
      {
        id: "l4q1",
        question: "How many Content Standards are there for Reading?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "There are 2 Content Standards for Reading: 3.1 (Understand texts) and 3.2 (Explore and expand ideas)."
      },
      {
        id: "l4q2",
        question: "What does Learning Standard 3.1.3 require pupils to do?",
        options: [
          "Understand main points",
          "Understand specific information",
          "Guess the meaning of unfamiliar words",
          "Use reference resources"
        ],
        correctAnswer: 2,
        explanation: "Learning Standard 3.1.3 requires pupils to guess the meaning of unfamiliar words from clues provided by other known words and by context."
      },
      {
        id: "l4q3",
        question: "How many Content Standards are there for Writing?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "There are 2 Content Standards for Writing: 4.1 (Communicate intelligibly) and 4.2 (Communicate with appropriate language, form and style)."
      },
      {
        id: "l4q4",
        question: "What does Learning Standard 4.2.1 require pupils to do?",
        options: [
          "Write about themselves",
          "Connect sentences into a coherent paragraph using basic coordinating conjunctions and reference words",
          "Write about future plans",
          "Give reasons for advice"
        ],
        correctAnswer: 1,
        explanation: "Learning Standard 4.2.1 requires pupils to connect sentences into a coherent paragraph using basic coordinating conjunctions and reference words."
      },
      {
        id: "l4q5",
        question: "Which Learning Standard focuses on 'Write about rules and obligations'?",
        options: ["4.1.1", "4.1.2", "4.1.3", "4.1.4"],
        correctAnswer: 1,
        explanation: "Learning Standard 4.1.2 requires pupils to write about rules and obligations."
      }
    ]
  },
  {
    level: 5,
    title: "Literature in Action",
    description: "Test your understanding of Literature in Action standards",
    passScore: 3,
    questions: [
      {
        id: "l5q1",
        question: "How many Content Standards are there for Literature in Action?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "There are 3 Content Standards for Literature in Action: 5.1 (Engage with texts), 5.2 (Analyse and evaluate), and 5.3 (Express imaginative response)."
      },
      {
        id: "l5q2",
        question: "What does Content Standard 5.1 focus on?",
        options: [
          "Analyse and evaluate literary texts",
          "Engage with, respond to and interpret a variety of literary text types",
          "Express an imaginative response",
          "Use language in literary texts"
        ],
        correctAnswer: 1,
        explanation: "Content Standard 5.1 focuses on engaging with, responding to and interpreting a variety of literary text types."
      },
      {
        id: "l5q3",
        question: "What does Learning Standard 5.1.2 require pupils to do?",
        options: [
          "Engage with literary texts",
          "Respond imaginatively and intellectually to literary texts",
          "Interpret meaning in literary texts",
          "Analyse the use of language"
        ],
        correctAnswer: 1,
        explanation: "Learning Standard 5.1.2 requires pupils to respond imaginatively and intellectually to literary texts."
      },
      {
        id: "l5q4",
        question: "Which Content Standard focuses on 'Analyse and evaluate a variety of literary text types'?",
        options: ["5.1", "5.2", "5.3", "5.4"],
        correctAnswer: 1,
        explanation: "Content Standard 5.2 focuses on analysing and evaluating a variety of literary text types."
      },
      {
        id: "l5q5",
        question: "What does Learning Standard 5.2.1 require pupils to do?",
        options: [
          "Evaluate literary texts",
          "Analyse the use of language in literary texts",
          "Express imaginative response",
          "Engage with literary texts"
        ],
        correctAnswer: 1,
        explanation: "Learning Standard 5.2.1 requires pupils to analyse the use of language in literary texts."
      }
    ]
  },
  {
    level: 6,
    title: "Performance Standards",
    description: "Master the 6 Performance Levels and their descriptors",
    passScore: 4,
    questions: [
      {
        id: "l6q1",
        question: "What does Performance Level 1 indicate?",
        options: [
          "Achieves expectations",
          "Requires support to achieve curriculum target",
          "Exceeds expectations",
          "On track to achieve curriculum target"
        ],
        correctAnswer: 1,
        explanation: "Performance Level 1 indicates that the pupil hardly achieves the curriculum target even with a lot of support - they require support to achieve curriculum target (Revise A2)."
      },
      {
        id: "l6q2",
        question: "What does Performance Level 3 indicate?",
        options: [
          "Requires support",
          "On track to achieve",
          "Achieves expectations to achieve curriculum target",
          "Exceeds expectations"
        ],
        correctAnswer: 2,
        explanation: "Performance Level 3 indicates that the pupil achieves expectations to achieve curriculum target (Revise A2)."
      },
      {
        id: "l6q3",
        question: "What does Performance Level 6 indicate for Listening?",
        options: [
          "Acquires limited understanding",
          "Shows satisfactory understanding",
          "Shows very good understanding",
          "Acquires and uses skills independently, displays exemplary model"
        ],
        correctAnswer: 3,
        explanation: "Performance Level 6 indicates that the pupil acquires and uses listening skills independently, shows excellent understanding, and displays exemplary model of language use to others."
      },
      {
        id: "l6q4",
        question: "Which Performance Level indicates 'On track to exceed expectations to achieve curriculum target (A2 High)'?",
        options: ["Level 2", "Level 3", "Level 4", "Level 5"],
        correctAnswer: 2,
        explanation: "Performance Level 4 indicates that the pupil is on track to exceed expectations to achieve curriculum target (A2 High)."
      },
      {
        id: "l6q5",
        question: "What is the general description for Performance Level 2?",
        options: [
          "Hardly achieves curriculum target",
          "On track to achieve curriculum target",
          "Achieves expectations",
          "Exceeds expectations"
        ],
        correctAnswer: 1,
        explanation: "Performance Level 2 indicates that the pupil is on track to achieve curriculum target (Revise A2)."
      }
    ]
  },
  {
    level: 7,
    title: "Curriculum Framework",
    description: "Test your knowledge of 21st Century Skills and HOTS",
    passScore: 4,
    questions: [
      {
        id: "l7q1",
        question: "How many Pupils' Profile attributes are there in the 21st Century Skills?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 2,
        explanation: "There are 9 Pupils' Profile attributes: Resilient, Thinker, Communicator, Team Player, Inquisitive, Principled, Informed, Caring, and Patriotic."
      },
      {
        id: "l7q2",
        question: "Which of the following is NOT a Pupils' Profile attribute?",
        options: ["Resilient", "Thinker", "Creative", "Patriotic"],
        correctAnswer: 2,
        explanation: "'Creative' is not one of the 9 Pupils' Profile attributes. The attributes are: Resilient, Thinker, Communicator, Team Player, Inquisitive, Principled, Informed, Caring, and Patriotic."
      },
      {
        id: "l7q3",
        question: "What are the four cognitive levels of Higher Order Thinking Skills (HOTS)?",
        options: [
          "Remembering, Understanding, Applying, Analysing",
          "Applying, Analysing, Evaluating, Creating",
          "Knowledge, Comprehension, Application, Synthesis",
          "Listening, Speaking, Reading, Writing"
        ],
        correctAnswer: 1,
        explanation: "The four cognitive levels of HOTS are: Application, Analysis, Evaluation, and Creation."
      },
      {
        id: "l7q4",
        question: "What does 'Evaluation' in HOTS refer to?",
        options: [
          "Using knowledge in different situations",
          "Breaking down information into smaller parts",
          "Ability to consider, make decisions and justify decisions made",
          "Producing an idea using creative methods"
        ],
        correctAnswer: 2,
        explanation: "Evaluation refers to the ability to consider, make decisions using knowledge, experience, skills, and values and justify decisions made."
      },
      {
        id: "l7q5",
        question: "Which HOTS level involves 'Producing an idea or product using creative and innovative methods'?",
        options: ["Application", "Analysis", "Evaluation", "Creation"],
        correctAnswer: 3,
        explanation: "Creation involves producing an idea or product using creative and innovative methods."
      }
    ]
  },
  {
    level: 8,
    title: "Cross-Curricular Elements",
    description: "Master the 10 Cross-Curricular Elements",
    passScore: 4,
    questions: [
      {
        id: "l8q1",
        question: "How many Cross-Curricular Elements are there?",
        options: ["8", "9", "10", "12"],
        correctAnswer: 2,
        explanation: "There are 10 Cross-Curricular Elements in the SBELC."
      },
      {
        id: "l8q2",
        question: "Which of the following is NOT a Cross-Curricular Element?",
        options: [
          "Environmental Sustainability",
          "Science and Technology",
          "Physical Education",
          "Financial Education"
        ],
        correctAnswer: 2,
        explanation: "'Physical Education' is not one of the 10 Cross-Curricular Elements. The elements include Environmental Sustainability, Science and Technology, and Financial Education."
      },
      {
        id: "l8q3",
        question: "Which Cross-Curricular Element involves 'making calculated, sound financial decisions'?",
        options: [
          "Entrepreneurship",
          "Financial Education",
          "Global Sustainability",
          "Values"
        ],
        correctAnswer: 1,
        explanation: "Financial Education involves making calculated, sound financial decisions, practising ethical financial management, and managing finances with skill and accountability."
      },
      {
        id: "l8q4",
        question: "Which Cross-Curricular Element aims at developing pupils' awareness of global environmental change?",
        options: [
          "Environmental Sustainability",
          "Science and Technology",
          "Global Sustainability",
          "Creativity and Innovation"
        ],
        correctAnswer: 2,
        explanation: "Global Sustainability aims at developing pupils' awareness, knowledge and values relating to global environmental change as well as human well-being and development."
      },
      {
        id: "l8q5",
        question: "Which Cross-Curricular Element introduces entrepreneurial knowledge, skills and practice to pupils?",
        options: [
          "Creativity and Innovation",
          "Entrepreneurship",
          "Financial Education",
          "Information and Communications Technology"
        ],
        correctAnswer: 1,
        explanation: "Entrepreneurship introduces entrepreneurial knowledge, skills and practice to pupils, fostering an entrepreneurial mind-set through relevant activities."
      }
    ]
  },
  {
    level: 9,
    title: "Grammar & Vocabulary",
    description: "Test your knowledge of grammar topics and vocabulary categories",
    passScore: 4,
    questions: [
      {
        id: "l9q1",
        question: "Which grammar topic is listed for Form 1?",
        options: [
          "Third Conditional",
          "Present simple (affirmative, negative, questions, short answers)",
          "Future perfect continuous",
          "Mixed conditionals"
        ],
        correctAnswer: 1,
        explanation: "Present simple (affirmative, negative, questions, short answers) is a grammar topic for Form 1. Third Conditional and Future perfect continuous are Form 5 topics."
      },
      {
        id: "l9q2",
        question: "Which vocabulary category is NOT listed for Form 1?",
        options: [
          "Free-time activities",
          "Skills and abilities",
          "Travel and transport",
          "Weather"
        ],
        correctAnswer: 2,
        explanation: "'Travel and transport' is a Form 5 vocabulary category. Form 1 categories include Free-time activities, Skills and abilities, and Weather."
      },
      {
        id: "l9q3",
        question: "Which grammar topic involves 'could/couldn't'?",
        options: [
          "Past simple",
          "was/were",
          "could/couldn't (affirmative, negative, questions, short answers)",
          "Past continuous"
        ],
        correctAnswer: 2,
        explanation: "The grammar topic 'could/couldn't (affirmative, negative, questions, short answers)' is specifically listed for Form 1."
      },
      {
        id: "l9q4",
        question: "Which text type is listed for Form 1?",
        options: [
          "Reviews",
          "Scientific experiment reports",
          "Articles",
          "Song lyrics"
        ],
        correctAnswer: 2,
        explanation: "Articles is a text type listed for Form 1. Reviews, Scientific experiment reports, and Song lyrics are introduced in later forms."
      },
      {
        id: "l9q5",
        question: "What vocabulary category includes words like 'blizzard', 'cloudy', 'damp', 'dry'?",
        options: [
          "Natural disasters",
          "Weather",
          "Geography and landscape",
          "Science"
        ],
        correctAnswer: 1,
        explanation: "These words belong to the 'Weather' vocabulary category for Form 1."
      }
    ]
  },
  {
    level: 10,
    title: "Master Challenge",
    description: "The ultimate test covering all aspects of the curriculum",
    passScore: 5,
    questions: [
      {
        id: "l10q1",
        question: "What is the cascading structure of standards in SBELC?",
        options: [
          "Learning Standards → Content Standards → Performance Standards",
          "Content Standards → Learning Standards → Performance Standards",
          "Performance Standards → Content Standards → Learning Standards",
          "Content Standards → Performance Standards → Learning Standards"
        ],
        correctAnswer: 1,
        explanation: "The cascading structure is: Content Standards (broad goals) → Learning Standards (specific objectives) → Performance Standards (6 levels of achievement)."
      },
      {
        id: "l10q2",
        question: "What does 'SBELC' stand for?",
        options: [
          "Standard-Based English Learning Curriculum",
          "Standards-Based English Language Curriculum",
          "School-Based English Learning Certificate",
          "Secondary Basic English Language Course"
        ],
        correctAnswer: 1,
        explanation: "SBELC stands for Standards-Based English Language Curriculum."
      },
      {
        id: "l10q3",
        question: "Which Learning Standard requires pupils to 'Understand with little or no support the main ideas in simple longer texts'?",
        options: ["1.1.1", "1.1.2", "3.1.1", "3.1.2"],
        correctAnswer: 0,
        explanation: "Learning Standard 1.1.1 (Listening) requires pupils to understand with little or no support the main ideas in simple longer texts on a range of familiar topics."
      },
      {
        id: "l10q4",
        question: "What is the CEFR target level for Form 5?",
        options: ["B1 Low", "B1 Mid", "B1 High", "B2"],
        correctAnswer: 2,
        explanation: "Form 5 is aligned to CEFR proficiency level B1 High."
      },
      {
        id: "l10q5",
        question: "Which of the following is a key stage in SBELC?",
        options: [
          "Stage One: Year 1-3 (Lower Primary)",
          "Stage Two: Year 4-6 (Upper Primary)",
          "Stage Three: Form 1-3 (Lower Secondary)",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All are key stages: Stage One (Year 1-3), Stage Two (Year 4-6), Stage Three (Form 1-3), and Stage Four (Form 4-5)."
      },
      {
        id: "l10q6",
        question: "What does Learning Standard 2.3.1 require pupils to do?",
        options: [
          "Use register appropriately",
          "Keep interaction going in short exchanges by checking understanding",
          "Narrate short stories",
          "Ask about and describe personality"
        ],
        correctAnswer: 1,
        explanation: "Learning Standard 2.3.1 requires pupils to keep interaction going in short exchanges by checking understanding of what a speaker is saying."
      },
      {
        id: "l10q7",
        question: "Which Content Standard focuses on 'Explore and expand ideas for personal development by reading independently and widely'?",
        options: ["3.1", "3.2", "4.1", "4.2"],
        correctAnswer: 1,
        explanation: "Content Standard 3.2 focuses on exploring and expanding ideas for personal development by reading independently and widely."
      }
    ]
  }
];

// Helper to get total questions
export const getTotalQuestions = (): number => {
  return quizLevels.reduce((total, level) => total + level.questions.length, 0);
};

// Helper to get question by ID
export const getQuestionById = (id: string): QuizQuestion | undefined => {
  for (const level of quizLevels) {
    const question = level.questions.find(q => q.id === id);
    if (question) return question;
  }
  return undefined;
};
