// 菜市场关卡任务数据

export interface TaskDialog {
  taskId: string;
  botQuestions: {
    simple: string;
    natural: string;
    native: string;
  };
  userAnswers: {
    simple: string;
    natural: string;
    native: string;
  };
  keywordsHint: string[];
  en: string;
  zh: string;
}

export const marketTasks: TaskDialog[] = [
  {
    taskId: "market_task_1",
    botQuestions: {
      simple: "Do you want a discount?",
      natural: "Looking to negotiate the price?",
      native: "Want to haggle?"
    },
    userAnswers: {
      simple: "Can you make it cheaper?",
      natural: "Could you give me a better price?",
      native: "How about a discount?"
    },
    keywordsHint: ["cheaper", "discount", "bargain"],
    en: "Bargain for cheaper fruit.",
    zh: "讨价还价买便宜的水果。"
  },
  {
    taskId: "market_task_2",
    botQuestions: {
      simple: "Are these fresh?",
      natural: "Wondering if the apples are fresh?",
      native: "These fresh?"
    },
    userAnswers: {
      simple: "Are the apples fresh?",
      natural: "Could you tell me if these apples are fresh?",
      native: "Are these apples fresh?"
    },
    keywordsHint: ["fresh", "apples", "check"],
    en: "Ask if apples are fresh.",
    zh: "询问苹果是否新鲜。"
  },
  {
    taskId: "market_task_3",
    botQuestions: {
      simple: "How much do you want?",
      natural: "How many kilos would you like?",
      native: "How much?"
    },
    userAnswers: {
      simple: "I'll buy 1kg of potatoes.",
      natural: "I'd like 1 kilogram of potatoes, please.",
      native: "Gimme a kilo of potatoes."
    },
    keywordsHint: ["1kg", "potatoes", "buy"],
    en: "Buy 1kg of potatoes.",
    zh: "买1公斤土豆。"
  },
  {
    taskId: "market_task_4",
    botQuestions: {
      simple: "Do you want a discount?",
      natural: "Would you like to ask for a lower price?",
      native: "Want a deal?"
    },
    userAnswers: {
      simple: "Can I get a discount?",
      natural: "Could I get a discount, please?",
      native: "Any discount?"
    },
    keywordsHint: ["discount", "lower", "deal"],
    en: "Ask for a discount.",
    zh: "要求打折。"
  },
  {
    taskId: "market_task_5",
    botQuestions: {
      simple: "Want to try before buying?",
      natural: "Would you like a sample?",
      native: "Want to taste it?"
    },
    userAnswers: {
      simple: "Can I taste a sample?",
      natural: "Could I try a sample, please?",
      native: "Can I get a taste?"
    },
    keywordsHint: ["taste", "sample", "try"],
    en: "Taste a sample.",
    zh: "品尝样品。"
  }
];

export default marketTasks;
