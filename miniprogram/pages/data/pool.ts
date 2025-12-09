// 公共泳池关卡任务数据

export const cards = [
  {
    cardId: "pool_c1",
    botHello: "Welcome to the pool!",
    botBye: "Enjoy your swim!",
    npc: { 
      animal: 'Fox', 
      role: 'Lifeguard' 
    },
    tasks: [
      {
        taskId: "pool_c1_t1",
        desc: {
          en: "Ask about pool hours.",
          zh: "询问泳池开放时间。"
        },
        bot: "The pool is open from 6 AM to 10 PM daily.",
        user: "What are the pool hours?",
        tips: {
          simple: "What are pool hours?",
          natural: "When is the pool open?",
          native: "What time's the pool open?"
        },
        pattern: "What are ...?",
        keywords: ["pool hours", "open", "time"]
      },
      {
        taskId: "pool_c1_t2",
        desc: {
          en: "Ask if you need a swim cap.",
          zh: "询问是否需要泳帽。"
        },
        bot: "Swim caps are required for everyone in the pool.",
        user: "Do I need a swim cap?",
        tips: {
          simple: "Do I need swim cap?",
          natural: "Is a swim cap required?",
          native: "Need a cap to swim?"
        },
        pattern: "Do I need ...?",
        keywords: ["swim cap", "cap", "required"]
      },
      {
        taskId: "pool_c1_t3",
        desc: {
          en: "Request a locker key.",
          zh: "要求储物柜钥匙。"
        },
        bot: "Here's your locker key, number 23.",
        user: "Can I get a locker key?",
        tips: {
          simple: "Can I have locker key?",
          natural: "Could I get a locker key?",
          native: "Need a locker key."
        },
        pattern: "Can I get ...?",
        keywords: ["locker", "key", "storage"]
      }
    ]
  },
  {
    cardId: "pool_c2",
    botHello: "Hi! First time here?",
    botBye: "Have a great swim!",
    npc: { 
      animal: 'Cat', 
      role: 'Staff' 
    },
    tasks: [
      {
        taskId: "pool_c2_t1",
        desc: {
          en: "Ask about swim lessons.",
          zh: "询问游泳课程。"
        },
        bot: "We offer group and private swim lessons for all ages.",
        user: "Do you offer swim lessons?",
        tips: {
          simple: "Do you have swim lessons?",
          natural: "Are swim lessons available?",
          native: "You guys teach swimming?"
        },
        pattern: "Do you offer ...?",
        keywords: ["swim lessons", "lessons", "learn"]
      },
      {
        taskId: "pool_c2_t2",
        desc: {
          en: "Ask where the showers are.",
          zh: "询问淋浴间在哪里。"
        },
        bot: "The showers are in the changing rooms, just past the entrance.",
        user: "Where are the showers?",
        tips: {
          simple: "Where are showers?",
          natural: "Could you tell me where the showers are?",
          native: "Where's the showers at?"
        },
        pattern: "Where are ...?",
        keywords: ["showers", "changing room", "location"]
      },
      {
        taskId: "pool_c2_t3",
        desc: {
          en: "Ask if kids are allowed.",
          zh: "询问是否允许儿童。"
        },
        bot: "Yes, children are welcome! Kids under 12 must be with an adult.",
        user: "Are kids allowed in the pool?",
        tips: {
          simple: "Can kids swim here?",
          natural: "Are children allowed?",
          native: "You allow kids?"
        },
        pattern: "Are ... allowed?",
        keywords: ["kids", "children", "allowed"]
      }
    ]
  }
];

export default cards;
