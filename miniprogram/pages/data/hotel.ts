// 酒店关卡任务数据

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

export const hotelTasks: TaskDialog[] = [
  {
    taskId: "hotel_task_1",
    botQuestions: {
      simple: "Do you have a reservation?",
      natural: "Have you booked a room with us?",
      native: "Got a reservation?"
    },
    userAnswers: {
      simple: "Yes, I'd like to check in.",
      natural: "Yes, I have a reservation. I'd like to check in.",
      native: "Yep, checking in now."
    },
    keywordsHint: ["check in", "reservation", "room"],
    en: "Check in to your room.",
    zh: "办理入住手续。"
  },
  {
    taskId: "hotel_task_2",
    botQuestions: {
      simple: "Do you need the Wi-Fi password?",
      natural: "Would you like the Wi-Fi password?",
      native: "Need the Wi-Fi code?"
    },
    userAnswers: {
      simple: "What's the Wi-Fi password?",
      natural: "Could you tell me the Wi-Fi password, please?",
      native: "What's the Wi-Fi password?"
    },
    keywordsHint: ["Wi-Fi", "password", "code"],
    en: "Ask for the Wi-Fi password.",
    zh: "询问 Wi-Fi 密码。"
  },
  {
    taskId: "hotel_task_3",
    botQuestions: {
      simple: "Do you need extra towels?",
      natural: "Would you like some extra towels?",
      native: "Need more towels?"
    },
    userAnswers: {
      simple: "Can I get extra towels?",
      natural: "Could I request some extra towels, please?",
      native: "Can I get a few more towels?"
    },
    keywordsHint: ["extra", "towels", "request"],
    en: "Request extra towels.",
    zh: "要求额外的毛巾。"
  },
  {
    taskId: "hotel_task_4",
    botQuestions: {
      simple: "Do you want to know about breakfast?",
      natural: "Are you interested in our breakfast service?",
      native: "Wondering about breakfast hours?"
    },
    userAnswers: {
      simple: "When is breakfast served?",
      natural: "Could you tell me when breakfast is served?",
      native: "What time's breakfast?"
    },
    keywordsHint: ["breakfast", "time", "served"],
    en: "Ask when breakfast is served.",
    zh: "询问早餐时间。"
  },
  {
    taskId: "hotel_task_5",
    botQuestions: {
      simple: "Do you need a wake-up call?",
      natural: "Would you like to book a wake-up call?",
      native: "Want a wake-up call?"
    },
    userAnswers: {
      simple: "Can I book a wake-up call?",
      natural: "I'd like to book a wake-up call for 7 AM, please.",
      native: "Can you wake me up at 7?"
    },
    keywordsHint: ["wake-up call", "book", "time"],
    en: "Book a wake-up call.",
    zh: "预订叫醒服务。"
  },
  {
    taskId: "hotel_task_6",
    botQuestions: {
      simple: "Do you need luggage storage?",
      natural: "Would you like to store your luggage?",
      native: "Need to stash your bags?"
    },
    userAnswers: {
      simple: "Can I store my luggage?",
      natural: "Could I store my luggage here, please?",
      native: "Can I leave my bags here?"
    },
    keywordsHint: ["store", "luggage", "bags"],
    en: "Ask to store your luggage.",
    zh: "询问行李寄存服务。"
  }
];

export default hotelTasks;
