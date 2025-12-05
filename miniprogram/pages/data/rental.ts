// 租房中介关卡任务数据

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

export const rentalTasks: TaskDialog[] = [
  {
    taskId: "rental_task_1",
    botQuestions: {
      simple: "What kind of apartment are you looking for?",
      natural: "What type of place are you interested in?",
      native: "What are you looking for?"
    },
    userAnswers: {
      simple: "I want a 1-bedroom apartment.",
      natural: "I'm looking for a 1-bedroom apartment.",
      native: "A 1-bedroom would be great."
    },
    keywordsHint: ["1-bedroom", "apartment", "rent"],
    en: "Ask about 1-bedroom rent.",
    zh: "询问一居室的租金。"
  },
  {
    taskId: "rental_task_2",
    botQuestions: {
      simple: "Are you ready to sign the lease?",
      natural: "Would you like to proceed with the lease contract?",
      native: "Ready to sign the lease?"
    },
    userAnswers: {
      simple: "Yes, I'll sign the contract.",
      natural: "Yes, I'm ready to sign the lease contract.",
      native: "Yeah, let's do it."
    },
    keywordsHint: ["sign", "lease", "contract"],
    en: "Sign the lease contract.",
    zh: "签署租赁合同。"
  },
  {
    taskId: "rental_task_3",
    botQuestions: {
      simple: "Do you know about the deposit?",
      natural: "Have you heard about the security deposit?",
      native: "Know about the deposit?"
    },
    userAnswers: {
      simple: "How much is the deposit?",
      natural: "Could you tell me how much the deposit is?",
      native: "What's the deposit?"
    },
    keywordsHint: ["deposit", "security", "amount"],
    en: "Ask about the deposit.",
    zh: "询问押金。"
  },
  {
    taskId: "rental_task_4",
    botQuestions: {
      simple: "Do you want to know about utilities?",
      natural: "Are you interested in utility costs?",
      native: "Wondering about utility bills?"
    },
    userAnswers: {
      simple: "What are the utility costs?",
      natural: "Could you tell me about the utility costs?",
      native: "How much are utilities?"
    },
    keywordsHint: ["utility", "costs", "bills"],
    en: "Check utility costs.",
    zh: "了解水电费用。"
  },
  {
    taskId: "rental_task_5",
    botQuestions: {
      simple: "Do you have pets?",
      natural: "Are you planning to bring any pets?",
      native: "Got any pets?"
    },
    userAnswers: {
      simple: "What's the pet policy?",
      natural: "Could you tell me about the pet policy?",
      native: "Are pets allowed?"
    },
    keywordsHint: ["pet", "policy", "allowed"],
    en: "Ask about pet policy.",
    zh: "询问宠物政策。"
  }
];

export default rentalTasks;
