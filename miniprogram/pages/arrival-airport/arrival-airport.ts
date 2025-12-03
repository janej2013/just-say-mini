// 导入完整的任务数据
import airportData from './data';

Page({
    data: {
        levels: [],
        expandedLevels: {}, // 用于存储展开状态
        selectedLevelIndex: 0 // 默认选中第一个level
    },
    
    onLoad() {
        wx.setNavigationBarTitle({ 
            title: '动物机场' 
        });
        
        // 加载 level 和 task 数据
        this.loadLevelTaskData();
    },
    
    loadLevelTaskData() {
        // 使用导入的完整数据
        try {
            console.log('成功加载机场数据:', airportData);
            this.setData({
                levels: airportData.levels
            });
        } catch (error) {
            console.error('加载机场数据失败:', error);
            this.loadDefaultData();
        }
    },
    
    loadDefaultData() {
        // 默认数据，只有在加载script.json失败时使用
        const levelTaskData = {
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
          "en": "Ask where the baggage claim is.",
          "zh": "询问行李提取处在哪里。"
        },
        {
          "taskId": "airport_l1_t2",
          "en": "Ask how to get to the exit or taxi area.",
          "zh": "询问出口或出租车站怎么走。"
        },
        {
          "taskId": "airport_l1_t3",
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
          "en": "Ask where to buy a SIM card.",
          "zh": "询问哪里可以买电话卡。"
        },
        {
          "taskId": "airport_l2_t2",
          "en": "Ask for restroom, water fountain, or Wi-Fi.",
          "zh": "询问洗手间、饮水机或 Wi-Fi。"
        },
        {
          "taskId": "airport_l2_t3",
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
          "en": "Report delayed baggage at the service desk.",
          "zh": "在服务台报告行李延误。"
        },
        {
          "taskId": "airport_l3_t2",
          "en": "Explain your travel purpose to airport staff.",
          "zh": "向工作人员解释你的旅行目的。"
        },
        {
          "taskId": "airport_l3_t3",
          "en": "Report damaged luggage.",
          "zh": "报告行李箱损坏情况。"
        }
      ]
    }
  ]
};

        this.setData({
            levels: levelTaskData.levels
        });
    },
    
    toggleLevelExpansion(e) {
        const { levelIndex } = e.currentTarget.dataset;
        const currentExpanded = this.data.expandedLevels[levelIndex] || false;
        
        // 更新展开状态
        const newExpandedLevels = {
            ...this.data.expandedLevels,
            [levelIndex]: !currentExpanded
        };
        
        this.setData({
            expandedLevels: newExpandedLevels
        });
    },
    
    selectLevel(e) {
        const { levelIndex } = e.currentTarget.dataset;
        this.setData({
            selectedLevelIndex: levelIndex
        });
    },
    
    startAdventure() {
        // 跳转到对话练习页面，传递任务数据
        const levelIndex = this.data.selectedLevelIndex;
        // 选择一个具体的任务，比如当前展开的第一项或第一项
        const taskIndex = 0; // 默认选择第一个任务
        
        if (this.data.levels && this.data.levels.length > 0 && 
            this.data.levels[levelIndex] && 
            this.data.levels[levelIndex].tasks && 
            this.data.levels[levelIndex].tasks.length > 0) {
            
            const levelId = this.data.levels[levelIndex].levelId;
            const level = this.data.levels[levelIndex];
            const task = level.tasks[taskIndex];
            const taskId = task.taskId;
            
            console.log('准备跳转到对话练习，任务数据:', task);
            
            // 将整个关卡的所有任务传递过去（包括level的npc信息）
            const levelData = {
                levelId: levelId,
                levelTitle: level.title,
                tasks: level.tasks,
                currentTaskIndex: taskIndex,
                npc: level.npc // 传递关卡的NPC信息
            };
            const levelDataStr = encodeURIComponent(JSON.stringify(levelData));
            
            wx.navigateTo({
                url: `/pages/dialog-practice/dialog-practice?levelData=${levelDataStr}`
            });
        } else {
            console.error('没有找到有效的任务数据');
            wx.showToast({
                title: '任务数据错误',
                icon: 'none'
            });
        }
    }
});