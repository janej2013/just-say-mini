import airportCards from '../data/airport';
import taxiCards from '../data/taxi';
import hotelCards from '../data/hotel';
import rentalCards from '../data/rental';
import apartmentCards from '../data/apartment';
import propertyCards from '../data/property';
import cafeCards from '../data/cafe';
import fastfoodCards from '../data/fastfood';
import supermarketCards from '../data/supermarket';
import marketCards from '../data/market';
import bakeryCards from '../data/bakery';
import milkteaCards from '../data/milktea';
import gymCards from '../data/gym';
import poolCards from '../data/pool';
import parkCards from '../data/park';

Page({
  data: {
    levelId: '',
    levelInfo: {} as any,
    cardOptions: [] as string[][],
    selectedCardIndex: null as number | null,
    isRevealed: false,
    isShuffling: false,
    statusBarHeight: 20,
    allTasks: [] as any[], // Store all tasks for current level
    allCards: [] as any[], // Store all cards for current level
    selectedCardTasks: [] as any[], // Store the tasks from selected card
    selectedTaskGroups: [] as any[][], // Store all task groups
    selectedCards: [] as any[], // Store the selected cards
    showTaskList: false, // Task List Modal visibility
    completedTasks: [] as any[], // Completed tasks (mocked)
    completedCardIds: [] as string[], // Completed card IDs from local storage
  },

  onLoad(options: any) {
    const { levelId } = options;
    const sysInfo = wx.getSystemInfoSync();
    this.setData({ 
        levelId: levelId || 'airport',
        statusBarHeight: sysInfo.statusBarHeight
    });
    
    // 加载已完成的卡片ID
    this.loadCompletedCards();
    
    this.initLevel(levelId || 'airport');
  },

  onShow() {
    // 页面显示时刷新数据（从dialog-practice返回时）
    console.log('📱 task-selection页面显示，刷新数据');
    
    // 重新加载已完成的卡片
    this.loadCompletedCards();
    
    // 重新初始化关卡数据
    const levelId = this.data.levelId || 'airport';
    this.initLevel(levelId);
    
    // 重置抽卡状态，允许用户重新抽卡
    this.setData({
      isRevealed: false,
      selectedCardIndex: null,
      isShuffling: false,
      selectedCardTasks: []
    });
  },

  /**
   * 从本地存储加载已完成的卡片ID
   */
  loadCompletedCards() {
    try {
      const completedCardIds = wx.getStorageSync('completedCardIds') || [];
      this.setData({ completedCardIds });
      console.log('📋 已加载完成的卡片:', completedCardIds);
    } catch (e) {
      console.error('❌ 加载完成卡片失败:', e);
      this.setData({ completedCardIds: [] });
    }
  },

  initLevel(levelId: string) {
    const levelInfo = this.getLevelInfo(levelId);
    const allCards = this.loadLevelCards(levelId);
    // Flatten cards into tasks for backward compatibility
    const allTasks: any[] = [];
    allCards.forEach((card: any) => {
      if (card.tasks) {
        card.tasks.forEach((task: any) => {
          allTasks.push({
            ...task,
            cardId: card.cardId,
            npc: card.npc,
            botHello: card.botHello,
            botBye: card.botBye
          });
        });
      }
    });
    
    // 标记已完成的卡片
    const completedCardIds = this.data.completedCardIds || [];
    const cardsWithStatus = allCards.map((card: any) => ({
      ...card,
      isCompleted: completedCardIds.includes(card.cardId)
    }));
    
    this.setData({ 
      levelInfo,
      allCards: cardsWithStatus,
      allTasks
    });
    
    // Mock completed tasks (first 2 tasks)
    if (allTasks.length >= 2) {
        this.setData({
            completedTasks: allTasks.slice(0, 2)
        });
    }

    this.generateTasks();
    // Removed auto-shuffle on init
  },

  loadLevelCards(levelId: string) {
    const cardsMap: Record<string, any[]> = {
      airport: airportCards,
      taxi: taxiCards,
      hotel: hotelCards,
      rental: rentalCards,
      apartment: apartmentCards,
      property: propertyCards,
      cafe: cafeCards,
      fastfood: fastfoodCards,
      supermarket: supermarketCards,
      market: marketCards,
      bakery: bakeryCards,
      milktea: milkteaCards,
      gym: gymCards,
      pool: poolCards,
      park: parkCards
    };
    
    return cardsMap[levelId] || [];
  },

  onCardTap(e: any) {
    // Only allow tap if not shuffling and not yet revealed
    if (this.data.isShuffling || this.data.isRevealed) return;

    const index = e.currentTarget.dataset.index;
    // Only the middle card (index 1) triggers the shuffle
    if (index === 1) {
        this.handleShuffleClick();
    }
  },

  getLevelInfo(id: string) {
    const levelConfig: Record<string, { title: string; color: string; icon: string }> = {
      airport: { 
        title: 'Airport', 
        color: 'bg-sky-100 text-sky-700', 
        icon: '✈️'
      },
      taxi: { 
        title: 'Taxi Stand', 
        color: 'bg-teal-100 text-teal-700', 
        icon: '🚕'
      },
      hotel: { 
        title: 'Grand Hotel', 
        color: 'bg-orange-100 text-orange-700', 
        icon: '🏨'
      },
      rental: {
        title: 'Rental Agency',
        color: 'bg-purple-100 text-purple-700',
        icon: '🔑'
      },
      apartment: {
        title: 'Apartment',
        color: 'bg-cyan-100 text-cyan-700',
        icon: '🏢'
      },
      property: {
        title: 'Property Mgmt',
        color: 'bg-red-100 text-red-700',
        icon: '🛠️'
      },
      cafe: {
        title: 'Sunny Cafe',
        color: 'bg-amber-100 text-amber-800',
        icon: '☕'
      },
      fastfood: {
        title: 'Burger Joint',
        color: 'bg-orange-100 text-orange-800',
        icon: '🍔'
      },
      supermarket: {
        title: 'Supermarket',
        color: 'bg-green-100 text-green-800',
        icon: '🥦'
      },
      market: {
        title: 'Farmers Market',
        color: 'bg-emerald-100 text-emerald-800',
        icon: '🥕'
      },
      bakery: {
        title: 'Bakery',
        color: 'bg-yellow-100 text-yellow-800',
        icon: '🥐'
      },
      milktea: {
        title: 'Boba Shop',
        color: 'bg-pink-100 text-pink-800',
        icon: '🧋'
      },
      gym: {
        title: 'City Gym',
        color: 'bg-indigo-100 text-indigo-800',
        icon: '💪'
      },
      pool: {
        title: 'Public Pool',
        color: 'bg-blue-100 text-blue-800',
        icon: '🏊'
      },
      park: {
        title: 'Central Park',
        color: 'bg-lime-100 text-lime-800',
        icon: '🌳'
      }
    };
  
    return levelConfig[id] || { 
      title: 'Unknown Place', 
      color: 'bg-gray-100 text-gray-700', 
      icon: '❓'
    };
  },

  generateTasks() {
    const allTasks = this.data.allTasks;
    
    if (!allTasks || allTasks.length === 0) {
      console.warn('No tasks found for this level');
      return;
    }

    // 只从未完成的卡片中抽取任务
    const completedCardIds = this.data.completedCardIds || [];
    const incompleteTasks = allTasks.filter((task: any) => 
      !completedCardIds.includes(task.cardId)
    );
    
    if (incompleteTasks.length === 0) {
      console.warn('⚠️ 所有卡片都已完成！');
      // 如果所有卡片都完成了，还是显示所有任务
      const sortedTasks = [...allTasks].sort((a, b) => {
        return a.taskId.localeCompare(b.taskId);
      });
      this.generateTasksFromList(sortedTasks);
      return;
    }

    // Sort tasks by taskId to ensure consistent order
    const sortedTasks = [...incompleteTasks].sort((a, b) => {
      return a.taskId.localeCompare(b.taskId);
    });
    
    this.generateTasksFromList(sortedTasks);
  },

  generateTasksFromList(sortedTasks: any[]) {

    // Group tasks into sets of 3
    const taskGroups: any[][] = []; // Store task objects, not just text
    const taskGroupsText: string[][] = []; // Store text for display
    
    for (let i = 0; i < sortedTasks.length; i += 3) {
      const group = sortedTasks.slice(i, i + 3);
      if (group.length === 3) {
        taskGroups.push(group);
        taskGroupsText.push(group.map(task => task.desc?.zh || task.zh || 'Task'));
      }
    }

    // Fallback if no full groups found
    if (taskGroups.length === 0 && sortedTasks.length > 0) {
        console.warn('⚠️ No full task groups found, creating fallback group');
        const group: any[] = [];
        for(let k=0; k<3; k++) {
            group.push(sortedTasks[k % sortedTasks.length]);
        }
        taskGroups.push(group);
        taskGroupsText.push(group.map(task => task.desc?.en || task.en || 'Task'));
    }
    
    console.log(`🎴 可用任务组: ${taskGroups.length}`);

    // Randomly select 3 groups for the 3 cards
    const options: string[][] = [];
    const selectedTaskGroups: any[][] = [];
    const availableIndices = taskGroups.map((_, idx) => idx);
    
    for (let i = 0; i < 3; i++) {
      if (availableIndices.length > 0) {
        const randomIdx = Math.floor(Math.random() * availableIndices.length);
        const groupIndex = availableIndices[randomIdx];
        
        options.push(taskGroupsText[groupIndex]);
        selectedTaskGroups.push(taskGroups[groupIndex]);
        availableIndices.splice(randomIdx, 1);
      } else {
        // If not enough groups, reuse from taskGroups
        const randomIndex = Math.floor(Math.random() * taskGroups.length);
        options.push(taskGroupsText[randomIndex] || ['Task 1', 'Task 2', 'Task 3']);
        selectedTaskGroups.push(taskGroups[randomIndex] || []);
      }
    }

    this.setData({ 
      cardOptions: options,
      selectedTaskGroups: selectedTaskGroups // Store task groups for later use
    });
  },

  runShuffleSequence() {
      // 1. Reset
      this.setData({
          isRevealed: false,
          selectedCardIndex: null,
          isShuffling: true
      });

      // 2. Stop Shuffling (Spread out) after 1600ms (Slower shuffle duration)
      setTimeout(() => {
          this.setData({ isShuffling: false });
          
          // 3. Automatically select the MIDDLE card (Index 1) after spread animation
          setTimeout(() => {
              this.setData({ selectedCardIndex: 1 });

              // 4. Reveal the card and store selected tasks
              setTimeout(() => {
                  // Store the tasks from the middle card (index 1)
                  const selectedTaskGroups = this.data.selectedTaskGroups || [];
                  const selectedCardTasks = selectedTaskGroups[1] || [];
                  
                  console.log('🃏 Revealing card. Tasks:', selectedCardTasks);

                  this.setData({ 
                      isRevealed: true,
                      selectedCardTasks: selectedCardTasks
                  });
              }, 600); // Wait for centering move

          }, 800); // Wait for spread to finish
      }, 1600); // Duration of "stacked/shuffling" state
  },

  handleShuffleClick() {
      this.generateTasks();
      this.runShuffleSequence();
  },

  toggleTaskList() {
    this.setData({
      showTaskList: !this.data.showTaskList
    });
  },

  closeTaskList() {
    this.setData({
      showTaskList: false
    });
  },

  onStartAdventure() {
      console.log('🚀 onStartAdventure clicked');
      let selectedCardTasks = this.data.selectedCardTasks;
      console.log('📋 selectedCardTasks:', selectedCardTasks);
      
      if (!selectedCardTasks || selectedCardTasks.length !== 3) {
          console.warn('⚠️ Invalid tasks, attempting fallback...');
          // Fallback: try to get from selectedTaskGroups
          const selectedTaskGroups = this.data.selectedTaskGroups;
          if (selectedTaskGroups && selectedTaskGroups[1] && selectedTaskGroups[1].length === 3) {
              selectedCardTasks = selectedTaskGroups[1];
          } else {
              // Fallback: get first 3 tasks from allTasks
              const allTasks = this.data.allTasks;
              if (allTasks && allTasks.length >= 3) {
                  selectedCardTasks = allTasks.slice(0, 3);
              }
          }
          
          if (!selectedCardTasks || selectedCardTasks.length !== 3) {
             console.error('❌ Fallback failed');
             wx.showToast({
                title: '请先抽取任务卡',
                icon: 'none'
             });
             return;
          }
          console.log('✅ Fallback successful:', selectedCardTasks);
      }

      // Get all NPC animals from NPC_VOICE_MAP
      const npcAnimals = ['Panda', 'Owl', 'Koala', 'Elephant', 'Giraffe', 'Beaver', 'Hippo', 'Parrot', 'Squirrel'];
      
      // Randomly select one NPC
      const randomNpc = npcAnimals[Math.floor(Math.random() * npcAnimals.length)];
      
      // Extract botHello and botBye from the first task (they should all be from same card)
      const botHello = selectedCardTasks[0]?.botHello || 'Hi there, need any help?';
      const botBye = selectedCardTasks[0]?.botBye || 'Alright, have a good one.';
      
      // Prepare level data for dialog-practice page
      const levelData = {
          levelTitle: this.data.levelInfo.title,
          tasks: selectedCardTasks,
          currentTaskIndex: 0,
          npc: {
              animal: randomNpc,
              role: 'Guide'
          },
          botHello: botHello,
          botBye: botBye
      };
      
      console.log('➡️ Navigating to dialog-practice with data:', levelData);

      // Navigate to dialog-practice page
      wx.navigateTo({
          url: `/pages/dialog-practice/dialog-practice?levelData=${encodeURIComponent(JSON.stringify(levelData))}`,
          success: () => console.log('✅ Navigation success'),
          fail: (err) => console.error('❌ Navigation failed:', err)
      });
  },
});