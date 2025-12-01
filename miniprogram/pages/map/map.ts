Page({
  data: {
    levels: [
      // 8. Office Zone (Top-Center) - y: 3%
      { id: '8-1', title: 'Reception', type: 'office', zone: 'office', status: 'locked', x: 50, y: 5 },
      { id: '8-2', title: 'Meeting Room', type: 'office', zone: 'office', status: 'locked', x: 35, y: 7 },
      { id: '8-3', title: 'Team Building', type: 'office', zone: 'office', status: 'locked', x: 65, y: 7 },

      // 7. Social Park (Top-Left) - y: 15%
      { id: '7-1', title: 'Meet Friends', type: 'park', zone: 'park', status: 'locked', x: 25, y: 17 },
      { id: '7-2', title: 'Sports Field', type: 'park', zone: 'park', status: 'locked', x: 15, y: 20 },

      // 6. Coffee District (Right) - y: 26%
      { id: '6-1', title: 'Coffee Shop', type: 'coffee', zone: 'coffee', status: 'locked', x: 75, y: 28 },
      { id: '6-2', title: 'Bakery', type: 'coffee', zone: 'coffee', status: 'locked', x: 85, y: 30 },
      { id: '6-3', title: 'Tea House', type: 'coffee', zone: 'coffee', status: 'locked', x: 70, y: 32 },

      // 5. Market Square (Center) - y: 38%
      { id: '5-1', title: 'Supermarket', type: 'market', zone: 'market', status: 'locked', x: 50, y: 40 },
      { id: '5-2', title: 'Convenience', type: 'market', zone: 'market', status: 'locked', x: 35, y: 42 },
      { id: '5-3', title: 'Fruit Stand', type: 'market', zone: 'market', status: 'locked', x: 65, y: 42 },

      // 4. Food Block (Left) - y: 49%
      { id: '4-1', title: 'Fast Food', type: 'food', zone: 'food', status: 'locked', x: 25, y: 51 },
      { id: '4-2', title: 'Takeout', type: 'food', zone: 'food', status: 'locked', x: 15, y: 53 },
      { id: '4-3', title: 'Burger Joint', type: 'food', zone: 'food', status: 'locked', x: 30, y: 55 },

      // 3. School Area (Right) - y: 60%
      { id: '3-1', title: 'Language School', type: 'school', zone: 'school', status: 'locked', x: 70, y: 62 },
      { id: '3-2', title: 'Library', type: 'school', zone: 'school', status: 'locked', x: 80, y: 64 },

      // 2. Housing Block (Left-ish) - y: 71%
      { id: '2-1', title: 'Rental Office', type: 'housing', zone: 'housing', status: 'unlocked', x: 30, y: 73 },
      { id: '2-2', title: 'Apartment', type: 'housing', zone: 'housing', status: 'unlocked', x: 45, y: 75 },

      // 1. Transport Hub (Bottom-Center) - y: 82%
      { id: '1-1', title: 'Airport', type: 'transport-airport', zone: 'transport', status: 'unlocked', x: 50, y: 84 },
      { id: '1-2', title: 'Taxi', type: 'transport-taxi', zone: 'transport', status: 'unlocked', x: 30, y: 86 },
      { id: '1-3', title: 'Hotel', type: 'transport-hotel', zone: 'transport', status: 'unlocked', x: 70, y: 86 },
    ]
  },

  onLoad() {
    // Scroll to bottom to start at Transport Hub
    // Note: wx.pageScrollTo works on page level, for scroll-view we need scroll-top
  },

  onLevelTap(e: WechatMiniprogram.Touch) {
    const level = e.currentTarget.dataset.level;
    if (level.status === 'locked') {
      wx.showToast({ title: 'Locked!', icon: 'none' });
      return;
    }

    if (level.type === 'transport-airport') {
      wx.navigateTo({ url: '/pages/arrival-airport/arrival-airport' });
      return;
    }
    if (level.type === 'transport-taxi') {
      wx.navigateTo({ url: '/pages/arrival-taxi/arrival-taxi' });
      return;
    }
    if (level.type === 'transport-hotel') {
      wx.navigateTo({ url: '/pages/arrival-hotel/arrival-hotel' });
      return;
    }

    if (level.type === 'transport') {
      wx.navigateTo({
        url: '/pages/arrival-district/arrival-district'
      });
      return;
    }

    wx.navigateTo({
      url: `/pages/practice/practice?id=${level.id}&type=${level.type}&title=${level.title}`
    });
  }
});
