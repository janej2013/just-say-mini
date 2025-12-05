// 咖啡厅关卡任务数据

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

export const cafeTasks: TaskDialog[] = [
  {
    taskId: "cafe_task_1",
    botQuestions: {
      simple: "What can I get you?",
      natural: "What would you like to order?",
      native: "What'll it be?"
    },
    userAnswers: {
      simple: "I'll have a latte with oat milk.",
      natural: "I'd like a latte with oat milk, please.",
      native: "Latte with oat milk, thanks."
    },
    keywordsHint: ["latte", "oat milk", "order"],
    en: "Order a latte with oat milk.",
    zh: "点一杯燕麦奶拿铁。"
  },
  {
    taskId: "cafe_task_2",
    botQuestions: {
      simple: "Do you need Wi-Fi?",
      natural: "Would you like the Wi-Fi code?",
      native: "Need the Wi-Fi?"
    },
    userAnswers: {
      simple: "What's the Wi-Fi code?",
      natural: "Could I get the Wi-Fi code, please?",
      native: "What's the Wi-Fi password?"
    },
    keywordsHint: ["Wi-Fi", "code", "password"],
    en: "Ask for the Wi-Fi code.",
    zh: "询问 Wi-Fi 密码。"
  },
  {
    taskId: "cafe_task_3",
    botQuestions: {
      simple: "Looking for a seat?",
      natural: "Would you like to find a seat?",
      native: "Need a spot?"
    },
    userAnswers: {
      simple: "Is there a seat with a plug?",
      natural: "Could I find a seat with a power outlet?",
      native: "Got a seat near a plug?"
    },
    keywordsHint: ["seat", "plug", "outlet"],
    en: "Find a seat with a plug.",
    zh: "找一个有插座的座位。"
  },
  {
    taskId: "cafe_task_4",
    botQuestions: {
      simple: "Would you like something to eat?",
      natural: "Interested in any pastries?",
      native: "Want anything to munch on?"
    },
    userAnswers: {
      simple: "I'll take a slice of cake.",
      natural: "I'd like a slice of cake, please.",
      native: "Yeah, gimme a slice of cake."
    },
    keywordsHint: ["cake", "slice", "order"],
    en: "Order a slice of cake.",
    zh: "点一块蛋糕。"
  },
  {
    taskId: "cafe_task_5",
    botQuestions: {
      simple: "Can I help with anything else?",
      natural: "Do you need anything warmed up?",
      native: "Want me to heat that up?"
    },
    userAnswers: {
      simple: "Can you heat up this muffin?",
      natural: "Could you heat up this muffin, please?",
      native: "Can you warm this muffin up?"
    },
    keywordsHint: ["heat", "muffin", "warm"],
    en: "Ask to heat up a muffin.",
    zh: "要求加热松饼。"
  }
];

export default cafeTasks;
