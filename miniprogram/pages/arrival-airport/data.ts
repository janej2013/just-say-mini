// pages/arrival-airport/data.ts
// 机场任务数据
const airportData = {
  "locationId": "airport_terminal",
  "name": {
    "en": "Airport Terminal",
    "zh": "动物机场"
  },
  "levels": [
    {
      "levelId": "airport_l1",
      "title": {
        "en": "Fresh Paw Arrival",
        "zh": "新爪到达"
      },
      "description": {
        "en": "Basic survival communication after landing.",
        "zh": "刚落地后的基础沟通。"
      },
      "tasks": [
        {
          "taskId": "airport_l1_t1",
          "npc": {
            "animal": "Panda",
            "role": "Airport Information Desk Staff"
          },
          "botQuestions": {
            "simple": "Hello! Do you need help finding the baggage claim?",
            "natural": "Hi there! Are you looking for the baggage claim area?",
            "native": "Hey, just landed? Need to know where to grab your bags?"
          },
          "userAnswers": {
            "simple": "Yes, where is the baggage claim?",
            "natural": "Yeah, could you tell me where the baggage claim is?",
            "native": "Yep! Where can I pick up my luggage?"
          },
          "keywordsHint": ["baggage", "claim", "luggage"],
          "en": "Ask where the baggage claim is.",
          "zh": "询问行李提取处在哪里。"
        },
        {
          "taskId": "airport_l1_t2",
          "npc": {
            "animal": "Owl",
            "role": "Airport Guide Volunteer"
          },
          "botQuestions": {
            "simple": "Do you need help finding the exit or taxi area?",
            "natural": "Are you trying to get to the exit or taxi pickup?",
            "native": "Looking for the exit or where to catch a taxi?"
          },
          "userAnswers": {
            "simple": "Yes, where is the taxi area?",
            "natural": "Could you tell me how to get to the taxi pickup?",
            "native": "Yeah, where do I go to grab a taxi?"
          },
          "keywordsHint": ["exit", "taxi", "pickup"],
          "en": "Ask how to get to the exit or taxi area.",
          "zh": "询问出口或出租车站怎么走。"
        },
        {
          "taskId": "airport_l1_t3",
          "npc": {
            "animal": "Koala",
            "role": "Airport Attendant"
          },
          "botQuestions": {
            "simple": "Do you need a luggage cart?",
            "natural": "Are you looking for a luggage cart?",
            "native": "Need a cart to haul your stuff?"
          },
          "userAnswers": {
            "simple": "Where can I find a luggage cart?",
            "natural": "Could you tell me where I can get a luggage cart?",
            "native": "Yeah, where do I grab a cart?"
          },
          "keywordsHint": ["luggage", "cart"],
          "en": "Ask where to find a luggage cart.",
          "zh": "询问哪里有行李推车。"
        }
      ]
    },
    {
      "levelId": "airport_l2",
      "title": {
        "en": "Lost but Curious",
        "zh": "迷路但好奇"
      },
      "description": {
        "en": "Handle common questions inside the airport.",
        "zh": "处理在机场的常见问题。"
      },
      "tasks": [
        {
          "taskId": "airport_l2_t1",
          "npc": {
            "animal": "Elephant",
            "role": "Airport Shop Staff"
          },
          "botQuestions": {
            "simple": "Are you looking for a SIM card?",
            "natural": "Do you need to buy a SIM card?",
            "native": "Need a SIM card for your phone?"
          },
          "userAnswers": {
            "simple": "Where can I buy a SIM card?",
            "natural": "Could you tell me where to get a SIM card?",
            "native": "Yeah, where can I pick up a SIM card?"
          },
          "keywordsHint": ["SIM card", "buy"],
          "en": "Ask where to buy a SIM card.",
          "zh": "询问哪里可以买电话卡。"
        },
        {
          "taskId": "airport_l2_t2",
          "npc": {
            "animal": "Giraffe",
            "role": "Airport Facility Guide"
          },
          "botQuestions": {
            "simple": "Do you need help finding the restroom or water?",
            "natural": "Looking for the restroom, water fountain, or Wi-Fi?",
            "native": "Bathroom, water, Wi-Fi — which one are you hunting for?"
          },
          "userAnswers": {
            "simple": "Where is the restroom?",
            "natural": "Could you tell me where the restroom or water fountain is?",
            "native": "Yeah, where's the bathroom around here?"
          },
          "keywordsHint": ["restroom", "water", "Wi-Fi"],
          "en": "Ask for restroom, water fountain, or Wi-Fi.",
          "zh": "询问洗手间、饮水机或 Wi-Fi。"
        },
        {
          "taskId": "airport_l2_t3",
          "npc": {
            "animal": "Beaver",
            "role": "Airport Bus Ticket Staff"
          },
          "botQuestions": {
            "simple": "Do you want to know the bus route?",
            "natural": "Do you want information about airport bus routes or prices?",
            "native": "Need the lowdown on airport bus routes or fares?"
          },
          "userAnswers": {
            "simple": "What is the bus route?",
            "natural": "Could you tell me the airport bus routes and prices?",
            "native": "Yeah, what routes do the airport buses take and how much?"
          },
          "keywordsHint": ["bus", "route", "price", "airport", "information"],
          "en": "Ask for airport bus routes and prices.",
          "zh": "询问机场巴士的路线和价格。"
        }
      ]
    },
    {
      "levelId": "airport_l3",
      "title": {
        "en": "Airport Adventure",
        "zh": "机场大冒险"
      },
      "description": {
        "en": "Deal with unexpected airport situations.",
        "zh": "处理突发的机场状况。"
      },
      "tasks": [
        {
          "taskId": "airport_l3_t1",
          "npc": {
            "animal": "Hippo",
            "role": "Baggage Service Desk Officer"
          },
          "botQuestions": {
            "simple": "Do you want to report delayed baggage?",
            "natural": "Is your luggage delayed? Do you want to report it?",
            "native": "Bag didn't show up? Want to file a report?"
          },
          "userAnswers": {
            "simple": "My baggage is delayed.",
            "natural": "My luggage hasn't arrived. I'd like to report it.",
            "native": "My bag didn't come out. I need to file a claim."
          },
          "keywordsHint": ["delayed", "baggage", "report", "missing"],
          "en": "Report delayed baggage at the service desk.",
          "zh": "在服务台报告行李延误。"
        },
        {
          "taskId": "airport_l3_t2",
          "npc": {
            "animal": "Parrot",
            "role": "Airport Security Officer"
          },
          "botQuestions": {
            "simple": "Do you need to explain your travel purpose?",
            "natural": "Do you need to explain why you're traveling here?",
            "native": "Need to tell us what brings you here today?"
          },
          "userAnswers": {
            "simple": "I am here for travel.",
            "natural": "I'm here for tourism and will stay for a week.",
            "native": "I'm just here on a short trip, about a week."
          },
          "keywordsHint": ["purpose", "travel", "reason", "explain"],
          "en": "Explain your travel purpose to airport staff.",
          "zh": "向工作人员解释你的旅行目的。"
        },
        {
          "taskId": "airport_l3_t3",
          "npc": {
            "animal": "Squirrel",
            "role": "Lost & Found Staff"
          },
          "botQuestions": {
            "simple": "Do you want to report damaged luggage?",
            "natural": "Did your luggage get damaged? Do you want to report it?",
            "native": "Bag got banged up? Want to file a damage report?"
          },
          "userAnswers": {
            "simple": "My luggage is damaged.",
            "natural": "My suitcase is damaged. I'd like to report it.",
            "native": "Yeah, my bag's cracked. I need to report the damage."
          },
          "keywordsHint": ["damaged", "luggage", "report", "broken"],
          "en": "Report damaged luggage.",
          "zh": "报告行李箱损坏情况。"
        }
      ]
    }
  ]
};

export default airportData;