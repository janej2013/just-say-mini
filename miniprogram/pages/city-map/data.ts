// 城市地图关卡数据
// 展示顺序：从页面下方到上方

export interface LevelData {
  id: number;
  name: string;
  icon: string;
  description?: string;
  isUnlocked?: boolean;
  isCompleted?: boolean;
}

export const cityMapLevels: LevelData[] = [
  {
    id: 1,
    name: '机场',
    icon: '/assets/images/city-map/icon-airport.svg',
    description: '从机场开始你的城市冒险',
    isUnlocked: true,
    isCompleted: false
  },
  {
    id: 2,
    name: '出租车',
    icon: '/assets/images/city-map/icon-taxi.svg',
    description: '学习如何打车',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 3,
    name: '酒店',
    icon: '/assets/images/city-map/icon-hotel.svg',
    description: '入住酒店',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 4,
    name: '租房中介',
    icon: '/assets/images/city-map/icon-rental.svg',
    description: '寻找合适的住处',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 5,
    name: '物业',
    icon: '/assets/images/city-map/icon-property.svg',
    description: '了解物业服务',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 6,
    name: '公寓',
    icon: '/assets/images/city-map/icon-apartment.svg',
    description: '租下你的公寓',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 7,
    name: '咖啡厅',
    icon: '/assets/images/city-map/icon-cafe.svg',
    description: '品尝咖啡文化',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 8,
    name: '奶茶店',
    icon: '/assets/images/city-map/icon-milktea.svg',
    description: '体验奶茶文化',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 9,
    name: '快餐店',
    icon: '/assets/images/city-map/icon-fastfood.svg',
    description: '快速解决用餐',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 10,
    name: '面包坊',
    icon: '/assets/images/city-map/icon-bakery.svg',
    description: '购买新鲜面包',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 11,
    name: '超市',
    icon: '/assets/images/city-map/icon-supermarket.svg',
    description: '日常购物',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 12,
    name: '菜市场',
    icon: '/assets/images/city-map/icon-market.svg',
    description: '体验传统市场',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 13,
    name: '健身房',
    icon: '/assets/images/city-map/icon-gym.svg',
    description: '保持健康习惯',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 14,
    name: '泳池',
    icon: '/assets/images/city-map/icon-pool.svg',
    description: '游泳锻炼',
    isUnlocked: false,
    isCompleted: false
  },
  {
    id: 15,
    name: '公园',
    icon: '/assets/images/city-map/icon-park.svg',
    description: '在公园放松',
    isUnlocked: false,
    isCompleted: false
  }
];

// 获取所有关卡数据
export function getAllLevels(): LevelData[] {
  return cityMapLevels;
}

// 根据ID获取关卡数据
export function getLevelById(id: number): LevelData | undefined {
  return cityMapLevels.find(level => level.id === id);
}

// 获取已解锁的关卡
export function getUnlockedLevels(): LevelData[] {
  return cityMapLevels.filter(level => level.isUnlocked);
}

// 获取已完成的关卡
export function getCompletedLevels(): LevelData[] {
  return cityMapLevels.filter(level => level.isCompleted);
}
