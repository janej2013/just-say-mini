// 公园关卡任务数据

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

export const parkTasks: TaskDialog[] = [
  {
    taskId: "park_task_1",
    botQuestions: {
      simple: "Looking for something?",
      natural: "Do you need to find the restroom?",
      native: "Need the bathroom?"
    },
    userAnswers: {
      simple: "Where's the restroom?",
      natural: "Could you tell me where the restroom is?",
      native: "Where's the bathroom?"
    },
    keywordsHint: ["restroom", "bathroom", "where"],
    en: "Ask where the restroom is.",
    zh: "询问洗手间在哪里。"
  },
  {
    taskId: "park_task_2",
    botQuestions: {
      simple: "Do you have a dog?",
      natural: "Are you looking for the dog park?",
      native: "Got a dog?"
    },
    userAnswers: {
      simple: "Where's the dog park?",
      natural: "Could you tell me where the dog park is?",
      native: "Where can I let my dog run?"
    },
    keywordsHint: ["dog park", "find", "where"],
    en: "Find the dog park.",
    zh: "找到狗公园。"
  },
  {
    taskId: "park_task_3",
    botQuestions: {
      simple: "Want a snack?",
      natural: "Would you like to buy ice cream?",
      native: "Ice cream?"
    },
    userAnswers: {
      simple: "I want to buy ice cream.",
      natural: "I'd like to buy some ice cream, please.",
      native: "Yeah, gimme some ice cream."
    },
    keywordsHint: ["ice cream", "buy", "get"],
    en: "Buy ice cream.",
    zh: "买冰淇淋。"
  },
  {
    taskId: "park_task_4",
    botQuestions: {
      simple: "Do you want a photo?",
      natural: "Would you like me to take a photo?",
      native: "Need a picture?"
    },
    userAnswers: {
      simple: "Can you take a photo of me?",
      natural: "Could you take a photo for me, please?",
      native: "Can you snap a pic?"
    },
    keywordsHint: ["photo", "take", "picture"],
    en: "Ask to take a photo.",
    zh: "请求拍照。"
  },
  {
    taskId: "park_task_5",
    botQuestions: {
      simple: "Do you want to rent a bike?",
      natural: "Interested in renting a bicycle?",
      native: "Wanna rent a bike?"
    },
    userAnswers: {
      simple: "I want to rent a bicycle.",
      natural: "I'd like to rent a bicycle, please.",
      native: "Can I rent a bike?"
    },
    keywordsHint: ["rent", "bicycle", "bike"],
    en: "Rent a bicycle.",
    zh: "租一辆自行车。"
  }
];

export default parkTasks;
