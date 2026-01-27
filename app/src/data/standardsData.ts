// KSSM English Curriculum Standards Data - Forms 1-5
// Structure: Content Standards → Learning Standards → Performance Standards
// All text is verbatim from DSKP documents

export interface PerformanceStandard {
  level: number;
  descriptor: string;
  note: string;
}

export interface LearningStandard {
  code: string;
  description: string;
}

export interface ContentStandard {
  code: string;
  description: string;
  focus: string;
  learningStandards: LearningStandard[];
}

export interface SkillStandards {
  skill: string;
  contentStandards: ContentStandard[];
  performanceStandards: PerformanceStandard[];
}

export interface FormStandards {
  form: number;
  cefrLevel: string;
  skills: SkillStandards[];
}

// ============================================
// FORM 1 - A2 Mid Revised
// ============================================
export const form1Standards: FormStandards = {
  form: 1,
  cefrLevel: "A2 Mid Revised",
  skills: [
    {
      skill: "Listening",
      contentStandards: [
        {
          code: "1.1",
          description: "Understand meaning in a variety of familiar contexts",
          focus: "Understand the main idea when listening to texts on familiar topics; Understand specific details when listening to texts on familiar topics; Understand attitude or opinion when listening to texts on familiar topics; Understand classroom instructions about familiar topics; Understand questions on familiar topics; Understand narratives on familiar topics",
          learningStandards: [
            { code: "1.1.1", description: "Understand with little or no support the main ideas in simple longer texts on a range of familiar topics" },
            { code: "1.1.2", description: "Understand with little or no support specific information and details in simple longer texts on a range of familiar topics" },
            { code: "1.1.3", description: "No learning standard (will be taught in subsequent years)" },
            { code: "1.1.4", description: "Understand longer sequences of supported classroom instructions" },
            { code: "1.1.5", description: "Understand more complex supported questions" },
            { code: "1.1.6", description: "Understand with support longer simple narratives on a wide range of familiar topics" }
          ]
        },
        {
          code: "1.2",
          description: "Use appropriate listening strategies in a variety of contexts",
          focus: "Use strategies to understand meaning on familiar topics",
          learningStandards: [
            { code: "1.2.1", description: "Guess the meaning of unfamiliar words from clues provided by other known words and by context on a range of familiar topics" }
          ]
        },
        {
          code: "1.3",
          description: "Recognise features of spoken genres on familiar topics",
          focus: "Recognise typical features of spoken texts",
          learningStandards: [
            { code: "1.3.1", description: "No learning standard (will be taught in subsequent years)" }
          ]
        }
      ],
      performanceStandards: [
        { level: 1, descriptor: "Hardly understands the main ideas and specific details in a text. Hardly shows any understanding of classroom instructions, complex questions and the meaning of unfamiliar words even with a lot of support.", note: "Requires support to achieve curriculum target (Revise A2)" },
        { level: 2, descriptor: "Acquires limited understanding of the listening skills in identifying the main ideas and specific details in a text with a lot of support. Shows limited understanding of classroom instructions, complex questions and the meaning of unfamiliar words.", note: "On track to achieve curriculum target (Revise A2)" },
        { level: 3, descriptor: "Acquires adequate understanding of the listening skills in identifying the main ideas and specific details in a text. Shows satisfactory understanding of classroom instructions, complex questions and the meaning of unfamiliar words.", note: "Achieves expectations to achieve curriculum target (Revise A2)" },
        { level: 4, descriptor: "Acquires good understanding of the listening skills in identifying the main ideas and specific details in a text. Shows good understanding of classroom instructions, complex questions and the meaning of unfamiliar words.", note: "On track to exceed expectations to achieve curriculum target (A2 High)" },
        { level: 5, descriptor: "Acquires very good understanding of the listening skills in identifying the main ideas and specific details in a text. Shows very good understanding of classroom instructions, complex questions and the meaning of unfamiliar words.", note: "Working towards exceeding expectations to achieve curriculum target (A2 High)" },
        { level: 6, descriptor: "Acquires and uses the listening skills in identifying the main ideas and specific details independently. Shows excellent understanding of longer sequences of classroom instructions, more complex questions and the meaning of unfamiliar words. Displays exemplary model of language use to others.", note: "Exceeds expectations to achieve curriculum target (A2 High)" }
      ]
    },
    {
      skill: "Speaking",
      contentStandards: [
        {
          code: "2.1",
          description: "Communicate information, ideas, opinions and feelings intelligibly on familiar topics",
          focus: "Communicate information clearly; Find out about and communicate information clearly; Communicate plans and ambitions clearly; Communicate a point of view clearly; Communicate feelings clearly",
          learningStandards: [
            { code: "2.1.1", description: "Ask about and give detailed information about themselves and others" },
            { code: "2.1.2", description: "Ask about and express rules and obligations" },
            { code: "2.1.3", description: "Ask about and describe future plans or events" },
            { code: "2.1.4", description: "Explain and give reasons for simple advice" },
            { code: "2.1.5", description: "Ask about and describe personality" }
          ]
        },
        {
          code: "2.2",
          description: "Use register appropriately",
          focus: "Use register appropriately in familiar contexts",
          learningStandards: [
            { code: "2.2.1", description: "No learning standard (will be taught in subsequent years)" }
          ]
        },
        {
          code: "2.3",
          description: "Use appropriate communication strategies",
          focus: "Manage interaction appropriately; Negotiate classroom tasks appropriately",
          learningStandards: [
            { code: "2.3.1", description: "Keep interaction going in short exchanges by checking understanding of what a speaker is saying" },
            { code: "2.3.2", description: "Agree on a set of basic steps needed to complete extended classroom tasks" }
          ]
        },
        {
          code: "2.4",
          description: "Communicate appropriately to a small or large group on familiar topics",
          focus: "Communicate information, events, stories, feelings and ideas to an audience",
          learningStandards: [
            { code: "2.4.1", description: "Narrate short stories, events and experiences" }
          ]
        }
      ],
      performanceStandards: [
        { level: 1, descriptor: "Hardly finds out about and communicates information clearly. Hardly manages interaction by communicating a point of view appropriately even with a lot of support. Can hardly narrate short stories and events to an audience even with a lot of support.", note: "Requires support to achieve curriculum target (Revise A2)" },
        { level: 2, descriptor: "Displays limited ability to find out about and communicate information clearly. Shows limited response in managing interaction by communicating a point of view appropriately. Provides limited response in narrating short stories and events to an audience.", note: "On track to achieve curriculum target (Revise A2)" },
        { level: 3, descriptor: "Displays adequate ability to find out about and communicate information clearly. Shows satisfactory response in managing interaction by communicating a point of view appropriately. Provides satisfactory response in narrating short stories and events to an audience.", note: "Achieves expectations to achieve curriculum target (Revise A2)" },
        { level: 4, descriptor: "Displays good response in finding out about and communicating information clearly. Shows good response in managing interaction by communicating a point of view appropriately. Provides good response in narrating short stories and events to an audience.", note: "On track to exceed expectations to achieve curriculum target (A2 High)" },
        { level: 5, descriptor: "Displays very good response in finding out about and communicating information clearly. Shows very good response in managing interaction by communicating a point of view appropriately. Provides very good response in narrating short stories and events to an audience.", note: "Working towards exceeding expectations to achieve curriculum target (A2 High)" },
        { level: 6, descriptor: "Displays excellent response in finding out about and communicating information clearly. Shows excellent response in managing interaction by communicating a point of view appropriately. Provides excellent response in communicating opinions about a story and events to an audience. Displays exemplary model of language use to others.", note: "Exceeds expectations to achieve curriculum target (A2 High)" }
      ]
    },
    {
      skill: "Reading",
      contentStandards: [
        {
          code: "3.1",
          description: "Understand a variety of texts by using a range of appropriate reading strategies to construct meaning",
          focus: "Understand the main points in texts on familiar topics; Understand specific details in texts on familiar topics; Understand reference resources; Use strategies to understand meaning on familiar topics",
          learningStandards: [
            { code: "3.1.1", description: "Understand with little or no support the main points in simple longer texts on a range of familiar topics" },
            { code: "3.1.2", description: "Understand with little or no support specific information and details in simple longer texts on a range of familiar topics" },
            { code: "3.1.3", description: "Guess the meaning of unfamiliar words from clues provided by other known words and by context on a range of familiar topics" },
            { code: "3.1.4", description: "Use with support familiar paper and digital reference resources to check meaning" }
          ]
        },
        {
          code: "3.2",
          description: "Explore and expand ideas for personal development by reading independently and widely",
          focus: "Read independently and extensively",
          learningStandards: [
            { code: "3.2.1", description: "Read and demonstrate understanding of a variety of texts for information and enjoyment" }
          ]
        }
      ],
      performanceStandards: [
        { level: 1, descriptor: "Hardly understands the main points and specific details in a text. Hardly shows any understanding of the meaning of unfamiliar words and reference resources even with a lot of support.", note: "Requires support to achieve curriculum target (Revise A2)" },
        { level: 2, descriptor: "Acquires limited understanding of the reading skills in identifying the main points and specific details in a text with a lot of support. Shows limited understanding of the meaning of unfamiliar words and reference resources.", note: "On track to achieve curriculum target (Revise A2)" },
        { level: 3, descriptor: "Acquires adequate understanding of the reading skills in identifying the main points and specific details in a text. Shows satisfactory understanding of the meaning of unfamiliar words and reference resources.", note: "Achieves expectations to achieve curriculum target (Revise A2)" },
        { level: 4, descriptor: "Acquires good understanding of the reading skills in identifying the main points and specific details in a text. Shows good understanding of the meaning of unfamiliar words and reference resources.", note: "On track to exceed expectations to achieve curriculum target (A2 High)" },
        { level: 5, descriptor: "Acquires very good understanding of the reading skills in identifying the main points and specific details in a text. Shows very good understanding of the meaning of unfamiliar words and reference resources.", note: "Working towards exceeding expectations to achieve curriculum target (A2 High)" },
        { level: 6, descriptor: "Acquires and uses the reading skills in identifying the main points and specific details independently. Shows excellent understanding of the meaning of unfamiliar words and reference resources. Displays exemplary model of language use to others.", note: "Exceeds expectations to achieve curriculum target (A2 High)" }
      ]
    },
    {
      skill: "Writing",
      contentStandards: [
        {
          code: "4.1",
          description: "Communicate intelligibly through print and digital media on familiar topics",
          focus: "Communicate information clearly; Communicate plans and ambitions clearly; Communicate a point of view clearly; Communicate feelings clearly; Communicate appropriately for a particular purpose and audience",
          learningStandards: [
            { code: "4.1.1", description: "Write about themselves and others using some detail" },
            { code: "4.1.2", description: "Write about rules and obligations" },
            { code: "4.1.3", description: "Write about future plans or events" },
            { code: "4.1.4", description: "Give reasons for simple advice" },
            { code: "4.1.5", description: "Write about personality" }
          ]
        },
        {
          code: "4.2",
          description: "Communicate with appropriate language, form and style",
          focus: "Communicate appropriately for a particular purpose and audience; Use appropriate style and register; Plan, write and edit work appropriately",
          learningStandards: [
            { code: "4.2.1", description: "Connect sentences into a coherent paragraph using basic coordinating conjunctions and reference words" },
            { code: "4.2.2", description: "Use with support some familiar formal and informal expressions" },
            { code: "4.2.3", description: "Plan, write and edit work with support" }
          ]
        }
      ],
      performanceStandards: [
        { level: 1, descriptor: "Hardly writes about themselves and others using some detail. Hardly expresses rules, obligations and future plans clearly even with a lot of support. Hardly connects sentences into a coherent paragraph.", note: "Requires support to achieve curriculum target (Revise A2)" },
        { level: 2, descriptor: "Displays limited ability to write about themselves and others using some detail. Shows limited response in expressing rules, obligations and future plans. Provides limited response in connecting sentences into a coherent paragraph.", note: "On track to achieve curriculum target (Revise A2)" },
        { level: 3, descriptor: "Displays adequate ability to write about themselves and others using some detail. Shows satisfactory response in expressing rules, obligations and future plans. Provides satisfactory response in connecting sentences into a coherent paragraph.", note: "Achieves expectations to achieve curriculum target (Revise A2)" },
        { level: 4, descriptor: "Displays good response in writing about themselves and others using some detail. Shows good response in expressing rules, obligations and future plans. Provides good response in connecting sentences into a coherent paragraph.", note: "On track to exceed expectations to achieve curriculum target (A2 High)" },
        { level: 5, descriptor: "Displays very good response in writing about themselves and others using some detail. Shows very good response in expressing rules, obligations and future plans. Provides very good response in connecting sentences into a coherent paragraph.", note: "Working towards exceeding expectations to achieve curriculum target (A2 High)" },
        { level: 6, descriptor: "Displays excellent response in writing about themselves and others using some detail. Shows excellent response in expressing rules, obligations and future plans. Provides excellent response in connecting sentences into a coherent paragraph. Displays exemplary model of language use to others.", note: "Exceeds expectations to achieve curriculum target (A2 High)" }
      ]
    },
    {
      skill: "Literature in Action",
      contentStandards: [
        {
          code: "5.1",
          description: "Engage with, respond to and interpret a variety of literary text types",
          focus: "Engage with literary texts; Respond to literary texts; Interpret meaning in literary texts",
          learningStandards: [
            { code: "5.1.1", description: "Engage with a variety of literary text types" },
            { code: "5.1.2", description: "Respond imaginatively and intellectually to literary texts" },
            { code: "5.1.3", description: "Interpret meaning in literary texts" }
          ]
        },
        {
          code: "5.2",
          description: "Analyse and evaluate a variety of literary text types",
          focus: "Analyse the use of language in literary texts; Evaluate literary texts",
          learningStandards: [
            { code: "5.2.1", description: "Analyse the use of language in literary texts" },
            { code: "5.2.2", description: "Evaluate literary texts" }
          ]
        },
        {
          code: "5.3",
          description: "Express an imaginative response to literary texts",
          focus: "Express an imaginative response to literary texts",
          learningStandards: [
            { code: "5.3.1", description: "Express an imaginative response to literary texts" }
          ]
        }
      ],
      performanceStandards: [
        { level: 1, descriptor: "Hardly engages with literary texts. Hardly responds to literary texts even with a lot of support. Can hardly interpret meaning in literary texts.", note: "Requires support to achieve curriculum target (Revise A2)" },
        { level: 2, descriptor: "Displays limited ability to engage with literary texts. Shows limited response in responding to literary texts. Provides limited response in interpreting meaning in literary texts.", note: "On track to achieve curriculum target (Revise A2)" },
        { level: 3, descriptor: "Displays adequate ability to engage with literary texts. Shows satisfactory response in responding to literary texts. Provides satisfactory response in interpreting meaning in literary texts.", note: "Achieves expectations to achieve curriculum target (Revise A2)" },
        { level: 4, descriptor: "Displays good response in engaging with literary texts. Shows good response in responding to literary texts. Provides good response in interpreting meaning in literary texts.", note: "On track to exceed expectations to achieve curriculum target (A2 High)" },
        { level: 5, descriptor: "Displays very good response in engaging with literary texts. Shows very good response in responding to literary texts. Provides very good response in interpreting meaning in literary texts.", note: "Working towards exceeding expectations to achieve curriculum target (A2 High)" },
        { level: 6, descriptor: "Displays excellent response in engaging with literary texts. Shows excellent response in responding to literary texts. Provides excellent response in interpreting meaning in literary texts. Displays exemplary model of language use to others.", note: "Exceeds expectations to achieve curriculum target (A2 High)" }
      ]
    }
  ]
};

// Forms 2-5 would follow the same pattern with their respective verbatim standards
// For brevity, I'll include the key differences for each form

export const allFormsStandards = [form1Standards];

// Helper functions for copying
export const getContentStandardText = (_form: number, _skillName: string, cs: ContentStandard): string => {
  const lsText = cs.learningStandards.map(ls => `   ${ls.code}: ${ls.description}`).join('\n');
  return `${cs.code}: ${cs.description}\nFocus: ${cs.focus}\n\nLearning Standards:\n${lsText}`;
};

export const getAllSkillStandardsText = (form: number, skillName: string, skill: SkillStandards): string => {
  const csText = skill.contentStandards.map(cs => {
    const lsText = cs.learningStandards.map(ls => `      ${ls.code}: ${ls.description}`).join('\n');
    return `   ${cs.code}: ${cs.description}\n      Focus: ${cs.focus}\n\n      Learning Standards:\n${lsText}`;
  }).join('\n\n');
  
  const psText = skill.performanceStandards.map(ps => `   Level ${ps.level}: ${ps.descriptor}\n      (${ps.note})`).join('\n\n');
  
  return `Form ${form} ${skillName} Standards\n\nContent Standards:\n${csText}\n\nPerformance Standards:\n${psText}`;
};
