const Arrow = ({ className = "" }: { className?: string }) => (
  <span aria-hidden="true" className={className}>↗</span>
);

const projects = [
  {
    number: "01",
    title: "Luma Botanics",
    type: "品牌识别 · 电商体验",
    note: "从植物实验室到日常浴室，为一个天然护肤品牌构建完整的视觉与购物体验。",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1600&q=88",
    alt: "陶瓷与植物组成的静物",
    color: "clay",
  },
  {
    number: "02",
    title: "Still House",
    type: "产品策略 · 数字体验",
    note: "一个帮助城市生活者重拾节律的正念会员平台，安静却不疏离。",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=88",
    alt: "温暖阳光下宁静的疗愈空间",
    color: "sage",
  },
  {
    number: "03",
    title: "Field Notes",
    type: "编辑设计 · 创意开发",
    note: "为独立创作者打造的纸感数字档案，让阅读重新拥有时间感。",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=88",
    alt: "木桌上的纸张与书写工具",
    color: "paper",
  },
];

const services = [
  { number: "I", title: "品牌与方向", copy: "从模糊的愿景出发，找到清晰的品牌声音、结构与视觉系统。" },
  { number: "II", title: "数字产品设计", copy: "把复杂需求编织成直觉、克制又具有人情味的网站与产品体验。" },
  { number: "III", title: "创意开发", copy: "让设计不停在画布里：用精准的前端实现、动效与细节完成最后一毫米。" },
];

export default function Home() {
  return (
    <main>
      <div className="paper-grain" aria-hidden="true" />
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="回到首页">Z<span>·</span></a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#work">作品</a><a href="#about">关于</a><a href="#services">能力</a><a href="#contact">联系</a>
        </nav>
        <a className="nav-cta" href="mailto:hello@example.com">打个招呼 <Arrow /></a>
        <details className="mobile-menu">
          <summary aria-label="打开导航"><span /><span /></summary>
          <nav aria-label="移动端导航">
            <a href="#work">作品 <Arrow /></a><a href="#about">关于 <Arrow /></a><a href="#services">能力 <Arrow /></a><a href="#contact">联系 <Arrow /></a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> 独立设计师 · 创意开发者</p>
          <h1>设计有温度的<em>数字体验</em></h1>
          <p className="hero-intro">你好，我是 Zhang。我把策略、编辑式设计与前端工艺放在一起，为有理想的品牌创造安静、清晰而难忘的网络作品。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">浏览精选作品 <Arrow /></a>
            <span className="availability"><i /> 接受 2026 年度新项目</span>
          </div>
        </div>

        <div className="hero-visual reveal delay-1" aria-label="宁静的植物空间">
          <div className="sun-shape" aria-hidden="true" />
          <div className="arch-image"><img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=88" alt="阳光下的茂密绿色叶片" /></div>
          <div className="hero-note"><span>“</span>好的设计，应该像花园一样自然生长。</div>
          <p className="vertical-note">悉尼 · 33.8688° S</p>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-head">
          <p className="section-number">01 / 精选作品</p>
          <h2>从想法到体验，<br /><em>一样用心。</em></h2>
          <p>这些项目跨越品牌、产品与技术，却共享同一个起点：理解人，再开始设计。</p>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <article className={`project project-${index + 1}`} key={project.title}>
              <a className={`project-image ${project.color}`} href="#contact" aria-label={`了解 ${project.title} 项目`}>
                <img src={project.image} alt={project.alt} loading={index === 0 ? "eager" : "lazy"} />
                <span className="project-arrow"><Arrow /></span>
              </a>
              <div className="project-meta">
                <span>{project.number}</span>
                <div><p>{project.type}</p><h3>{project.title}</h3><p className="project-note">{project.note}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" aria-label="设计宣言">
        <span aria-hidden="true">✶</span>
        <p>在效率之外，<br />也为<em>感受</em>留一个位置。</p>
        <span aria-hidden="true">✶</span>
      </section>

      <section className="about-section" id="about">
        <div className="about-image-wrap">
          <div className="about-image"><img src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=86" alt="光影中的设计工作台" loading="lazy" /></div>
          <p className="image-caption">OBSERVE · SHAPE · REFINE</p>
        </div>
        <div className="about-copy">
          <p className="section-number">02 / 关于我</p>
          <h2>好奇心是我的<br /><em>第一件工具。</em></h2>
          <div className="about-body">
            <p>我喜欢在混乱里找到节奏，在细节里发现个性。过去几年，我和创业团队、文化机构与成长中的品牌合作，从一张白纸开始，做出真正被人使用的东西。</p>
            <p>我相信清晰与美感并不冲突。最好的体验往往不需要大声解释，它会在恰好的时候，让人觉得“原来如此”。</p>
          </div>
          <div className="facts">
            <div><strong>6+</strong><span>年跨学科创作</span></div>
            <div><strong>24</strong><span>个合作品牌</span></div>
            <div><strong>9</strong><span>项国际设计入选</span></div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-intro">
          <p className="section-number">03 / 我能做什么</p>
          <h2>一个想法，<br />从<em>根系</em>长到枝叶。</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><a href="#contact">详情 <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <p className="section-number">04 / 合作方式</p>
        <div className="process-line">
          <div><span>01</span><h3>倾听</h3><p>理解目标、受众和真正的问题。</p></div>
          <div><span>02</span><h3>定义</h3><p>建立清晰的方向与创作原则。</p></div>
          <div><span>03</span><h3>生长</h3><p>用开放的探索找到独特的答案。</p></div>
          <div><span>04</span><h3>打磨</h3><p>把系统、动效和细节带到现实。</p></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span>有新想法 · 一起聊聊 · 有新想法 ·</span></div>
        <p className="section-number">05 / 从这里开始</p>
        <h2>你的下一个想法，<br />值得被<em>好好做出来。</em></h2>
        <a className="contact-link" href="mailto:hello@example.com">hello@example.com <Arrow /></a>
        <p>通常在 2 个工作日内回复 · 悉尼 / 远程</p>
      </section>

      <footer>
        <a className="monogram" href="#top">Z<span>·</span></a>
        <p>© 2026 Zhang. 以好奇心与咖啡制作。</p>
        <div><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#top">回到顶部 ↑</a></div>
      </footer>
    </main>
  );
}
