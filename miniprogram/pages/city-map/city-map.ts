
Page({
  data: {
    mapSvgUrl: '',
    scrollTop: 0,
    statusBarHeight: 20,
    repeatCount: 2,
    mapHeight: 1600
  },
  onLoad() {
    // Get status bar height for custom header
    const sysInfo = wx.getSystemInfoSync();
    this.setData({ statusBarHeight: sysInfo.statusBarHeight });

    const repeatCount = this.data.repeatCount;
    const blockHeight = 1600;
    const totalHeight = blockHeight * repeatCount;
    
    // Update mapHeight for WXML
    this.setData({ mapHeight: totalHeight });

    // Redesigned paths for seamless looping
    // River: Start (150,0) -> End (150,1600) with matching vertical tangents
    const riverPath = `
    M 150 0
    C 150 200, 200 200, 200 400
    S 100 600, 100 800
    S 250 1000, 250 1200
    S 150 1400, 150 1600
    `;

    // Road: Start (300,1600) -> End (300,0) with matching vertical tangents
    const roadPath = `
    M 300 1600
    C 300 1400, 100 1400, 100 1200
    S 280 1000, 280 800
    S 100 600, 100 400
    S 300 200, 300 0
    `;

    // Decorations
    const pineTrees = [
        {x: 40, y: 1400}, {x: 320, y: 1200}, {x: 50, y: 800}, {x: 280, y: 500}, {x: 80, y: 200}
    ];
    const roundTrees = [
        {x: 300, y: 1500}, {x: 100, y: 1100}, {x: 300, y: 850}, {x: 60, y: 400}, {x: 180, y: 50}
    ];
    const clouds = [
        {x: 50, y: 50}, {x: 250, y: 300}, {x: 50, y: 900}, {x: 280, y: 1300}
    ];

    let blocksContent = '';
    for (let i = 0; i < repeatCount; i++) {
        const yOffset = i * blockHeight;
        
        // Generate decorations for this block
        let decorations = '';
        
        // Pine Trees
        pineTrees.forEach(pos => {
            decorations += `<g transform="translate(${pos.x}, ${pos.y})"><path d="M 0 40 L 15 10 L 30 40 Z" fill="#388E3C" /><path d="M 0 25 L 15 -5 L 30 25 Z" fill="#43A047" /><rect x="12" y="40" width="6" height="10" fill="#795548" /></g>`;
        });

        // Round Trees
        roundTrees.forEach(pos => {
            decorations += `<g transform="translate(${pos.x}, ${pos.y})"><circle cx="15" cy="15" r="15" fill="#66BB6A" /><circle cx="15" cy="12" r="12" fill="#81C784" /><rect x="12" y="25" width="6" height="12" fill="#8D6E63" /></g>`;
        });

        // Clouds
        clouds.forEach(pos => {
            decorations += `<path d="M 0 0 Q 10 -10 20 0 T 40 0 T 50 10 T 30 20 T 0 10 Z" fill="white" opacity="0.6" transform="translate(${pos.x}, ${pos.y}) scale(2)" />`;
        });

        blocksContent += `
        <g transform="translate(0, ${yOffset})">
            <path d="${riverPath}" stroke="#4DB6AC" stroke-width="90" fill="none" />
            <path d="${riverPath}" stroke="#4DD0E1" stroke-width="80" fill="none" />
            <path d="${riverPath}" stroke="#80DEEA" stroke-width="5" stroke-dasharray="20 40" fill="none" opacity="0.5" transform="translate(10,0)" />
            <path d="${roadPath}" stroke="#F9A825" stroke-width="46" fill="none" stroke-linecap="round" />
            <path d="${roadPath}" stroke="#FFF59D" stroke-width="40" fill="none" stroke-linecap="round" />
            <path d="${roadPath}" stroke="#FBC02D" stroke-width="2" stroke-dasharray="8 8" fill="none" />
            ${decorations}
        </g>
        `;
    }

  // Construct SVG string
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 ${totalHeight}" preserveAspectRatio="xMidYMid slice">
    <rect width="100%" height="100%" fill="#C5E1A5" />
    <pattern id="grass-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#AED581" opacity="0.6" />
        <circle cx="22" cy="22" r="1" fill="#AED581" opacity="0.6" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#grass-pattern)" />
    ${blocksContent}
  </svg>
  `;
  
  // Encode SVG
  const encodedSvg = encodeURIComponent(svgContent).replace(/'/g, "%27").replace(/"/g, "%22");
  const mapSvgUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;

  this.setData({ mapSvgUrl });
  
  // Scroll to bottom after render
  setTimeout(() => {
      const screenWidth = sysInfo.windowWidth;
      const scrollHeight = screenWidth * (totalHeight / 375);
      
      this.setData({ scrollTop: scrollHeight });
  }, 300);
  },

  onBack() {
    wx.navigateBack();
  },

  onNavigateToAirport() {
    wx.navigateTo({ url: '/pages/arrival-airport/arrival-airport' });
  },
  
  onNavigateToChat() {
      wx.navigateTo({ url: '/pages/dialog-practice/dialog-practice' });
  }
})
