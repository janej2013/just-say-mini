// 快餐店关卡任务数据

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

export const fastfoodTasks: TaskDialog[] = [
  {
    taskId: "fastfood_task_1",
    botQuestions: {
      simple: "What would you like?",
      natural: "What can I get for you?",
      native: "What'll it be?"
    },
    userAnswers: {
      simple: "I'll have a combo meal.",
      natural: "I'd like a combo meal, please.",
      native: "Gimme a combo meal."
    },
    keywordsHint: ["combo", "meal", "order"],
    en: "Order a combo meal.",
    zh: "点一份套餐。"
  },
  {
    taskId: "fastfood_task_2",
    botQuestions: {
      simple: "Do you want pickles?",
      natural: "Would you like pickles on that?",
      native: "Pickles okay?"
    },
    userAnswers: {
      simple: "No pickles, please.",
      natural: "Could I have it without pickles, please?",
      native: "Hold the pickles."
    },
    keywordsHint: ["no pickles", "without", "hold"],
    en: "Ask for no pickles.",
    zh: "要求不加酸黄瓜。"
  },
  {
    taskId: "fastfood_task_3",
    botQuestions: {
      simple: "Do you need ketchup?",
      natural: "Would you like ketchup?",
      native: "Want ketchup?"
    },
    userAnswers: {
      simple: "Can I get extra ketchup?",
      natural: "Could I have extra ketchup, please?",
      native: "Extra ketchup, please."
    },
    keywordsHint: ["extra", "ketchup"],
    en: "Ask for extra ketchup.",
    zh: "要求额外的番茄酱。"
  },
  {
    taskId: "fastfood_task_4",
    botQuestions: {
      simple: "What size fries?",
      natural: "Would you like to upgrade your fries?",
      native: "Want large fries?"
    },
    userAnswers: {
      simple: "Upgrade to large fries.",
      natural: "I'd like to upgrade to large fries, please.",
      native: "Make it large fries."
    },
    keywordsHint: ["upgrade", "large", "fries"],
    en: "Upgrade to large fries.",
    zh: "升级到大份薯条。"
  },
  {
    taskId: "fastfood_task_5",
    botQuestions: {
      simple: "What drink?",
      natural: "What would you like to drink?",
      native: "What's your drink?"
    },
    userAnswers: {
      simple: "I'll have a diet soda.",
      natural: "I'd like a diet soda, please.",
      native: "Diet soda, thanks."
    },
    keywordsHint: ["diet", "soda", "drink"],
    en: "Order a diet soda.",
    zh: "点一杯无糖汽水。"
  }
];

export default fastfoodTasks;
