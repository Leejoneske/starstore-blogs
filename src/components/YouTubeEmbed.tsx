import { useState } from "react";
import { Play } from "lucide-react";

// Click-to-load facade. The real <iframe> pulls roughly a megabyte of player
// JS from three third-party origins, which it did on page load even for
// readers who never watched. The poster is a single lazy image until clicked.
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="my-8 rounded-lg overflow-hidden border border-rule">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {active ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&controls=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 w-full h-full group cursor-pointer bg-card"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              width={480}
              height={360}
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/20 group-hover:bg-ink/10 transition-colors">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-ink/85 group-hover:bg-gold transition-colors">
                <Play className="w-7 h-7 text-paper group-hover:text-ink fill-current translate-x-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="text-center text-sm text-muted-foreground py-3 font-mono">
        Watch on YouTube:{" "}
        <a
          href={`https://youtu.be/${id}`}
          target="_blank"
          rel="noopener"
          className="underline hover:text-gold"
        >
          youtu.be/{id}
        </a>
      </p>
    </div>
  );
}
