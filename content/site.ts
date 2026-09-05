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

export type ProfileEntry = {
  period: LocalizedText;
  title: LocalizedText;
  organization: LocalizedText;
  summary: LocalizedText;
};

export const siteContent = {
  name: "Ruochen",
  fullName: {
    en: "Ruochen Zhang",
    zh: "张若宸",
  },
  location: {
    en: "Sydney, Australia",
    zh: "澳大利亚悉尼",
  },
  mission: {
    en: "Technology, data, and real-world operations, brought together with clarity and care.",
    zh: "把技术、数据与真实场景中的执行经验，清晰而认真地连接起来。",
  },
  bio: {
    en: "Ruochen Zhang is a Sydney-based technology and data generalist with an Information Technology master’s degree from UNSW and a background in mathematics and statistics from Purdue University.",
    zh: "张若宸现居悉尼，是一名兼具技术、数据与实际运营经验的复合型人才，拥有新南威尔士大学信息技术硕士学位，以及普渡大学数学与统计学背景。",
  },
  portrait: {
    src: "/ruochen-portrait.jpg",
    alt: {
      en: "Portrait of Ruochen Zhang",
      zh: "张若宸的个人照片",
    },
    width: 193,
    height: 220,
  },
  email: "zrc40.work@gmail.com",
  socialLinks: [] as SocialLink[],
  videos: [] as Video[],
  education: [
    {
      period: { en: "2024 - 2025", zh: "2024 - 2025" },
      title: { en: "Master of Information Technology", zh: "信息技术硕士" },
      organization: { en: "UNSW Sydney", zh: "新南威尔士大学" },
      summary: {
        en: "Graduate study spanning computer networks, data structures and algorithms, operating systems, databases, C++ design, and software engineering.",
        zh: "课程涵盖计算机网络、数据结构与算法、操作系统、数据库、C++ 设计及软件工程。",
      },
    },
    {
      period: { en: "2019 - 2023", zh: "2019 - 2023" },
      title: { en: "Bachelor’s in Mathematics and Statistics", zh: "数学与统计学学士" },
      organization: { en: "Purdue University", zh: "普渡大学" },
      summary: {
        en: "A quantitative foundation in statistical theory, probability, linear algebra, real analysis, multivariable calculus, and optimization.",
        zh: "建立了统计理论、概率论、线性代数、实变函数、多元微积分及优化等方面的量化基础。",
      },
    },
  ] satisfies ProfileEntry[],
  experience: [
    {
      period: { en: "2026 - Present", zh: "2026 - 至今" },
      title: { en: "Search and Rescue Volunteer", zh: "搜救救援志愿者" },
      organization: { en: "NSW State Emergency Service", zh: "新南威尔士州紧急服务" },
      summary: {
        en: "Trains and prepares with a six-person emergency response team, working within structured safety procedures and high-pressure scenarios.",
        zh: "参与六人应急服务小组的常规训练与行动准备，在标准化安全流程和高压模拟场景中协作完成任务。",
      },
    },
    {
      period: { en: "2023 - 2024", zh: "2023 - 2024" },
      title: { en: "NLP Intern (Marketing)", zh: "NLP 实习生（市场营销）" },
      organization: { en: "Weiboyi", zh: "微播易" },
      summary: {
        en: "Supported 5+ brand campaigns and evaluated 500+ KOC/KOL candidates across technology, fashion, family, and local lifestyle content.",
        zh: "参与荣耀、吉利、祖玛珑等 5+ 品牌营销项目，累计筛选整理 500+ 名科技、时尚、亲子及探店领域的 KOC/KOL 候选资源。",
      },
    },
    {
      period: { en: "2026", zh: "2026" },
      title: { en: "Independent Retail Operator", zh: "自主零售运营" },
      organization: { en: "Sydney Stall Operations", zh: "悉尼摊位运营" },
      summary: {
        en: "Managed product selection, purchasing, pricing, merchandising, inventory, and in-person sales, adapting the offer through customer feedback and sales performance.",
        zh: "负责选品、采购、定价、陈列、库存与现场销售，并结合顾客反馈和销售表现持续调整商品与运营策略。",
      },
    },
  ] satisfies ProfileEntry[],
  projects: [
    {
      period: { en: "2026", zh: "2026" },
      title: { en: "Marketing Campaign Platform", zh: "营销活动平台" },
      organization: { en: "Personal Project", zh: "个人项目" },
      summary: {
        en: "Designed and implemented a configurable campaign system supporting eligibility rules, points-based draws, cumulative rewards, prize inventory, and fallback rewards.",
        zh: "设计并实现可配置的营销抽奖与用户激励系统，支持资格筛选、积分抽奖、累计奖励、奖品库存及兜底奖励。",
      },
    },
  ] satisfies ProfileEntry[],
  skills: ["Python", "SQL", "R", "MATLAB", "Tableau"],
  certifications: [
    { en: "First Aid", zh: "急救" },
    { en: "Six Sigma White Belt", zh: "Six Sigma 白带" },
  ] as LocalizedText[],
  interests: [
    { en: "Rock climbing", zh: "攀岩" },
    { en: "Advanced skiing", zh: "高级滑雪" },
    { en: "Abseiling", zh: "绳降" },
    { en: "Canyoning", zh: "溪降" },
    { en: "Caving", zh: "洞穴探险" },
    { en: "Surfing", zh: "冲浪" },
  ] as LocalizedText[],
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
    homeIntro: "A profile shaped by technical study, quantitative thinking, and hands-on experience.",
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
    aboutTitleOne: "Technology, data,",
    aboutTitleTwo: "and work made real.",
    aboutIntro: "A concise view of Ruochen’s education, experience, and practical interests.",
    currentNoteTitle: "Profile",
    currentNote: "From quantitative study and software projects to brand campaigns and emergency-service volunteering, Ruochen brings analytical thinking into practical, collaborative environments.",
    valuesTitle: "Working principles",
    values: ["Think analytically", "Build for real use", "Stay calm and collaborative"],
    educationTitle: "Education",
    experienceTitle: "Experience",
    projectsTitle: "Selected project",
    toolkitTitle: "Toolkit",
    skillsTitle: "Tools",
    certificationsTitle: "Certifications",
    interestsTitle: "Beyond work",
    basedIn: "Based in",
    connect: "Connect",
    connectPrompt: "Start a conversation with Ruochen.",
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
    homeIntro: "这是一份由技术学习、量化思维与实际经验共同塑造的个人档案。",
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
    aboutTitleOne: "技术、数据，",
    aboutTitleTwo: "以及落地的行动。",
    aboutIntro: "简要了解张若宸的教育背景、实践经历与个人兴趣。",
    currentNoteTitle: "个人简介",
    currentNote: "从量化学习与软件项目，到品牌营销和应急服务志愿经历，张若宸习惯把分析思维带入真实、协作的工作环境。",
    valuesTitle: "做事方式",
    values: ["以分析理解问题", "为真实使用而构建", "在协作中保持沉着"],
    educationTitle: "教育背景",
    experienceTitle: "实践经历",
    projectsTitle: "精选项目",
    toolkitTitle: "能力与兴趣",
    skillsTitle: "工具",
    certificationsTitle: "证书",
    interestsTitle: "工作之外",
    basedIn: "现居",
    connect: "联系",
    connectPrompt: "与张若宸聊聊。",
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
