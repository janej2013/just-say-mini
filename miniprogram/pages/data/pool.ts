// 泳池关卡任务数据

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

export const poolTasks: TaskDialog[] = [
  {
    taskId: "pool_task_1",
    botQuestions: {
      simple: "Do you need a swimming cap?",
      natural: "Would you like to buy a swimming cap?",
      native: "Need a cap?"
    },
    userAnswers: {
      simple: "I want to buy a swimming cap.",
      natural: "I'd like to buy a swimming cap, please.",
      native: "Yeah, I need a cap."
    },
    keywordsHint: ["swimming cap", "buy", "cap"],
    en: "Buy a swimming cap.",
    zh: "买一个泳帽。"
  },
  {
    taskId: "pool_task_2",
    botQuestions: {
      simple: "Looking for the facilities?",
      natural: "Are you looking for the shower?",
      native: "Need the shower?"
    },
    userAnswers: {
      simple: "Where's the shower?",
      natural: "Could you tell me where the shower is?",
      native: "Where can I shower?"
    },
    keywordsHint: ["shower", "where", "find"],
    en: "Ask where the shower is.",
    zh: "询问淋浴间在哪里。"
  },
  {
    taskId: "pool_task_3",
    botQuestions: {
      simple: "Is the water okay?",
      natural: "Wondering about the water temperature?",
      native: "Water temp okay?"
    },
    userAnswers: {
      simple: "What's the water temperature?",
      natural: "Could you tell me the water temperature?",
      native: "How warm is the water?"
    },
    keywordsHint: ["water", "temperature", "check"],
    en: "Check the water temperature.",
    zh: "检查水温。"
  },
  {
    taskId: "pool_task_4",
    botQuestions: {
      simple: "Do you need a locker?",
      natural: "Would you like to rent a locker?",
      native: "Need a locker?"
    },
    userAnswers: {
      simple: "I want to rent a locker.",
      natural: "I'd like to rent a locker, please.",
      native: "Can I get a locker?"
    },
    keywordsHint: ["rent", "locker", "get"],
    en: "Rent a locker.",
    zh: "租用储物柜。"
  },
  {
    taskId: "pool_task_5",
    botQuestions: {
      simple: "Do you want swimming lessons?",
      natural: "Interested in swimming lessons?",
      native: "Wanna learn to swim?"
    },
    userAnswers: {
      simple: "I want to sign up for lessons.",
      natural: "I'd like to sign up for swimming lessons, please.",
      native: "Can I sign up for lessons?"
    },
    keywordsHint: ["sign up", "lessons", "swimming"],
    en: "Sign up for lessons.",
    zh: "报名游泳课程。"
  }
];

export default poolTasks;
