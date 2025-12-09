// 公寓关卡任务数据

export const cards = [
  {
    cardId: "apartment_c1",
    botHello: "Hi neighbor! Welcome to the building!",
    botBye: "See you around!",
    npc: { 
      animal: 'Giraffe', 
      role: 'Neighbor' 
    },
    tasks: [
      {
        taskId: "apartment_c1_t1",
        desc: {
          en: "Introduce yourself to neighbors.",
          zh: "向邻居介绍自己。"
        },
        bot: "Nice to meet you! I'm in 3B if you need anything.",
        user: "Hi, I just moved in. I'm your new neighbor.",
        tips: {
          simple: "Hi, I just moved in.",
          natural: "Hello! I'm your new neighbor.",
          native: "Hey! Just moved in next door."
        },
        pattern: "I just moved in ...",
        keywords: ["introduce", "neighbor", "moved in"]
      },
      {
        taskId: "apartment_c1_t2",
        desc: {
          en: "Ask how to use the heater.",
          zh: "询问如何使用暖气。"
        },
        bot: "Just turn the dial to your preferred temperature.",
        user: "How do I use the heater?",
        tips: {
          simple: "How to use heater?",
          natural: "Could you show me how to use the heater?",
          native: "How does the heater work?"
        },
        pattern: "How do I ...?",
        keywords: ["heater", "use", "heating"]
      },
      {
        taskId: "apartment_c1_t3",
        desc: {
          en: "Ask where to take out the trash.",
          zh: "询问在哪里倒垃圾。"
        },
        bot: "The trash room is on the first floor near the elevator.",
        user: "Where do I take out the trash?",
        tips: {
          simple: "Where is trash?",
          natural: "Where should I take out the trash?",
          native: "Where do I dump the trash?"
        },
        pattern: "Where do I ...?",
        keywords: ["trash", "garbage", "take out"]
      }
    ]
  },
  {
    cardId: "apartment_c2",
    botHello: "Hey there! Need help with anything?",
    botBye: "Take care!",
    npc: { 
      animal: 'Beaver', 
      role: 'Building Manager' 
    },
    tasks: [
      {
        taskId: "apartment_c2_t1",
        desc: {
          en: "Report broken AC.",
          zh: "报告空调损坏。"
        },
        bot: "I'll send someone to fix it tomorrow morning.",
        user: "The AC in my unit is broken.",
        tips: {
          simple: "My AC is broken.",
          natural: "I need to report that my AC isn't working.",
          native: "My AC's busted."
        },
        pattern: "... is broken",
        keywords: ["AC", "broken", "repair"]
      },
      {
        taskId: "apartment_c2_t2",
        desc: {
          en: "Ask about laundry room hours.",
          zh: "询问洗衣房的开放时间。"
        },
        bot: "The laundry room is open 24/7 for residents.",
        user: "What are the laundry room hours?",
        tips: {
          simple: "When is laundry room open?",
          natural: "What are the hours for the laundry room?",
          native: "When's the laundry room open?"
        },
        pattern: "What are ...?",
        keywords: ["laundry room", "hours", "open"]
      },
      {
        taskId: "apartment_c2_t3",
        desc: {
          en: "Ask about parking.",
          zh: "询问停车事宜。"
        },
        bot: "We have both covered and uncovered parking available.",
        user: "Is parking available?",
        tips: {
          simple: "Is there parking?",
          natural: "Do you have parking available?",
          native: "Got parking?"
        },
        pattern: "Is ... available?",
        keywords: ["parking", "available", "garage"]
      }
    ]
  }
];

export default cards;
