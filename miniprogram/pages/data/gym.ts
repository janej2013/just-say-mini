// 健身房关卡任务数据

export const cards = [
  {
    cardId: "gym_c1",
    botHello: "Welcome to City Gym!",
    botBye: "Have a great workout!",
    npc: { 
      animal: 'Squirrel', 
      role: 'Trainer' 
    },
    tasks: [
      {
        taskId: "gym_c1_t1",
        desc: {
          en: "Ask about membership options.",
          zh: "询问会员选项。"
        },
        bot: "We have monthly, quarterly, and annual memberships.",
        user: "What membership options do you have?",
        tips: {
          simple: "What memberships do you have?",
          natural: "Could you tell me about membership options?",
          native: "What kind of memberships you got?"
        },
        pattern: "What ... do you have?",
        keywords: ["membership", "options", "join"]
      },
      {
        taskId: "gym_c1_t2",
        desc: {
          en: "Ask where the locker room is.",
          zh: "询问更衣室在哪里。"
        },
        bot: "The locker rooms are down the hall to your right.",
        user: "Where is the locker room?",
        tips: {
          simple: "Where is locker room?",
          natural: "Could you tell me where the locker room is?",
          native: "Where's the locker room at?"
        },
        pattern: "Where is ...?",
        keywords: ["locker room", "changing", "location"]
      },
      {
        taskId: "gym_c1_t3",
        desc: {
          en: "Request a towel.",
          zh: "要求毛巾。"
        },
        bot: "Here you go, enjoy your workout!",
        user: "Can I get a towel?",
        tips: {
          simple: "Can I have towel?",
          natural: "Could I get a towel, please?",
          native: "Need a towel."
        },
        pattern: "Can I get ...?",
        keywords: ["towel", "get", "need"]
      }
    ]
  },
  {
    cardId: "gym_c2",
    botHello: "Hi! Need any help today?",
    botBye: "See you next time!",
    npc: { 
      animal: 'Panda', 
      role: 'Front Desk' 
    },
    tasks: [
      {
        taskId: "gym_c2_t1",
        desc: {
          en: "Ask about personal training.",
          zh: "询问私人教练服务。"
        },
        bot: "Personal training sessions start at $50 per hour.",
        user: "Do you offer personal training?",
        tips: {
          simple: "Do you have personal trainers?",
          natural: "Is personal training available?",
          native: "You guys do personal training?"
        },
        pattern: "Do you offer ...?",
        keywords: ["personal training", "trainer", "coach"]
      },
      {
        taskId: "gym_c2_t2",
        desc: {
          en: "Ask about class schedules.",
          zh: "询问课程时间表。"
        },
        bot: "You can find the class schedule on our app or the board over there.",
        user: "Where can I see the class schedule?",
        tips: {
          simple: "Where is class schedule?",
          natural: "How can I check the class schedule?",
          native: "Where's the class schedule?"
        },
        pattern: "Where can I see ...?",
        keywords: ["class", "schedule", "timetable"]
      },
      {
        taskId: "gym_c2_t3",
        desc: {
          en: "Ask if there's a pool.",
          zh: "询问是否有游泳池。"
        },
        bot: "Yes, we have a lap pool on the third floor.",
        user: "Do you have a swimming pool?",
        tips: {
          simple: "Is there pool?",
          natural: "Does the gym have a pool?",
          native: "You got a pool here?"
        },
        pattern: "Do you have ...?",
        keywords: ["pool", "swimming", "swim"]
      }
    ]
  }
];

export default cards;
