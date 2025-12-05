// 奶茶店关卡任务数据

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

export const milkteaTasks: TaskDialog[] = [
  {
    taskId: "milktea_task_1",
    botQuestions: {
      simple: "What flavor do you want?",
      natural: "What would you like to order?",
      native: "What'll you have?"
    },
    userAnswers: {
      simple: "I'll have brown sugar boba.",
      natural: "I'd like brown sugar boba, please.",
      native: "Brown sugar boba, thanks."
    },
    keywordsHint: ["brown sugar", "boba", "order"],
    en: "Order brown sugar boba.",
    zh: "点一杯黑糖波霸。"
  },
  {
    taskId: "milktea_task_2",
    botQuestions: {
      simple: "How sweet?",
      natural: "What sugar level would you like?",
      native: "Sugar level?"
    },
    userAnswers: {
      simple: "50% sugar, please.",
      natural: "I'd like 50% sugar level, please.",
      native: "Make it 50% sugar."
    },
    keywordsHint: ["50%", "sugar", "level"],
    en: "Choose 50% sugar level.",
    zh: "选择50%糖度。"
  },
  {
    taskId: "milktea_task_3",
    botQuestions: {
      simple: "How much ice?",
      natural: "What ice level would you prefer?",
      native: "Ice level?"
    },
    userAnswers: {
      simple: "Less ice, please.",
      natural: "I'd like less ice, please.",
      native: "Go easy on the ice."
    },
    keywordsHint: ["less", "ice", "light"],
    en: "Ask for less ice.",
    zh: "要求少冰。"
  },
  {
    taskId: "milktea_task_4",
    botQuestions: {
      simple: "Do you want toppings?",
      natural: "Would you like to add any toppings?",
      native: "Want anything extra?"
    },
    userAnswers: {
      simple: "Add coconut jelly.",
      natural: "Could you add coconut jelly, please?",
      native: "Throw in some coconut jelly."
    },
    keywordsHint: ["coconut jelly", "add", "topping"],
    en: "Add coconut jelly.",
    zh: "添加椰果。"
  },
  {
    taskId: "milktea_task_5",
    botQuestions: {
      simple: "How will you pay?",
      natural: "How would you like to pay?",
      native: "Payment method?"
    },
    userAnswers: {
      simple: "I'll pay via QR code.",
      natural: "I'd like to pay via QR code, please.",
      native: "QR code, please."
    },
    keywordsHint: ["QR code", "pay", "scan"],
    en: "Pay via QR code.",
    zh: "用二维码支付。"
  }
];

export default milkteaTasks;
