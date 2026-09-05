export type Locale = "en" | "zh";

export type LocalizedText = Record<Locale, string>;

export type SocialLink = {
  label: string;
  url: string;
};

export type Video = {
  title: LocalizedText;
  platform: "YouTube" | "Bilibili" | "Douyin";
  thumbnail: string;
  thumbnailAlt: LocalizedText;
  url: string;
  date?: string;
};

export const siteContent = {
  name: "Ruochen",
  mission: {
    en: "Personal site of Ruochen.",
    zh: "Ruochen 的个人网站。",
  },
  bio: {
    en: "A considered collection of videos, ideas, and work. More about Ruochen will be shared here soon.",
    zh: "这里将收录 Ruochen 的视频、想法与作品。更多个人介绍即将更新。",
  },
  portrait: null as null | { src: string; alt: LocalizedText; width: number; height: number },
  email: null as null | string,
  socialLinks: [] as SocialLink[],
  videos: [] as Video[],
};

export const ui = {
  en: {
    languageName: "中文",
    navigationLabel: "Primary navigation",
    home: "Home",
    work: "Work",
    about: "About",
    menu: "Menu",
    homeEyebrow: "Personal archive · 2026",
    heroLineOne: "A quiet place for",
    heroLineTwo: "work, ideas, and motion.",
    homeIntro: "Selected videos and thoughtful work, gathered in one place.",
    exploreWork: "Explore selected work",
    selectedWork: "Selected work",
    aboutRuochen: "About Ruochen",
    workEyebrow: "01 / Selected work",
    workTitleOne: "Stories in motion,",
    workTitleTwo: "gathered with intention.",
    workIntro: "A selection of videos from YouTube, Bilibili, and Douyin will live here.",
    comingSoon: "Selected work coming soon",
    comingSoonBody: "Ruochen is choosing the first pieces for this collection. Platform links will appear when they are ready.",
    plannedPlatforms: "Planned platforms",
    visitPlatform: "Watch on",
    aboutEyebrow: "02 / About",
    aboutTitleOne: "A person behind",
    aboutTitleTwo: "the work in progress.",
    aboutIntro: "This page is intentionally simple while Ruochen’s full story is being prepared.",
    currentNoteTitle: "For now",
    currentNote: "This site is a growing personal archive—a place for work, moving images, and ideas worth returning to.",
    valuesTitle: "What belongs here",
    values: ["Thoughtful work", "Clear expression", "A record of growth"],
    connect: "Connect",
    connectPending: "Email and social links will appear here once they are ready.",
    followWork: "Follow the work",
    followPrompt: "New links will be added as Ruochen’s channels are selected.",
    backHome: "Back home",
    copyright: "Personal site",
  },
  zh: {
    languageName: "English",
    navigationLabel: "主要导航",
    home: "首页",
    work: "作品",
    about: "关于",
    menu: "菜单",
    homeEyebrow: "个人档案 · 2026",
    heroLineOne: "一处安静的空间，",
    heroLineTwo: "收录作品、想法与影像。",
    homeIntro: "把值得分享的视频与持续发生的创作，认真地放在一起。",
    exploreWork: "查看精选作品",
    selectedWork: "精选作品",
    aboutRuochen: "关于 Ruochen",
    workEyebrow: "01 / 精选作品",
    workTitleOne: "让影像被看见，",
    workTitleTwo: "也让想法留下来。",
    workIntro: "这里将展示来自 YouTube、Bilibili 和抖音的精选视频。",
    comingSoon: "精选作品即将上线",
    comingSoonBody: "Ruochen 正在挑选第一批内容。准备好后，这里会出现对应的平台入口。",
    plannedPlatforms: "计划展示平台",
    visitPlatform: "前往观看",
    aboutEyebrow: "02 / 关于",
    aboutTitleOne: "在作品背后，",
    aboutTitleTwo: "是一个持续成长的人。",
    aboutIntro: "Ruochen 的完整故事仍在整理，因此这一页暂时保持简单与真实。",
    currentNoteTitle: "现在",
    currentNote: "这是一个持续生长的个人档案，用来保存作品、影像，以及值得反复思考的想法。",
    valuesTitle: "这里关注",
    values: ["认真对待作品", "清晰表达想法", "记录真实成长"],
    connect: "联系与关注",
    connectPending: "邮箱与社交平台链接准备好后会出现在这里。",
    followWork: "关注后续作品",
    followPrompt: "Ruochen 确认内容平台后，这里会添加对应入口。",
    backHome: "返回首页",
    copyright: "个人网站",
  },
};

export function copy(locale: Locale) {
  return ui[locale];
}

export function localized(text: LocalizedText, locale: Locale) {
  return text[locale];
}
