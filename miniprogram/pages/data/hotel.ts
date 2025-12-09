// 酒店关卡任务数据

export const cards = [
  {
    cardId: "hotel_c1",
    botHello: "Welcome! How may I assist you?",
    botBye: "Enjoy your stay!",
    npc: { 
      animal: 'Cat', 
      role: 'Receptionist' 
    },
    tasks: [
      {
        taskId: "hotel_c1_t1",
        desc: {
          en: "Check in to your room.",
          zh: "办理入住手续。"
        },
        bot: "Yes, I have your reservation. Here's your room key.",
        user: "I'd like to check in, please.",
        tips: {
          simple: "I want to check in.",
          natural: "I have a reservation. I'd like to check in.",
          native: "Checking in now."
        },
        pattern: "I'd like to ...",
        keywords: ["check in", "reservation", "room"]
      },
      {
        taskId: "hotel_c1_t2",
        desc: {
          en: "Ask for the Wi-Fi password.",
          zh: "询问 Wi-Fi 密码。"
        },
        bot: "The Wi-Fi password is written on the card in your room.",
        user: "What's the Wi-Fi password?",
        tips: {
          simple: "What's Wi-Fi password?",
          natural: "Could you tell me the Wi-Fi password, please?",
          native: "What's the Wi-Fi password?"
        },
        pattern: "What's ...?",
        keywords: ["Wi-Fi", "password", "code"]
      },
      {
        taskId: "hotel_c1_t3",
        desc: {
          en: "Request extra towels.",
          zh: "要求额外的毛巾。"
        },
        bot: "Of course, I'll send some up to your room right away.",
        user: "Can I get extra towels?",
        tips: {
          simple: "Can I get extra towels?",
          natural: "Could I request some extra towels, please?",
          native: "Can I get a few more towels?"
        },
        pattern: "Can I get ...?",
        keywords: ["extra", "towels", "request"]
      }
    ]
  },
  {
    cardId: "hotel_c2",
    botHello: "Good morning! Need any help?",
    botBye: "Have a wonderful day!",
    npc: { 
      animal: 'Rabbit', 
      role: 'Concierge' 
    },
    tasks: [
      {
        taskId: "hotel_c2_t1",
        desc: {
          en: "Ask when breakfast is served.",
          zh: "询问早餐时间。"
        },
        bot: "Breakfast is served from 7 to 10 AM in the dining room.",
        user: "When is breakfast served?",
        tips: {
          simple: "When is breakfast?",
          natural: "Could you tell me when breakfast is served?",
          native: "What time's breakfast?"
        },
        pattern: "When is ...?",
        keywords: ["breakfast", "time", "served"]
      },
      {
        taskId: "hotel_c2_t2",
        desc: {
          en: "Book a wake-up call.",
          zh: "预订叫醒服务。"
        },
        bot: "Sure, what time would you like the wake-up call?",
        user: "Can I book a wake-up call for 7 AM?",
        tips: {
          simple: "Can I book wake-up call?",
          natural: "I'd like to book a wake-up call for 7 AM, please.",
          native: "Can you wake me up at 7?"
        },
        pattern: "Can I book ...?",
        keywords: ["wake-up call", "book", "time"]
      },
      {
        taskId: "hotel_c2_t3",
        desc: {
          en: "Ask to store your luggage.",
          zh: "询问行李寄存服务。"
        },
        bot: "Yes, we can keep your bags safe until you're ready.",
        user: "Can I store my luggage?",
        tips: {
          simple: "Can I store luggage?",
          natural: "Could I store my luggage here, please?",
          native: "Can I leave my bags here?"
        },
        pattern: "Can I ...?",
        keywords: ["store", "luggage", "bags"]
      }
    ]
  }
];

export default cards;
