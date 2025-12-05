// 面包坊关卡任务数据

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

export const bakeryTasks: TaskDialog[] = [
  {
    taskId: "bakery_task_1",
    botQuestions: {
      simple: "What would you like?",
      natural: "What can I get for you today?",
      native: "What'll it be?"
    },
    userAnswers: {
      simple: "I'll buy a fresh baguette.",
      natural: "I'd like a fresh baguette, please.",
      native: "Gimme a fresh baguette."
    },
    keywordsHint: ["baguette", "fresh", "buy"],
    en: "Buy a fresh baguette.",
    zh: "买一根新鲜法棍。"
  },
  {
    taskId: "bakery_task_2",
    botQuestions: {
      simple: "Do you need a cake?",
      natural: "Are you looking to order a cake?",
      native: "Need a cake?"
    },
    userAnswers: {
      simple: "I want to order a birthday cake.",
      natural: "I'd like to order a birthday cake, please.",
      native: "Can I order a birthday cake?"
    },
    keywordsHint: ["birthday", "cake", "order"],
    en: "Order a birthday cake.",
    zh: "订购生日蛋糕。"
  },
  {
    taskId: "bakery_task_3",
    botQuestions: {
      simple: "Do you have questions about the pastries?",
      natural: "Wondering what's in the filling?",
      native: "Curious about the filling?"
    },
    userAnswers: {
      simple: "What's in the filling?",
      natural: "Could you tell me what's in this filling?",
      native: "What's inside this?"
    },
    keywordsHint: ["filling", "inside", "what"],
    en: "Ask what is in the filling.",
    zh: "询问馅料是什么。"
  },
  {
    taskId: "bakery_task_4",
    botQuestions: {
      simple: "How many do you need?",
      natural: "How many donuts would you like?",
      native: "How many?"
    },
    userAnswers: {
      simple: "I'll buy a dozen donuts.",
      natural: "I'd like a dozen donuts, please.",
      native: "Gimme a dozen donuts."
    },
    keywordsHint: ["dozen", "donuts", "buy"],
    en: "Buy a dozen donuts.",
    zh: "买一打甜甜圈。"
  },
  {
    taskId: "bakery_task_5",
    botQuestions: {
      simple: "Do you want it sliced?",
      natural: "Would you like the bread sliced?",
      native: "Want it sliced?"
    },
    userAnswers: {
      simple: "Can you slice the bread?",
      natural: "Could I have the bread sliced, please?",
      native: "Can you slice this?"
    },
    keywordsHint: ["sliced", "bread", "cut"],
    en: "Ask for sliced bread.",
    zh: "要求切片面包。"
  }
];

export default bakeryTasks;
