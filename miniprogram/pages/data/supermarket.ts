// 超市关卡任务数据

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

export const supermarketTasks: TaskDialog[] = [
  {
    taskId: "supermarket_task_1",
    botQuestions: {
      simple: "Looking for something?",
      natural: "Can I help you find something?",
      native: "Need help finding anything?"
    },
    userAnswers: {
      simple: "Where is the milk?",
      natural: "Could you tell me where the milk is?",
      native: "Where's the milk at?"
    },
    keywordsHint: ["milk", "where", "find"],
    en: "Ask where the milk is.",
    zh: "询问牛奶在哪里。"
  },
  {
    taskId: "supermarket_task_2",
    botQuestions: {
      simple: "Are you checking dates?",
      natural: "Looking at the expiry date?",
      native: "Checking if it's fresh?"
    },
    userAnswers: {
      simple: "What's the expiry date?",
      natural: "Could you help me check the expiry date?",
      native: "When does this expire?"
    },
    keywordsHint: ["expiry", "date", "check"],
    en: "Check the expiry date.",
    zh: "检查保质期。"
  },
  {
    taskId: "supermarket_task_3",
    botQuestions: {
      simple: "Need to weigh something?",
      natural: "Are you weighing vegetables?",
      native: "Weighing that?"
    },
    userAnswers: {
      simple: "How do I weigh the vegetables?",
      natural: "Could you show me how to weigh the vegetables?",
      native: "Where do I weigh these?"
    },
    keywordsHint: ["weigh", "vegetables", "scale"],
    en: "Weigh the vegetables.",
    zh: "称重蔬菜。"
  },
  {
    taskId: "supermarket_task_4",
    botQuestions: {
      simple: "Do you need a bag?",
      natural: "Would you like a plastic bag?",
      native: "Need a bag?"
    },
    userAnswers: {
      simple: "Can I get a plastic bag?",
      natural: "Could I have a plastic bag, please?",
      native: "Can I get a bag?"
    },
    keywordsHint: ["plastic", "bag", "get"],
    en: "Ask for a plastic bag.",
    zh: "索要塑料袋。"
  },
  {
    taskId: "supermarket_task_5",
    botQuestions: {
      simple: "How will you pay?",
      natural: "How would you like to pay?",
      native: "Cash or card?"
    },
    userAnswers: {
      simple: "I'll pay with credit card.",
      natural: "I'd like to pay with a credit card, please.",
      native: "Card, please."
    },
    keywordsHint: ["credit card", "pay", "card"],
    en: "Pay with credit card.",
    zh: "用信用卡支付。"
  }
];

export default supermarketTasks;
