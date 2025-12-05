
Page({
  data: {
    mapSvgUrl: '',
    scrollTop: 0,
    statusBarHeight: 20
  },
  onLoad() {
    // Get status bar height for custom header
    const sysInfo = wx.getSystemInfoSync();
    this.setData({ statusBarHeight: sysInfo.statusBarHeight });

    const riverPath = `
    M 0 0 
    C 50 100, 200 200, 180 400
    S 50 700, 150 900
    S 350 1200, 300 1600
  `;

  const roadPath = `
    M 300 1600
    C 280 1400, 100 1450, 80 1300
    C 60 1150, 250 1100, 280 900
    C 300 700, 100 600, 120 400
    C 140 200, 250 150, 250 50
  `;

  // Construct SVG string
  // Note: We need to escape characters properly for data URI if not using base64
  // But base64 is safer.
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 1600" preserveAspectRatio="xMidYMid slice">
    <rect width="100%" height="100%" fill="#C5E1A5" />
    <pattern id="grass-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#AED581" opacity="0.6" />
        <circle cx="22" cy="22" r="1" fill="#AED581" opacity="0.6" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#grass-pattern)" />
    <path d="${riverPath}" stroke="#4DB6AC" stroke-width="90" fill="none" />
    <path d="${riverPath}" stroke="#4DD0E1" stroke-width="80" fill="none" />
    <path d="${riverPath}" stroke="#80DEEA" stroke-width="5" stroke-dasharray="20 40" fill="none" opacity="0.5" transform="translate(10,0)" />
    <path d="${roadPath}" stroke="#F9A825" stroke-width="46" fill="none" stroke-linecap="round" />
    <path d="${roadPath}" stroke="#FFF59D" stroke-width="40" fill="none" stroke-linecap="round" />
    <path d="${roadPath}" stroke="#FBC02D" stroke-width="2" stroke-dasharray="8 8" fill="none" />
    
    <!-- Trees (Pine) -->
    <g transform="translate(40, 1400)"><path d="M 0 40 L 15 10 L 30 40 Z" fill="#388E3C" /><path d="M 0 25 L 15 -5 L 30 25 Z" fill="#43A047" /><rect x="12" y="40" width="6" height="10" fill="#795548" /></g>
    <g transform="translate(320, 1200)"><path d="M 0 40 L 15 10 L 30 40 Z" fill="#388E3C" /><path d="M 0 25 L 15 -5 L 30 25 Z" fill="#43A047" /><rect x="12" y="40" width="6" height="10" fill="#795548" /></g>
    <g transform="translate(50, 800)"><path d="M 0 40 L 15 10 L 30 40 Z" fill="#388E3C" /><path d="M 0 25 L 15 -5 L 30 25 Z" fill="#43A047" /><rect x="12" y="40" width="6" height="10" fill="#795548" /></g>
    <g transform="translate(280, 500)"><path d="M 0 40 L 15 10 L 30 40 Z" fill="#388E3C" /><path d="M 0 25 L 15 -5 L 30 25 Z" fill="#43A047" /><rect x="12" y="40" width="6" height="10" fill="#795548" /></g>
    <g transform="translate(80, 200)"><path d="M 0 40 L 15 10 L 30 40 Z" fill="#388E3C" /><path d="M 0 25 L 15 -5 L 30 25 Z" fill="#43A047" /><rect x="12" y="40" width="6" height="10" fill="#795548" /></g>

    <!-- Trees (Round) -->
    <g transform="translate(300, 1500)"><circle cx="15" cy="15" r="15" fill="#66BB6A" /><circle cx="15" cy="12" r="12" fill="#81C784" /><rect x="12" y="25" width="6" height="12" fill="#8D6E63" /></g>
    <g transform="translate(100, 1100)"><circle cx="15" cy="15" r="15" fill="#66BB6A" /><circle cx="15" cy="12" r="12" fill="#81C784" /><rect x="12" y="25" width="6" height="12" fill="#8D6E63" /></g>
    <g transform="translate(300, 850)"><circle cx="15" cy="15" r="15" fill="#66BB6A" /><circle cx="15" cy="12" r="12" fill="#81C784" /><rect x="12" y="25" width="6" height="12" fill="#8D6E63" /></g>
    <g transform="translate(60, 400)"><circle cx="15" cy="15" r="15" fill="#66BB6A" /><circle cx="15" cy="12" r="12" fill="#81C784" /><rect x="12" y="25" width="6" height="12" fill="#8D6E63" /></g>
    <g transform="translate(180, 50)"><circle cx="15" cy="15" r="15" fill="#66BB6A" /><circle cx="15" cy="12" r="12" fill="#81C784" /><rect x="12" y="25" width="6" height="12" fill="#8D6E63" /></g>

    <!-- Clouds -->
    <path d="M 0 0 Q 10 -10 20 0 T 40 0 T 50 10 T 30 20 T 0 10 Z" fill="white" opacity="0.6" transform="translate(50, 50) scale(2)" />
    <path d="M 0 0 Q 10 -10 20 0 T 40 0 T 50 10 T 30 20 T 0 10 Z" fill="white" opacity="0.6" transform="translate(250, 300) scale(2)" />
    <path d="M 0 0 Q 10 -10 20 0 T 40 0 T 50 10 T 30 20 T 0 10 Z" fill="white" opacity="0.6" transform="translate(50, 900) scale(2)" />
    <path d="M 0 0 Q 10 -10 20 0 T 40 0 T 50 10 T 30 20 T 0 10 Z" fill="white" opacity="0.6" transform="translate(280, 1300) scale(2)" />
  </svg>
  `;
  
  // Encode SVG
  const encodedSvg = encodeURIComponent(svgContent).replace(/'/g, "%27").replace(/"/g, "%22");
  const mapSvgUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;

  this.setData({ mapSvgUrl });
  
  // Scroll to bottom after render
  setTimeout(() => {
      // 1600px is the height of the SVG. 
      // We want to scroll to the bottom.
      // In rpx, height is 3200rpx.
      // scrollTop takes pixels.
      // We need to convert rpx to px or just use a large number.
      // 1600px (SVG units) might be scaled.
      // If widthFix is used, height depends on screen width.
      // Aspect ratio 375:1600.
      // Height = ScreenWidth * (1600/375).
      const screenWidth = sysInfo.windowWidth;
      const scrollHeight = screenWidth * (1600 / 375);
      
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
