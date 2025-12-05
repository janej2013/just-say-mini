import airportTasks from '../data/airport';
import taxiTasks from '../data/taxi';
import hotelTasks from '../data/hotel';
import rentalTasks from '../data/rental';
import apartmentTasks from '../data/apartment';
import propertyTasks from '../data/property';
import cafeTasks from '../data/cafe';
import fastfoodTasks from '../data/fastfood';
import supermarketTasks from '../data/supermarket';
import marketTasks from '../data/market';
import bakeryTasks from '../data/bakery';
import milkteaTasks from '../data/milktea';
import gymTasks from '../data/gym';
import poolTasks from '../data/pool';
import parkTasks from '../data/park';

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
    const allTasks = this.loadLevelTasks(levelId);
    this.setData({ 
      levelInfo,
      allTasks
    });
    
    this.generateTasks();
    // Removed auto-shuffle on init
  },

  loadLevelTasks(levelId: string) {
    const taskMap: Record<string, any[]> = {
      airport: airportTasks,
      taxi: taxiTasks,
      hotel: hotelTasks,
      rental: rentalTasks,
      apartment: apartmentTasks,
      property: propertyTasks,
      cafe: cafeTasks,
      fastfood: fastfoodTasks,
      supermarket: supermarketTasks,
      market: marketTasks,
      bakery: bakeryTasks,
      milktea: milkteaTasks,
      gym: gymTasks,
      pool: poolTasks,
      park: parkTasks
    };
    
    return taskMap[levelId] || [];
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
    const taskGroups: string[][] = [];
    for (let i = 0; i < sortedTasks.length; i += 3) {
      const group = sortedTasks.slice(i, i + 3).map(task => task.en);
      if (group.length === 3) {
        taskGroups.push(group);
      }
    }

    // Randomly select 3 groups for the 3 cards
    const options: string[][] = [];
    const availableGroups = [...taskGroups];
    
    for (let i = 0; i < 3; i++) {
      if (availableGroups.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableGroups.length);
        options.push(availableGroups[randomIndex]);
        availableGroups.splice(randomIndex, 1);
      } else {
        // If not enough groups, reuse from taskGroups
        const randomIndex = Math.floor(Math.random() * taskGroups.length);
        options.push(taskGroups[randomIndex] || ['Task 1', 'Task 2', 'Task 3']);
      }
    }

    this.setData({ cardOptions: options });
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

              // 4. Reveal the card
              setTimeout(() => {
                  this.setData({ isRevealed: true });
              }, 600); // Wait for centering move

          }, 800); // Wait for spread to finish
      }, 1600); // Duration of "stacked/shuffling" state
  },

  handleShuffleClick() {
      this.generateTasks();
      this.runShuffleSequence();
  },

  onBack() {
      wx.navigateBack();
  },

  onStartAdventure() {
      // Navigate to the actual game page or handle start
      // For now, just log or show a toast
      wx.showToast({
          title: 'Starting Adventure!',
          icon: 'none'
      });
      
      // Example navigation (adjust as needed)
      // wx.navigateTo({ url: `/pages/game/game?levelId=${this.data.levelId}` });
  }
});
