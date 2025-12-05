// 公寓关卡任务数据

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

export const apartmentTasks: TaskDialog[] = [
  {
    taskId: "apartment_task_1",
    botQuestions: {
      simple: "Are you new here?",
      natural: "Just moved in?",
      native: "New to the building?"
    },
    userAnswers: {
      simple: "Hi, I just moved in.",
      natural: "Hello! I'm your new neighbor.",
      native: "Hey! Just moved in next door."
    },
    keywordsHint: ["introduce", "neighbor", "moved in"],
    en: "Introduce yourself to neighbors.",
    zh: "向邻居介绍自己。"
  },
  {
    taskId: "apartment_task_2",
    botQuestions: {
      simple: "Do you know how to use the heater?",
      natural: "Are you familiar with the heating system?",
      native: "Know how the heater works?"
    },
    userAnswers: {
      simple: "How do I use the heater?",
      natural: "Could you show me how to use the heater?",
      native: "How does the heater work?"
    },
    keywordsHint: ["heater", "use", "heating"],
    en: "Ask how to use the heater.",
    zh: "询问如何使用暖气。"
  },
  {
    taskId: "apartment_task_3",
    botQuestions: {
      simple: "Do you recycle?",
      natural: "Are you familiar with recycling rules?",
      native: "Know about recycling here?"
    },
    userAnswers: {
      simple: "Where do I sort the recycling?",
      natural: "Could you tell me where to sort the recycling?",
      native: "Where does recycling go?"
    },
    keywordsHint: ["recycling", "sort", "trash"],
    en: "Sort the recycling.",
    zh: "分类回收垃圾。"
  },
  {
    taskId: "apartment_task_4",
    botQuestions: {
      simple: "Looking for something?",
      natural: "Need help finding something?",
      native: "Lost?"
    },
    userAnswers: {
      simple: "Where's the mailbox?",
      natural: "Could you tell me where the mailbox is?",
      native: "Where can I check my mail?"
    },
    keywordsHint: ["mailbox", "mail", "find"],
    en: "Find the mailbox.",
    zh: "找到信箱。"
  },
  {
    taskId: "apartment_task_5",
    botQuestions: {
      simple: "Is there a problem?",
      natural: "Do you need to report something?",
      native: "Something broken?"
    },
    userAnswers: {
      simple: "The tap is leaking.",
      natural: "I need to report a leaking tap.",
      native: "Yeah, my tap's leaking."
    },
    keywordsHint: ["leaking", "tap", "report"],
    en: "Report a leaking tap.",
    zh: "报告水龙头漏水。"
  }
];

export default apartmentTasks;
