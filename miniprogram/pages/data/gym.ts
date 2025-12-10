// 健身房关卡任务数据

export const cards = [
  {
    cardId: "gym_equipment_c1",
    title: { zh: "器材位置", en: "Finding Equipment" },
    botHello: "Hey! Need help finding something?",
    botBye: "Alright, enjoy your workout!",
    npc: { animal: "Tiger", role: "Gym Staff" },
    tasks: [
      {
        taskId: "gym_equipment_c1_t1",
        desc: {
          en: "Ask where the dumbbells are.",
          zh: "询问哑铃在哪里。"
        },
        bot: "The dumbbells are in the free-weight area over there.",
        tips: {
          simple: "Where are the dumbbells?",
          natural: "Could you tell me where the dumbbells are?",
          native: "Hey, where can I find the dumbbells?"
        },
        user: "Hi, could you tell me where the dumbbells are?",
        pattern: "Where can I find ...?",
        keywords: ["dumbbells", "where"]
      },
      {
        taskId: "gym_equipment_c1_t2",
        desc: {
          en: "Ask whether a treadmill is available.",
          zh: "询问跑步机是否有空位。"
        },
        bot: "Yes! The two treadmills on the left are available.",
        tips: {
          simple: "Is a treadmill free?",
          natural: "Is there a treadmill available right now?",
          native: "Any treadmills open at the moment?"
        },
        user: "Hi, is there a treadmill available right now?",
        pattern: "Is there ... available?",
        keywords: ["treadmill", "available"]
      },
      {
        taskId: "gym_equipment_c1_t3",
        desc: {
          en: "Ask where the locker room is.",
          zh: "询问更衣室在哪里。"
        },
        bot: "The locker rooms are downstairs on the right.",
        tips: {
          simple: "Where is locker room?",
          natural: "Where is the locker room?",
          native: "Where can I find the locker room?"
        },
        user: "Hi, where can I find the locker room?",
        pattern: "Where can I find ...?",
        keywords: ["locker room", "where"]
      }
    ]
  },

  {
    cardId: "gym_class_c2",
    title: { zh: "课程咨询", en: "Class Inquiry" },
    botHello: "Hi! Interested in joining a class?",
    botBye: "Sure, let me know if you need anything else.",
    npc: { animal: "Panda", role: "Instructor" },
    tasks: [
      {
        taskId: "gym_class_c2_t1",
        desc: {
          en: "Ask when the next yoga class starts.",
          zh: "询问下一节瑜伽课什么时候开始。"
        },
        bot: "The next yoga class starts at 6 PM in Studio B.",
        tips: {
          simple: "When is next yoga?",
          natural: "When does the next yoga class start?",
          native: "When’s the next yoga session?"
        },
        user: "Hi, when does the next yoga class start?",
        pattern: "When does ... start?",
        keywords: ["yoga", "when"]
      },
      {
        taskId: "gym_class_c2_t2",
        desc: {
          en: "Ask whether you need to book a class.",
          zh: "询问课程是否需要预订。"
        },
        bot: "Yes, you need to book it through our app.",
        tips: {
          simple: "Need booking?",
          natural: "Do I need to book this class?",
          native: "Do I need to reserve a spot?"
        },
        user: "Do I need to book this class?",
        pattern: "Do I need to ...?",
        keywords: ["book", "class"]
      },
      {
        taskId: "gym_class_c2_t3",
        desc: {
          en: "Ask how long the class lasts.",
          zh: "询问课程时长。"
        },
        bot: "This class lasts 45 minutes.",
        tips: {
          simple: "How long is class?",
          natural: "How long does the class last?",
          native: "How long is the class?"
        },
        user: "How long does the class last?",
        pattern: "How long does ... last?",
        keywords: ["class duration", "how long"]
      }
    ]
  },

  {
    cardId: "gym_help_c3",
    title: { zh: "器材使用求助", en: "Equipment Assistance" },
    botHello: "Hello! Need help with the equipment?",
    botBye: "Great! Let me know if you have more questions.",
    npc: { animal: "Bear", role: "Trainer" },
    tasks: [
      {
        taskId: "gym_help_c3_t1",
        desc: {
          en: "Ask how to use the rowing machine.",
          zh: "询问如何使用划船机。"
        },
        bot: "I can show you! Make sure to keep your back straight while pulling.",
        tips: {
          simple: "How use rowing machine?",
          natural: "Could you show me how to use the rowing machine?",
          native: "Can you walk me through the rowing machine?"
        },
        user: "Hi, could you show me how to use the rowing machine?",
        pattern: "Could you show me how to ...?",
        keywords: ["rowing machine", "how to use"]
      },
      {
        taskId: "gym_help_c3_t2",
        desc: {
          en: "Ask if your posture on the machine is correct.",
          zh: "询问自己使用器械的姿势是否正确。"
        },
        bot: "Your posture is good, but try to relax your shoulders more.",
        tips: {
          simple: "Is my posture OK?",
          natural: "Is my posture correct?",
          native: "How’s my form?"
        },
        user: "Hi, is my posture correct?",
        pattern: "Is my ... correct?",
        keywords: ["posture", "form"]
      },
      {
        taskId: "gym_help_c3_t3",
        desc: {
          en: "Ask how to adjust the machine settings.",
          zh: "询问如何调整器械设置。"
        },
        bot: "Just turn this knob to increase or decrease the resistance.",
        tips: {
          simple: "How adjust this?",
          natural: "How do I adjust the settings on this machine?",
          native: "How do I change the settings on this?"
        },
        user: "Hi, how do I adjust the settings on this machine?",
        pattern: "How do I ...?",
        keywords: ["adjust", "settings"]
      }
    ]
  },

  {
    cardId: "gym_membership_c4",
    title: { zh: "会员咨询", en: "Membership Inquiry" },
    botHello: "Hi there! Need help with your membership?",
    botBye: "Alright, let me know anytime!",
    npc: { animal: "Fox", role: "Front Desk Staff" },
    tasks: [
      {
        taskId: "gym_membership_c4_t1",
        desc: {
          en: "Ask how to freeze your membership.",
          zh: "询问如何暂停会员。"
        },
        bot: "You can freeze it for up to two months. Just fill out this form.",
        tips: {
          simple: "How freeze membership?",
          natural: "How can I freeze my membership?",
          native: "What’s the process to freeze my membership?"
        },
        user: "Hi, how can I freeze my membership?",
        pattern: "How can I ...?",
        keywords: ["freeze", "membership"]
      },
      {
        taskId: "gym_membership_c4_t2",
        desc: {
          en: "Ask how much it costs to upgrade.",
          zh: "询问升级会员的费用。"
        },
        bot: "Upgrading to premium costs an additional $20 a month.",
        tips: {
          simple: "How much upgrade?",
          natural: "How much does it cost to upgrade my membership?",
          native: "What’s the price to upgrade?"
        },
        user: "Hi, how much does it cost to upgrade my membership?",
        pattern: "How much does it cost to ...?",
        keywords: ["upgrade", "price"]
      },
      {
        taskId: "gym_membership_c4_t3",
        desc: {
          en: "Ask when your membership expires.",
          zh: "询问会员什么时候到期。"
        },
        bot: "Your membership expires on August 15th.",
        tips: {
          simple: "When expire?",
          natural: "When does my membership expire?",
          native: "When’s my membership up?"
        },
        user: "Hi, when does my membership expire?",
        pattern: "When does ... expire?",
        keywords: ["expire", "membership"]
      }
    ]
  }
];

export default cards;
