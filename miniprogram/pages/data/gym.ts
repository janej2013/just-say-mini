// 健身房关卡任务数据

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

export const gymTasks: TaskDialog[] = [
  {
    taskId: "gym_task_1",
    botQuestions: {
      simple: "Are you new here?",
      natural: "Would you like to sign up for membership?",
      native: "Joining today?"
    },
    userAnswers: {
      simple: "I want to sign up for membership.",
      natural: "I'd like to sign up for a membership, please.",
      native: "Yeah, I'm signing up."
    },
    keywordsHint: ["sign up", "membership", "join"],
    en: "Sign up for membership.",
    zh: "办理会员卡。"
  },
  {
    taskId: "gym_task_2",
    botQuestions: {
      simple: "Do you need help with equipment?",
      natural: "Need help learning the equipment?",
      native: "Need a demo?"
    },
    userAnswers: {
      simple: "How do I use the treadmill?",
      natural: "Could you show me how to use the treadmill?",
      native: "How does this treadmill work?"
    },
    keywordsHint: ["treadmill", "use", "how"],
    en: "Ask how to use the treadmill.",
    zh: "询问如何使用跑步机。"
  },
  {
    taskId: "gym_task_3",
    botQuestions: {
      simple: "Looking for something?",
      natural: "Are you trying to find the locker room?",
      native: "Need the locker room?"
    },
    userAnswers: {
      simple: "Where's the locker room?",
      natural: "Could you tell me where the locker room is?",
      native: "Where are the lockers?"
    },
    keywordsHint: ["locker room", "find", "where"],
    en: "Find the locker room.",
    zh: "找到更衣室。"
  },
  {
    taskId: "gym_task_4",
    botQuestions: {
      simple: "Do you want to join a class?",
      natural: "Interested in any classes?",
      native: "Wanna join a class?"
    },
    userAnswers: {
      simple: "I want to join a yoga class.",
      natural: "I'd like to join a yoga class, please.",
      native: "Can I join the yoga class?"
    },
    keywordsHint: ["yoga", "class", "join"],
    en: "Join a yoga class.",
    zh: "参加瑜伽课。"
  },
  {
    taskId: "gym_task_5",
    botQuestions: {
      simple: "Do you need a towel?",
      natural: "Would you like a towel?",
      native: "Need a towel?"
    },
    userAnswers: {
      simple: "Can I get a towel?",
      natural: "Could I have a towel, please?",
      native: "Can I grab a towel?"
    },
    keywordsHint: ["towel", "get", "need"],
    en: "Ask for a towel.",
    zh: "索要毛巾。"
  }
];

export default gymTasks;
