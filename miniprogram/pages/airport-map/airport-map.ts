// miniprogram/pages/airport-map/airport-map.ts

declare const Page: any;
declare const wx: any;

const AIRPORT_DATA = {
  "locationId": "airport_terminal",
  "name": {
    "en": "Airport Terminal",
    "zh": "动物机场"
  },
  "levels": [
    {
      "levelId": "airport_l1",
      "status": "completed",
      "stars": 2,
      "title": { "en": "Fresh Paw Arrival", "zh": "新爪到达" },
      "description": { "en": "Basic survival communication after landing.", "zh": "刚落地后的基础沟通。" },
      "tasks": [
        { "taskId": "airport_l1_t1", "en": "Ask where the baggage claim is.", "zh": "询问行李提取处在哪里。" },
        { "taskId": "airport_l1_t2", "en": "Ask how to get to the exit or taxi area.", "zh": "询问出口或出租车站怎么走。" },
        { "taskId": "airport_l1_t3", "en": "Ask where to find a luggage cart.", "zh": "询问哪里有行李推车。" }
      ]
    },
    {
      "levelId": "airport_l2",
      "status": "active",
      "stars": 0,
      "title": { "en": "Lost but Curious", "zh": "迷路但好奇" },
      "description": { "en": "Handle common questions inside the airport.", "zh": "处理在机场的常见问题。" },
      "tasks": [
        { "taskId": "airport_l2_t1", "en": "Ask where to buy a SIM card.", "zh": "询问哪里可以买电话卡。" },
        { "taskId": "airport_l2_t2", "en": "Ask for restroom, water fountain, or Wi-Fi.", "zh": "询问洗手间、饮水机或 Wi-Fi。" },
        { "taskId": "airport_l2_t3", "en": "Ask for airport bus routes and prices.", "zh": "询问机场巴士的路线和价格。" }
      ]
    },
    {
      "levelId": "airport_l3",
      "status": "locked",
      "stars": 0,
      "title": { "en": "Airport Adventure", "zh": "机场大冒险" },
      "description": { "en": "Deal with unexpected airport situations.", "zh": "处理突发的机场状况。" },
      "tasks": [
        { "taskId": "airport_l3_t1", "en": "Report delayed baggage at the service desk.", "zh": "在服务台报告行李延误。" },
        { "taskId": "airport_l3_t2", "en": "Explain your travel purpose to airport staff.", "zh": "向工作人员解释你的旅行目的。" },
        { "taskId": "airport_l3_t3", "en": "Report damaged luggage.", "zh": "报告行李箱损坏情况。" }
      ]
    }
  ]
};

const LEVEL_POSITIONS = [
  { top: 580, left: 40 },  // L1: Bottom Left
  { top: 340, left: 240 }, // L2: Middle Right
  { top: 70, left: 40 }    // L3: Top Left
];

const ICON_MAP = [
  '/assets/images/level_task_map/icon-plane.svg',
  '/assets/images/level_task_map/icon-map.svg',
  '/assets/images/level_task_map/icon-luggage.svg'
];

Page({
  data: {
    airportData: AIRPORT_DATA,
    activeLevelIndex: null as number | null,
    starArray: [1, 2, 3],
    bubbleStyle: '',
    bubbleArrowClass: '',
    statusBarHeight: 20
  },

  onLoad() {
    const sysInfo = wx.getSystemInfoSync();
    const initialIndex = AIRPORT_DATA.levels.findIndex(l => l.status === 'active');
    
    this.setData({
      statusBarHeight: sysInfo.statusBarHeight,
      activeLevelIndex: initialIndex !== -1 ? initialIndex : null
    });

    if (initialIndex !== -1) {
      this.updateBubblePosition(initialIndex);
    }
  },

  handleBgClick() {
    this.setData({ activeLevelIndex: null });
  },

  handleLevelClick(e: any) {
    const index = e.currentTarget.dataset.index;
    
    if (this.data.activeLevelIndex === index) {
      this.setData({ activeLevelIndex: null });
    } else {
      this.setData({ activeLevelIndex: index });
      this.updateBubblePosition(index);
    }
  },

  updateBubblePosition(index: number) {
    const pos = LEVEL_POSITIONS[index];
    let top, left, arrowClass;

    if (index === 1) {
      // L2 (Right Side) -> Show Bubble on LEFT
      top = pos.top - 80;
      left = pos.left - 235;
      arrowClass = 'arrow-right';
    } else {
      // L1 & L3 (Left Side) -> Show Bubble on RIGHT
      top = pos.top - 100;
      left = pos.left + 90;
      arrowClass = 'arrow-left';
    }

    this.setData({
      bubbleStyle: `top: ${top}px; left: ${left}px;`,
      bubbleArrowClass: arrowClass
    });
  },

  handleBubbleClick(e: any) {
    // Prevent bubbling
  },

  handleCloseBubble() {
    this.setData({ activeLevelIndex: null });
  },

  onBack() {
    wx.navigateBack();
  },

  onStart() {
    const activeLevel = AIRPORT_DATA.levels[this.data.activeLevelIndex!];
    if (activeLevel && activeLevel.status !== 'locked') {
      wx.showToast({ title: 'Starting Task...', icon: 'none' });
    }
  },

  getLevelIcon(index: number) {
    return ICON_MAP[index] || '/assets/images/level_task_map/icon-star.svg';
  },

  getLevelPosition(index: number) {
    return LEVEL_POSITIONS[index];
  }
});
