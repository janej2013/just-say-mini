// 公共泳池关卡任务数据

export const cards = [
  {
    cardId: "pool_facility_c1",
    title: { zh: "泳池设施", en: "Pool Facilities" },
    botHello: "Hi there! Need help with anything at the pool?",
    botBye: "Alright, enjoy your swim!",
    npc: { animal: "Dolphin", role: "Pool Staff" },
    tasks: [
      {
        taskId: "pool_facility_c1_t1",
        desc: {
          en: "Ask where the showers are.",
          zh: "询问淋浴间在哪里。"
        },
        bot: "The showers are right behind those glass doors.",
        tips: {
          simple: "Where are the showers?",
          natural: "Could you tell me where the showers are?",
          native: "Where can I find the showers?"
        },
        user: "Hi, could you tell me where the showers are?",
        pattern: "Where can I find ...?",
        keywords: ["showers", "where"]
      },
      {
        taskId: "pool_facility_c1_t2",
        desc: {
          en: "Ask whether towels are provided.",
          zh: "询问泳池是否提供毛巾。"
        },
        bot: "Yes, towels are available at the front desk.",
        tips: {
          simple: "Do you have towels?",
          natural: "Are towels provided here?",
          native: "Do you guys provide towels?"
        },
        user: "Hi, are towels provided here?",
        pattern: "Are ... provided?",
        keywords: ["towels", "provided"]
      },
      {
        taskId: "pool_facility_c1_t3",
        desc: {
          en: "Ask where to rinse off before entering the pool.",
          zh: "询问入池前在哪里冲洗。"
        },
        bot: "The rinse-off area is right next to the pool entrance.",
        tips: {
          simple: "Where rinse off?",
          natural: "Where can I rinse off before swimming?",
          native: "Where do I rinse off before getting in?"
        },
        user: "Hi, where can I rinse off before swimming?",
        pattern: "Where can I ...?",
        keywords: ["rinse off", "before swimming"]
      }
    ]
  },

  {
    cardId: "pool_locker_c2",
    title: { zh: "更衣室与储物柜", en: "Locker & Changing Room" },
    botHello: "Hello! Need help with lockers or changing rooms?",
    botBye: "No problem, have a good time!",
    npc: { animal: "Otter", role: "Facility Staff" },
    tasks: [
      {
        taskId: "pool_locker_c2_t1",
        desc: {
          en: "Ask where the changing rooms are.",
          zh: "询问更衣室在哪。"
        },
        bot: "Changing rooms are down the hallway to the left.",
        tips: {
          simple: "Where is changing room?",
          natural: "Where is the changing room?",
          native: "Where can I find the changing room?"
        },
        user: "Hi, where can I find the changing room?",
        pattern: "Where can I find ...?",
        keywords: ["changing room", "where"]
      },
      {
        taskId: "pool_locker_c2_t2",
        desc: {
          en: "Ask how to use the locker.",
          zh: "询问储物柜怎么使用。"
        },
        bot: "Just set your own code and press the lock button.",
        tips: {
          simple: "How use locker?",
          natural: "How do I use the locker?",
          native: "How do these lockers work?"
        },
        user: "Hi, how do I use the locker?",
        pattern: "How do I ...?",
        keywords: ["locker", "how to use"]
      },
      {
        taskId: "pool_locker_c2_t3",
        desc: {
          en: "Ask whether the locker is free to use.",
          zh: "询问储物柜是否免费使用。"
        },
        bot: "Yes, lockers are free for all pool users.",
        tips: {
          simple: "Locker free?",
          natural: "Is the locker free to use?",
          native: "Are the lockers free?"
        },
        user: "Hi, is the locker free to use?",
        pattern: "Is ... free to use?",
        keywords: ["locker", "free"]
      }
    ]
  },

  {
    cardId: "pool_safety_c3",
    title: { zh: "泳池安全与规则", en: "Pool Safety & Rules" },
    botHello: "Hi! Need help with pool safety or rules?",
    botBye: "Alright, stay safe and have fun!",
    npc: { animal: "Seal", role: "Lifeguard" },
    tasks: [
      {
        taskId: "pool_safety_c3_t1",
        desc: {
          en: "Ask which side is the deep end.",
          zh: "询问哪一侧是深水区。"
        },
        bot: "The deep end is on the far right side.",
        tips: {
          simple: "Where deep end?",
          natural: "Which side is the deep end?",
          native: "Where’s the deep end?"
        },
        user: "Hi, which side is the deep end?",
        pattern: "Which side is ...?",
        keywords: ["deep end", "which side"]
      },
      {
        taskId: "pool_safety_c3_t2",
        desc: {
          en: "Ask whether swimming caps are required.",
          zh: "询问是否需要戴泳帽。"
        },
        bot: "Yes, swimming caps are required in this pool.",
        tips: {
          simple: "Need cap?",
          natural: "Do I need to wear a swimming cap?",
          native: "Are swim caps required here?"
        },
        user: "Hi, do I need to wear a swimming cap?",
        pattern: "Do I need to ...?",
        keywords: ["swimming cap", "required"]
      },
      {
        taskId: "pool_safety_c3_t3",
        desc: {
          en: "Ask whether diving is allowed.",
          zh: "询问是否允许跳水。"
        },
        bot: "No diving is allowed in this pool for safety reasons.",
        tips: {
          simple: "Can dive?",
          natural: "Is diving allowed here?",
          native: "Can you dive here?"
        },
        user: "Hi, is diving allowed here?",
        pattern: "Is ... allowed?",
        keywords: ["diving", "allowed"]
      }
    ]
  },

  {
    cardId: "pool_class_c4",
    title: { zh: "游泳课程", en: "Swimming Class" },
    botHello: "Hello! Interested in our swimming classes?",
    botBye: "Great, let me know if you need more info!",
    npc: { animal: "Penguin", role: "Swim Coach" },
    tasks: [
      {
        taskId: "pool_class_c4_t1",
        desc: {
          en: "Ask how much a swimming lesson costs.",
          zh: "询问游泳课程多少钱。"
        },
        bot: "A single lesson costs $25, and packages are available.",
        tips: {
          simple: "How much lesson?",
          natural: "How much does a swimming lesson cost?",
          native: "What’s the price for a swim lesson?"
        },
        user: "Hi, how much does a swimming lesson cost?",
        pattern: "How much does ... cost?",
        keywords: ["swimming lesson", "cost"]
      },
      {
        taskId: "pool_class_c4_t2",
        desc: {
          en: "Ask when the beginner class starts.",
          zh: "询问初级课程什么时候开始。"
        },
        bot: "The beginner class starts at 4 PM every weekday.",
        tips: {
          simple: "When beginner class?",
          natural: "When does the beginner class start?",
          native: "When’s the beginner class?"
        },
        user: "Hi, when does the beginner class start?",
        pattern: "When does ... start?",
        keywords: ["beginner class", "when"]
      },
      {
        taskId: "pool_class_c4_t3",
        desc: {
          en: "Ask whether booking is required.",
          zh: "询问是否需要预订课程。"
        },
        bot: "Yes, please book at least one day in advance.",
        tips: {
          simple: "Need booking?",
          natural: "Do I need to book the class?",
          native: "Do I have to book ahead?"
        },
        user: "Hi, do I need to book the class?",
        pattern: "Do I need to ...?",
        keywords: ["booking", "class"]
      }
    ]
  }
];

export default cards;
