import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

type HeroVideoProps = {
  title: string;
  tagline: string;
  video: string;
};

/**
 * Home hero: muted, looping, inline background video with the title and
 * tagline over it. Accessibility: a dark scrim for text contrast, a
 * pause/play control (WCAG 2.2.2), and no autoplay when the user prefers
 * reduced motion.
 */
export function HeroVideo({ title, tagline, video }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [autoPlay] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [playing, setPlaying] = useState(autoPlay);

  function toggle() {
    const el = ref.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  }

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-neutral-900"
    >
      <video
        ref={ref}
        className="absolute inset-0 -z-10 size-full object-cover"
        autoPlay={autoPlay}
        preload={autoPlay ? "auto" : "none"}
        loop
        muted
        playsInline
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />

      <Container className="flex min-h-96 flex-col justify-center gap-3 py-16 sm:min-h-[28rem] lg:min-h-[32rem]">
        <h1 id="hero-title" className="max-w-2xl text-white">
          {title}
        </h1>
        <p className="max-w-xl text-lg text-white/90 md:text-xl">{tagline}</p>
      </Container>

      <Button
        variant="secondary"
        size="sm"
        onClick={toggle}
        aria-label={
          playing ? "Pause background video" : "Play background video"
        }
        className="absolute right-4 bottom-4 sm:right-6 lg:right-8"
      >
        {playing ? <Pause /> : <Play />}
        {playing ? "Pause" : "Play"}
      </Button>
    </section>
  );
}
