// 出租车关卡任务数据

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

export const taxiTasks: TaskDialog[] = [
  {
    taskId: "taxi_task_1",
    botQuestions: {
      simple: "Where do you want to go?",
      natural: "What's your destination?",
      native: "Where to?"
    },
    userAnswers: {
      simple: "Please take me to the Grand Hotel.",
      natural: "I'd like to go to the Grand Hotel, please.",
      native: "Grand Hotel, please."
    },
    keywordsHint: ["destination", "hotel", "go"],
    en: "Tell the driver your destination.",
    zh: "告诉司机你的目的地。"
  },
  {
    taskId: "taxi_task_2",
    botQuestions: {
      simple: "Do you want to know the fare?",
      natural: "Would you like to know how much it will cost?",
      native: "Want to know the fare upfront?"
    },
    userAnswers: {
      simple: "How much will it cost?",
      natural: "Could you tell me how much the fare is?",
      native: "What's the fare gonna be?"
    },
    keywordsHint: ["fare", "cost", "price"],
    en: "Ask how much the fare is.",
    zh: "询问车费是多少。"
  },
  {
    taskId: "taxi_task_3",
    botQuestions: {
      simple: "Is the AC okay?",
      natural: "Is the air conditioning comfortable?",
      native: "AC alright for you?"
    },
    userAnswers: {
      simple: "Can you turn on the AC?",
      natural: "Could you turn on the air conditioning, please?",
      native: "Mind turning the AC on?"
    },
    keywordsHint: ["AC", "air conditioning", "turn on"],
    en: "Ask to turn on the AC.",
    zh: "要求打开空调。"
  },
  {
    taskId: "taxi_task_4",
    botQuestions: {
      simple: "Do you want to stop somewhere?",
      natural: "Would you like to stop anywhere along the way?",
      native: "Need to make a stop?"
    },
    userAnswers: {
      simple: "Please stop at the corner.",
      natural: "Could you stop at the corner, please?",
      native: "Can you pull over at the corner?"
    },
    keywordsHint: ["stop", "corner", "pull over"],
    en: "Ask to stop at the corner.",
    zh: "要求在拐角处停车。"
  },
  {
    taskId: "taxi_task_5",
    botQuestions: {
      simple: "Do you need a receipt?",
      natural: "Would you like a receipt?",
      native: "Want a receipt?"
    },
    userAnswers: {
      simple: "Can I get a receipt?",
      natural: "Could I have a receipt, please?",
      native: "Can I get a receipt?"
    },
    keywordsHint: ["receipt", "get"],
    en: "Ask for a receipt.",
    zh: "索要收据。"
  },
  {
    taskId: "taxi_task_6",
    botQuestions: {
      simple: "Do you want to know the travel time?",
      natural: "Wondering how long the ride will take?",
      native: "Curious about the travel time?"
    },
    userAnswers: {
      simple: "How long will it take?",
      natural: "Could you tell me how long the ride will take?",
      native: "How long's the trip?"
    },
    keywordsHint: ["time", "long", "ride"],
    en: "Ask how long the ride will take.",
    zh: "询问行程需要多久。"
  }
];

export default taxiTasks;
