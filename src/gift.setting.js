
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '送上我最真挚的爱',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '从看到你的第一眼，生活每天都是新画卷，心情如蓝天，阳光般灿烂', },
    { key: 's', wording: '你是天上的星星，只有等到被我收入怀中，才发出洁白的光', },
    { key: 'd', wording: '余生无梦，可愿和你深情燃尽，今生已经足够', },
  ],
  // 最终解释权归属人
  owner: '情人节',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '黄金项链10g', alias: '黄金项链', image: '/images/GC11C-3-420x420.jpg',  description: '「深情相恋，矢志不渝」' },
  { key: 'w', name: '追剧', alias: 'VIP', image: '/images/2.png',  description: '“为你承包一辈子的 VIP”' },
  { key: 'e', name: '兰蔻小黑瓶套装', alias: '小黑瓶套装', image: '/images/3.png',  description: '「强维稳，快修护」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: 'Dior星空套装', alias: 'Dior星空', image: '/images/5.png',  description: '「百变唇妆，精美雕琢」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: 'UR购物券：¥1,000', alias: 'UR', image: '/images/7.png',  description: '“UR！买！”' },
  { key: 'i', name: 'Dyson吹风机', alias: '戴森', image: '/images/8.png',  description: '「不同造型需求，全面满足」' },
];
