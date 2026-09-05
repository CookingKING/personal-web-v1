import Image from "next/image";
import type { Locale } from "@/content/site";
import { copy, localized, siteContent } from "@/content/site";

export function VideoGrid({ locale }: { locale: Locale }) {
  const c = copy(locale);

  if (!siteContent.videos.length) {
    return (
      <section className="empty-work" aria-labelledby="coming-soon-title">
        <div className="empty-symbol" aria-hidden="true"><span>▶</span></div>
        <div>
          <p className="eyebrow">00 / In progress</p>
          <h2 id="coming-soon-title">{c.comingSoon}</h2>
          <p>{c.comingSoonBody}</p>
          <div className="platform-list" aria-label={c.plannedPlatforms}>
            <span>YouTube</span><span>Bilibili</span><span>{locale === "en" ? "Douyin" : "抖音"}</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="video-grid" aria-label={c.selectedWork}>
      {siteContent.videos.map((video, index) => (
        <article className="video-card" key={video.url}>
          <a href={video.url} target="_blank" rel="noopener noreferrer" aria-label={`${c.visitPlatform} ${video.platform}: ${localized(video.title, locale)}`}>
            <Image
              src={video.thumbnail}
              alt={localized(video.thumbnailAlt, locale)}
              width={1600}
              height={900}
              sizes="(max-width: 800px) 92vw, 45vw"
              priority={index === 0}
            />
            <span className="play-badge" aria-hidden="true">▶</span>
          </a>
          <div className="video-meta"><p>{video.platform}</p>{video.date && <time dateTime={video.date}>{video.date}</time>}</div>
          <h2>{localized(video.title, locale)}</h2>
        </article>
      ))}
    </section>
  );
}
