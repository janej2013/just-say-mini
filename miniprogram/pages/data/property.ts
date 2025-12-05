// 物业关卡任务数据

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

export const propertyTasks: TaskDialog[] = [
  {
    taskId: "property_task_1",
    botQuestions: {
      simple: "Is something broken?",
      natural: "Do you need to report damage?",
      native: "Something need fixing?"
    },
    userAnswers: {
      simple: "The window is broken.",
      natural: "I need to report a broken window.",
      native: "Yeah, my window's cracked."
    },
    keywordsHint: ["broken", "window", "report"],
    en: "Report a broken window.",
    zh: "报告窗户破损。"
  },
  {
    taskId: "property_task_2",
    botQuestions: {
      simple: "Did you lose your key?",
      natural: "Do you need a spare key?",
      native: "Locked out?"
    },
    userAnswers: {
      simple: "Can I get a spare key?",
      natural: "I'd like to request a spare key, please.",
      native: "Can I get an extra key?"
    },
    keywordsHint: ["spare key", "key", "request"],
    en: "Ask for a spare key.",
    zh: "索要备用钥匙。"
  },
  {
    taskId: "property_task_3",
    botQuestions: {
      simple: "Is it time for the maintenance fee?",
      natural: "Are you here to pay the maintenance fee?",
      native: "Here to pay the fee?"
    },
    userAnswers: {
      simple: "I'm here to pay the maintenance fee.",
      natural: "I'd like to pay the maintenance fee.",
      native: "Yeah, paying the maintenance fee."
    },
    keywordsHint: ["maintenance", "fee", "pay"],
    en: "Pay the maintenance fee.",
    zh: "缴纳物业费。"
  },
  {
    taskId: "property_task_4",
    botQuestions: {
      simple: "Is there a problem?",
      natural: "Do you have a complaint?",
      native: "Something bothering you?"
    },
    userAnswers: {
      simple: "The neighbors are too noisy.",
      natural: "I'd like to complain about the noise.",
      native: "Yeah, the neighbors are way too loud."
    },
    keywordsHint: ["noise", "complaint", "neighbors"],
    en: "Complaint about noise.",
    zh: "投诉噪音问题。"
  },
  {
    taskId: "property_task_5",
    botQuestions: {
      simple: "Do you have a car?",
      natural: "Are you interested in parking information?",
      native: "Got a car?"
    },
    userAnswers: {
      simple: "What are the parking rules?",
      natural: "Could you tell me about the parking rules?",
      native: "What's the deal with parking?"
    },
    keywordsHint: ["parking", "rules", "car"],
    en: "Ask about parking rules.",
    zh: "询问停车规则。"
  }
];

export default propertyTasks;
