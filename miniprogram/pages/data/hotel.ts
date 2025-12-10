export const cards = [
  // 1. 办理入住
  {
    cardId: "hotel_c1",
    title: { zh: "办理入住", en: "Check-in" },
    npc: { animal: "Panda", role: "Hotel Receptionist" },
    botHello: "Welcome to our hotel. How can I help you today?",
    botBye: "Enjoy your stay.",
    tasks: [
      {
        taskId: "hotel_c1_t1",
        desc: {
          en: "Tell the receptionist you have a reservation.",
          zh: "告诉前台你有预订。",
        },
        bot: "Sure, may I have your name and booking details?",
        user: "Hi, I have a reservation under my name.",
        tips: {
          simple: "Hi, I booked a room.",
          natural: "Hi, I think I have a reservation under my name.",
          native: "Hey, I should have a reservation under my name.",
        },
        pattern: "I have a reservation under my name.",
        keywords: ["reservation", "under my name"]
      },
      {
        taskId: "hotel_c1_t2",
        desc: {
          en: "Ask if early check-in is possible.",
          zh: "询问能否提前入住。",
        },
        bot: "Let me check availability for you.",
        user: "Is early check-in possible?",
        tips: {
          simple: "Can I check in early?",
          natural: "Is it okay if I check in a bit earlier?",
          native: "Any chance I can check in early?"
        },
        pattern: "Is early check-in possible?",
        keywords: ["early", "check-in"]
      },
      {
        taskId: "hotel_c1_t3",
        desc: {
          en: "Ask about the deposit or payment.",
          zh: "询问押金或付款方式。",
        },
        bot: "We usually take a deposit. Credit card or cash is fine.",
        user: "Do I need to pay a deposit?",
        tips: {
          simple: "Do I need to pay any deposit?",
          natural: "Should I leave a deposit now?",
          native: "Do you guys need a deposit from me?"
        },
        pattern: "Do I need to pay a deposit?",
        keywords: ["deposit", "pay"]
      }
    ]
  },

  // 2. 索取酒店基本信息
  {
    cardId: "hotel_c2",
    title: { zh: "酒店信息", en: "Hotel Info" },
    npc: { animal: "Penguin", role: "Hotel Receptionist" },
    botHello: "Hi there, what can I help you with?",
    botBye: "Let me know if you need anything else.",
    tasks: [
      {
        taskId: "hotel_c2_t1",
        desc: {
          en: "Ask about breakfast time.",
          zh: "询问早餐时间。",
        },
        bot: "Breakfast is served on the first floor.",
        user: "What time is breakfast?",
        tips: {
          simple: "When is breakfast?",
          natural: "What time do you serve breakfast?",
          native: "What time do you guys do breakfast?"
        },
        pattern: "What time is breakfast?",
        keywords: ["breakfast", "time"]
      },
      {
        taskId: "hotel_c2_t2",
        desc: {
          en: "Ask for the WiFi password.",
          zh: "询问WiFi密码。",
        },
        bot: "Here is the WiFi password for your room.",
        user: "Can I get the WiFi password?",
        tips: {
          simple: "What's the WiFi password?",
          natural: "Could I have the WiFi password please?",
          native: "Mind sharing the WiFi password?"
        },
        pattern: "Can I get the WiFi password?",
        keywords: ["WiFi", "password"]
      },
      {
        taskId: "hotel_c2_t3",
        desc: {
          en: "Ask where the facilities are.",
          zh: "询问设施在哪里，例如健身房或电梯。",
        },
        bot: "The gym is on the second floor, and elevators are right behind you.",
        user: "Where is the gym?",
        tips: {
          simple: "Where is the gym?",
          natural: "Could you tell me where the gym is?",
          native: "Hey, where’s the gym located?"
        },
        pattern: "Where is the gym?",
        keywords: ["where", "gym"]
      }
    ]
  },

  // 3. 更换房间 / 房间问题
  {
    cardId: "hotel_c3",
    title: { zh: "更换房间", en: "Room Change" },
    npc: { animal: "Koala", role: "Hotel Staff" },
    botHello: "Hello, what seems to be the problem?",
    botBye: "I'll take care of it for you.",
    tasks: [
      {
        taskId: "hotel_c3_t1",
        desc: {
          en: "Tell staff the room is noisy.",
          zh: "告诉工作人员房间太吵。",
        },
        bot: "I’m sorry to hear that. Let me see what we can do.",
        user: "My room is a bit noisy. Can I change to a quieter one?",
        tips: {
          simple: "My room is noisy.",
          natural: "My room is kind of noisy. Any quieter ones?",
          native: "My room’s pretty noisy. Can I switch to a quieter one?"
        },
        pattern: "My room is noisy. Can I change to a quieter one?",
        keywords: ["room", "noisy", "quieter"]
      },
      {
        taskId: "hotel_c3_t2",
        desc: {
          en: "Tell staff the AC is not working.",
          zh: "告诉工作人员空调不工作。",
        },
        bot: "Thanks for letting us know. I'll send someone to fix it.",
        user: "The AC in my room isn't working.",
        tips: {
          simple: "The AC doesn't work.",
          natural: "The AC in my room isn’t working properly.",
          native: "My AC’s not working at all."
        },
        pattern: "The AC isn't working.",
        keywords: ["AC", "not working"]
      },
      {
        taskId: "hotel_c3_t3",
        desc: {
          en: "Ask to change to a higher floor.",
          zh: "询问能否换到更高的楼层。",
        },
        bot: "Let me check if we have rooms available on higher floors.",
        user: "Can I move to a higher floor?",
        tips: {
          simple: "Can I change to a higher floor?",
          natural: "Is it possible to move to a higher floor?",
          native: "Any chance I can get a room on a higher floor?"
        },
        pattern: "Can I move to a higher floor?",
        keywords: ["higher floor", "move"]
      }
    ]
  },

  // 4. 请求额外用品/服务
  {
    cardId: "hotel_c4",
    title: { zh: "额外用品", en: "Room Service" },
    npc: { animal: "Cat", role: "Hotel Service Staff" },
    botHello: "Hi, how can I assist you?",
    botBye: "We’ll send it right away.",
    tasks: [
      {
        taskId: "hotel_c4_t1",
        desc: {
          en: "Ask for extra towels.",
          zh: "请求额外的毛巾。",
        },
        bot: "No problem. How many do you need?",
        user: "Could I get some extra towels?",
        tips: {
          simple: "I need more towels.",
          natural: "Could I have a few more towels?",
          native: "Can I get some extra towels sent up?"
        },
        pattern: "Could I get some extra towels?",
        keywords: ["extra", "towels"]
      },
      {
        taskId: "hotel_c4_t2",
        desc: {
          en: "Ask for room cleaning.",
          zh: "请求打扫房间。",
        },
        bot: "Sure, we can arrange that.",
        user: "Can someone clean my room?",
        tips: {
          simple: "Please clean my room.",
          natural: "Could you arrange room cleaning for me?",
          native: "Can I get housekeeping to clean my room?"
        },
        pattern: "Can someone clean my room?",
        keywords: ["clean", "room"]
      },
      {
        taskId: "hotel_c4_t3",
        desc: {
          en: "Ask for bottled water.",
          zh: "询问能否提供瓶装水。",
        },
        bot: "Yes, we can bring you some bottles.",
        user: "Can I have some bottled water?",
        tips: {
          simple: "I need bottled water.",
          natural: "Could I get some bottled water?",
          native: "Can I get a couple bottles of water?"
        },
        pattern: "Can I have some bottled water?",
        keywords: ["bottled", "water"]
      }
    ]
  },

  // 5. 付款 / 退房 / 行李寄存
  {
    cardId: "hotel_c5",
    title: { zh: "退房结账", en: "Check-out" },
    npc: { animal: "Fox", role: "Hotel Receptionist" },
    botHello: "Hi, do you need help with checkout or billing?",
    botBye: "Safe travels!",
    tasks: [
      {
        taskId: "hotel_c5_t1",
        desc: {
          en: "Ask about the bill charges.",
          zh: "询问账单收费明细。",
        },
        bot: "Here’s the breakdown of your charges.",
        user: "Can you explain the charges on my bill?",
        tips: {
          simple: "What are these charges?",
          natural: "Can you go over the charges on my bill?",
          native: "Can you walk me through these charges?"
        },
        pattern: "Can you explain the charges on my bill?",
        keywords: ["charges", "bill"]
      },
      {
        taskId: "hotel_c5_t2",
        desc: {
          en: "Ask to store luggage after checkout.",
          zh: "询问退房后能否寄存行李。",
        },
        bot: "Sure, we can store your luggage for free.",
        user: "Can I leave my luggage here after checkout?",
        tips: {
          simple: "Can you keep my luggage?",
          natural: "Is it okay if I leave my luggage here after checking out?",
          native: "Can I drop off my bags here after checkout?"
        },
        pattern: "Can I leave my luggage here after checkout?",
        keywords: ["luggage", "checkout"]
      },
      {
        taskId: "hotel_c5_t3",
        desc: {
          en: "Ask for a late checkout.",
          zh: "询问能否延迟退房。",
        },
        bot: "Let me check if late checkout is available today.",
        user: "Is late checkout available?",
        tips: {
          simple: "Can I check out late?",
          natural: "Is it possible to get a late checkout?",
          native: "Any chance I can get a late checkout?"
        },
        pattern: "Is late checkout available?",
        keywords: ["late checkout"]
      }
    ]
  }
];

export default cards;
