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
  },

  onLoad(options: any) {
    const { levelId } = options;
    const sysInfo = wx.getSystemInfoSync();
    this.setData({ 
        levelId: levelId || 'airport',
        statusBarHeight: sysInfo.statusBarHeight
    });
    
    this.initLevel(levelId || 'airport');
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
    
    this.setData({ 
      levelInfo,
      allCards,
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

    // Sort tasks by taskId to ensure consistent order
    const sortedTasks = [...allTasks].sort((a, b) => {
      return a.taskId.localeCompare(b.taskId);
    });

    // Group tasks into sets of 3
    const taskGroups: any[][] = []; // Store task objects, not just text
    const taskGroupsText: string[][] = []; // Store text for display
    
    for (let i = 0; i < sortedTasks.length; i += 3) {
      const group = sortedTasks.slice(i, i + 3);
      if (group.length === 3) {
        taskGroups.push(group);
        taskGroupsText.push(group.map(task => task.desc?.en || task.en || 'Task'));
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
      
      // Prepare level data for dialog-practice page
      const levelData = {
          levelTitle: this.data.levelInfo.title,
          tasks: selectedCardTasks,
          currentTaskIndex: 0,
          npc: {
              animal: randomNpc,
              role: 'Guide'
          }
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