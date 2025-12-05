
Page({
  data: {
    levelId: '',
    levelInfo: {} as any,
    cardOptions: [] as string[][],
    selectedCardIndex: null as number | null,
    isRevealed: false,
    isShuffling: false,
    statusBarHeight: 20,
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
    this.setData({ levelInfo });
    
    this.generateTasks();
    // Removed auto-shuffle on init
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
    const data: Record<string, { title: string; color: string; icon: string; tasks: string[] }> = {
      airport: { 
        title: 'Airport', 
        color: 'bg-sky-100 text-sky-700', 
        icon: '✈️',
        tasks: [
          'Ask where the baggage claim is.',
          'Find the taxi pickup point.',
          'Buy a SIM card at the kiosk.',
          'Ask for a map of the city.',
          'Report lost luggage.',
          'Ask where the restroom is.'
        ]
      },
      taxi: { 
        title: 'Taxi Stand', 
        color: 'bg-teal-100 text-teal-700', 
        icon: '🚕',
        tasks: [
          'Tell the driver your destination.',
          'Ask how much the fare is.',
          'Ask to turn on the AC.',
          'Ask to stop at the corner.',
          'Ask for a receipt.',
          'Ask how long the ride will take.'
        ]
      },
      hotel: { 
        title: 'Grand Hotel', 
        color: 'bg-orange-100 text-orange-700', 
        icon: '🏨',
        tasks: [
          'Check in to your room.',
          'Ask for the Wi-Fi password.',
          'Request extra towels.',
          'Ask when breakfast is served.',
          'Book a wake-up call.',
          'Ask to store your luggage.'
        ]
      },
      rental: {
          title: 'Rental Agency',
          color: 'bg-purple-100 text-purple-700',
          icon: '🔑',
          tasks: ['Ask about 1-bedroom rent.', 'Sign the lease contract.', 'Ask about the deposit.', 'Check utility costs.', 'Ask about pet policy.']
      },
      apartment: {
          title: 'Apartment',
          color: 'bg-cyan-100 text-cyan-700',
          icon: '🏢',
          tasks: ['Introduce yourself to neighbors.', 'Ask how to use the heater.', 'Sort the recycling.', 'Find the mailbox.', 'Report a leaking tap.']
      },
      property: {
          title: 'Property Mgmt',
          color: 'bg-red-100 text-red-700',
          icon: '🛠️',
          tasks: ['Report a broken window.', 'Ask for a spare key.', 'Pay the maintenance fee.', 'Complaint about noise.', 'Ask about parking rules.']
      },
      cafe: {
          title: 'Sunny Cafe',
          color: 'bg-amber-100 text-amber-800',
          icon: '☕',
          tasks: ['Order a latte with oat milk.', 'Ask for the Wi-Fi code.', 'Find a seat with a plug.', 'Order a slice of cake.', 'Ask to heat up a muffin.']
      },
      fastfood: {
          title: 'Burger Joint',
          color: 'bg-orange-100 text-orange-800',
          icon: '🍔',
          tasks: ['Order a combo meal.', 'Ask for no pickles.', 'Ask for extra ketchup.', 'Upgrade to large fries.', 'Order a diet soda.']
      },
      supermarket: {
          title: 'Supermarket',
          color: 'bg-green-100 text-green-800',
          icon: '🥦',
          tasks: ['Ask where the milk is.', 'Check the expiry date.', 'Weigh the vegetables.', 'Ask for a plastic bag.', 'Pay with credit card.']
      },
      market: {
          title: 'Farmers Market',
          color: 'bg-emerald-100 text-emerald-800',
          icon: '🥕',
          tasks: ['Bargain for cheaper fruit.', 'Ask if apples are fresh.', 'Buy 1kg of potatoes.', 'Ask for a discount.', 'Taste a sample.']
      },
      bakery: {
          title: 'Bakery',
          color: 'bg-yellow-100 text-yellow-800',
          icon: '🥐',
          tasks: ['Buy a fresh baguette.', 'Order a birthday cake.', 'Ask what is in the filling.', 'Buy a dozen donuts.', 'Ask for sliced bread.']
      },
      milktea: {
          title: 'Boba Shop',
          color: 'bg-pink-100 text-pink-800',
          icon: '🧋',
          tasks: ['Order brown sugar boba.', 'Choose 50% sugar level.', 'Ask for less ice.', 'Add coconut jelly.', 'Pay via QR code.']
      },
      gym: {
          title: 'City Gym',
          color: 'bg-indigo-100 text-indigo-800',
          icon: '💪',
          tasks: ['Sign up for membership.', 'Ask how to use the treadmill.', 'Find the locker room.', 'Join a yoga class.', 'Ask for a towel.']
      },
      pool: {
          title: 'Public Pool',
          color: 'bg-blue-100 text-blue-800',
          icon: '🏊',
          tasks: ['Buy a swimming cap.', 'Ask where the shower is.', 'Check the water temperature.', 'Rent a locker.', 'Sign up for lessons.']
      },
      park: {
          title: 'Central Park',
          color: 'bg-lime-100 text-lime-800',
          icon: '🌳',
          tasks: ['Ask where the restroom is.', 'Find the dog park.', 'Buy ice cream.', 'Ask to take a photo.', 'Rent a bicycle.']
      }
    };
  
    return data[id] || { 
      title: 'Unknown Place', 
      color: 'bg-gray-100 text-gray-700', 
      icon: '❓',
      tasks: ['Explore the area.', 'Say hello to someone.', 'Look around.', 'Take a rest.', 'Check the map.']
    };
  },

  generateTasks() {
    const pool = [...this.data.levelInfo.tasks];
    const options: string[][] = [];
    
    // Create 3 "Mystery Cards", each with 3 random tasks from the pool
    for (let i = 0; i < 3; i++) {
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        let selection = shuffled.slice(0, 3);
        if (selection.length < 3) {
             selection = [...selection, ...pool.slice(0, 3 - selection.length)];
        }
        options.push(selection);
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

      // 2. Stop Shuffling (Spread out) after 1200ms
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
      }, 1200); // Duration of "stacked/shuffling" state
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
