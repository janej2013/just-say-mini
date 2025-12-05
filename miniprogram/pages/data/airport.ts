// 机场关卡任务数据

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

export const airportTasks: TaskDialog[] = [
  {
    taskId: "airport_task_1",
    botQuestions: {
      simple: "Hello! Do you need help finding the baggage claim?",
      natural: "Hi there! Are you looking for the baggage claim area?",
      native: "Hey, just landed? Need to know where to grab your bags?"
    },
    userAnswers: {
      simple: "Yes, where is the baggage claim?",
      natural: "Yeah, could you tell me where the baggage claim is?",
      native: "Yep! Where can I pick up my luggage?"
    },
    keywordsHint: ["baggage", "claim", "luggage"],
    en: "Ask where the baggage claim is.",
    zh: "询问行李提取处在哪里。"
  },
  {
    taskId: "airport_task_2",
    botQuestions: {
      simple: "Do you need to find the taxi pickup point?",
      natural: "Are you looking for where to catch a taxi?",
      native: "Need directions to the taxi stand?"
    },
    userAnswers: {
      simple: "Where is the taxi pickup point?",
      natural: "Could you tell me where the taxi pickup is?",
      native: "Yeah, where do I grab a cab?"
    },
    keywordsHint: ["taxi", "pickup", "stand"],
    en: "Find the taxi pickup point.",
    zh: "找到出租车上车点。"
  },
  {
    taskId: "airport_task_3",
    botQuestions: {
      simple: "Do you want to buy a SIM card?",
      natural: "Are you interested in getting a local SIM card?",
      native: "Looking to grab a SIM card at the kiosk?"
    },
    userAnswers: {
      simple: "Where can I buy a SIM card?",
      natural: "Could you show me where to buy a SIM card?",
      native: "Where's the best place to get a SIM card?"
    },
    keywordsHint: ["SIM card", "kiosk", "buy"],
    en: "Buy a SIM card at the kiosk.",
    zh: "在小卖部买电话卡。"
  },
  {
    taskId: "airport_task_4",
    botQuestions: {
      simple: "Do you need a city map?",
      natural: "Would you like a map of the city?",
      native: "Want to grab a city map?"
    },
    userAnswers: {
      simple: "Where can I get a map?",
      natural: "Could I get a map of the city?",
      native: "Yeah, where can I pick up a city map?"
    },
    keywordsHint: ["map", "city", "get"],
    en: "Ask for a map of the city.",
    zh: "询问城市地图。"
  },
  {
    taskId: "airport_task_5",
    botQuestions: {
      simple: "Did you lose your luggage?",
      natural: "Is your luggage missing?",
      native: "Can't find your bags?"
    },
    userAnswers: {
      simple: "I need to report lost luggage.",
      natural: "My luggage is missing, I'd like to report it.",
      native: "Yeah, my bags didn't show up. I need to file a report."
    },
    keywordsHint: ["lost", "luggage", "report"],
    en: "Report lost luggage.",
    zh: "报告行李丢失。"
  },
  {
    taskId: "airport_task_6",
    botQuestions: {
      simple: "Do you need the restroom?",
      natural: "Are you looking for the restroom?",
      native: "Need to find the bathroom?"
    },
    userAnswers: {
      simple: "Where is the restroom?",
      natural: "Could you tell me where the restroom is?",
      native: "Where's the bathroom around here?"
    },
    keywordsHint: ["restroom", "bathroom", "where"],
    en: "Ask where the restroom is.",
    zh: "询问洗手间在哪里。"
  }
];

export default airportTasks;
