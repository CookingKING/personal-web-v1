const Arrow = ({ direction = "up" }: { direction?: "up" | "down" }) => (
  <span aria-hidden="true">{direction === "up" ? "↗" : "↓"}</span>
);

const projects = [
  { number: "01", title: "代表项目名称", type: "核心项目 · 案例复盘", description: "用一句话说明项目背景、你解决的问题，以及它为什么值得被看见。", tags: ["策略", "执行", "成果"], tone: "coral" },
  { number: "02", title: "个人创作名称", type: "自主创作 · 完整过程", description: "展示你的主动性：从一个想法出发，如何把它一步步变成可以体验的作品。", tags: ["创意", "设计", "复盘"], tone: "blue" },
  { number: "03", title: "协作项目名称", type: "团队协作 · 关键贡献", description: "聚焦你的角色与实际贡献，让招聘者快速理解你在团队中带来的价值。", tags: ["协作", "沟通", "交付"], tone: "lime" },
];

const videos = [
  { platform: "YOUTUBE", number: "01", title: "用标题说明这条视频的价值", meta: "专业分享 · 08:42", tone: "night" },
  { platform: "BILIBILI", number: "02", title: "用视频展示你的表达与思考", meta: "项目记录 · 12:16", tone: "violet" },
  { platform: "抖音", number: "03", title: "一分钟认识你的工作方式", meta: "个人表达 · 01:00", tone: "orange" },
];

const abilities = [
  { number: "01", title: "发现问题", text: "理解目标、用户和上下文，把模糊需求整理成清晰方向。" },
  { number: "02", title: "推动执行", text: "把想法拆成可行动的步骤，在限制中持续推进并交付结果。" },
  { number: "03", title: "清晰表达", text: "用文字、视觉和视频讲清复杂内容，让协作更高效。" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首页">ZHANG<span>°</span></a>
        <nav className="desktop-nav" aria-label="主导航"><a href="#work">作品</a><a href="#video">视频</a><a href="#about">关于</a><a href="#experience">履历</a></nav>
        <a className="header-cta" href="#contact">联系我 <Arrow /></a>
        <details className="mobile-menu">
          <summary aria-label="打开菜单"><span /><span /></summary>
          <nav aria-label="移动端导航"><a href="#work">作品 <Arrow /></a><a href="#video">视频 <Arrow /></a><a href="#about">关于 <Arrow /></a><a href="#experience">履历 <Arrow /></a><a href="#contact">联系我 <Arrow /></a></nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline"><p>个人作品集 · 2026</p><p>悉尼 / 可远程工作</p></div>
        <h1 id="hero-title">你好，我是 Zhang。<br /><em>我把想法，做成作品。</em></h1>
        <div className="hero-bottom">
          <div className="availability"><i /> 正在寻找新的工作与合作机会</div>
          <p>这里收录我的项目、视频和职业经历。希望用清晰的思考、可靠的执行与真诚的表达，创造真正有价值的成果。</p>
          <a className="circle-link" href="#work" aria-label="向下查看精选作品"><Arrow direction="down" /></a>
        </div>
        <div className="hero-stamp" aria-hidden="true">OPEN<br />TO<br />WORK</div>
      </section>

      <section className="marquee" aria-label="专业关键词"><div>思考 · 创作 · 解决问题 · 持续学习 · 清晰表达 · 思考 · 创作 · 解决问题 · 持续学习 · 清晰表达 ·</div></section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>不只展示结果，<br />也展示<em>我如何做到。</em></h2>
          <p className="section-intro">每个案例都围绕背景、行动与成果展开，让人快速看见你的判断力与执行力。</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <div className="project-visual"><span className="project-index">{project.number}</span><span className="project-mark" aria-hidden="true">{project.number === "01" ? "A" : project.number === "02" ? "B" : "C"}</span><a href="#contact" aria-label={`了解${project.title}`}><Arrow /></a></div>
              <div className="project-copy"><p>{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul aria-label="项目关键词">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="video-section" id="video">
        <div className="video-head"><p className="eyebrow">02 / FEATURED VIDEO</p><h2>镜头里的我，<br /><em>比简历多一点。</em></h2><p>把 YouTube、Bilibili 和抖音内容集中在这里。正式上线时，只需替换视频链接和封面。</p></div>
        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.platform}><a className={`video-cover ${video.tone}`} href="#contact" aria-label={`播放${video.title}`}><span className="platform">{video.platform}</span><span className="video-number">{video.number}</span><span className="play"><i /></span></a><p>{video.meta}</p><h3>{video.title}</h3></article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="portrait-card" aria-label="个人照片占位区域"><div className="portrait-shape"><span>你的<br />照片</span></div><p>PORTRAIT / 2026</p></div>
        <div className="about-copy">
          <p className="eyebrow">03 / ABOUT ME</p><h2>好奇心，是我的<br /><em>第一件工具。</em></h2>
          <div className="about-columns"><p>我是 Zhang，一名重视思考与行动的创作者。我喜欢从真实的问题出发，理解它、拆解它，再找到简洁而有效的答案。</p><p>我希望加入一个尊重专业、重视协作的团队，也欢迎有趣的项目与交流。你可以通过下方邮箱找到我。</p></div>
          <div className="personal-facts"><div><span>所在地</span><strong>悉尼 / Australia</strong></div><div><span>工作方式</span><strong>全职 · 合作 · 远程</strong></div><div><span>语言</span><strong>中文 · English</strong></div></div>
        </div>
      </section>

      <section className="ability-section" aria-labelledby="ability-title">
        <div className="ability-title"><p className="eyebrow">04 / WHAT I BRING</p><h2 id="ability-title">我能带来的<br /><em>三件事。</em></h2></div>
        <div className="ability-list">{abilities.map((ability) => <article key={ability.number}><span>{ability.number}</span><h3>{ability.title}</h3><p>{ability.text}</p></article>)}</div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-head"><p className="eyebrow">05 / EXPERIENCE</p><h2>经历不是清单，<br />是持续发生的<em>成长。</em></h2><a className="outline-button" href="#contact">索取完整简历 <Arrow /></a></div>
        <div className="timeline">
          <article><time>现在 — 2024</time><div><h3>你的当前职位</h3><p>公司或团队名称 · 城市</p></div><span>在这里补充最重要的职责与可量化成果。</span></article>
          <article><time>2024 — 2022</time><div><h3>上一段工作经历</h3><p>公司或团队名称 · 城市</p></div><span>用一两句话说明你解决的问题和创造的价值。</span></article>
          <article><time>2022 — 2018</time><div><h3>教育与早期经历</h3><p>学校或机构名称 · 专业</p></div><span>补充与目标岗位最相关的学习、证书或荣誉。</span></article>
        </div>
      </section>

      <section className="notes-section">
        <div><p className="eyebrow">06 / NOTES</p><h2>我也在这里，<br /><em>持续记录。</em></h2></div>
        <div className="note-links"><a href="#contact"><span>项目复盘</span><strong>把过程写下来，让经验可以复用。</strong><Arrow /></a><a href="#contact"><span>专业分享</span><strong>关于工作、学习与创造的阶段思考。</strong><Arrow /></a><a href="#video"><span>视频内容</span><strong>用更直接的方式分享观点与作品。</strong><Arrow /></a></div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">07 / LET’S TALK</p><h2>如果你觉得我们<br />应该认识，<em>来聊聊。</em></h2><a className="email-link" href="mailto:hello@example.com">hello@example.com <Arrow /></a><p className="contact-note">通常在 2 个工作日内回复 · 请在上线前替换为你的真实邮箱</p><div className="contact-orbit" aria-hidden="true"><span>HELLO</span></div>
      </section>

      <footer><a className="brand" href="#top">ZHANG<span>°</span></a><p>© 2026 Zhang · 个人作品集</p><div><a href="#">LinkedIn</a><a href="#">Bilibili</a><a href="#top">回到顶部 ↑</a></div></footer>
    </main>
  );
}
