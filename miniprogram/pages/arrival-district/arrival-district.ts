Page({
    data: {
        // Can be used to toggle story mode or zoom
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: 'Arrival District'
        });
    },
    onStoryMode() {
        wx.showToast({
            title: 'Story Mode Started!',
            icon: 'none'
        });
    }
});
