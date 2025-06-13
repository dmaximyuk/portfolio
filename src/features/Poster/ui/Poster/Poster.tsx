import "./Poster.sass";

import { type Component, type JSX, onMount, onCleanup } from "solid-js";
import { animate } from "animejs";

import { AnimatedShow } from "@/shared/ui";

import { PhotoMe } from "@/shared/assets/photos";
import { VideoMe } from "@/shared/assets/video";

interface PosterProps extends JSX.HTMLAttributes<HTMLElement> {}

const Poster: Component<PosterProps> = () => {
  let ticking = false;
  let divRef: HTMLElement | null = null;

  const handleScroll = () => {
    if (!divRef) return;

    let scale = 1;
    scale -= window.scrollY / 1000;

    if (scale < 0.73) return;

    animate(divRef, {
      scale: scale,
      duration: 50,
    });
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  onMount(() => {
    if (divRef) {
      divRef.style.transform = `scale(${window.scrollY > 200 ? "0.73" : "1"})`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
  });

  onCleanup(() => {
    window.removeEventListener("scroll", onScroll);
  });

  return (
    <AnimatedShow
      Component={"div"}
      animationParams={{
        opacity: [0, 1],
        translateY: [-50, 0],
      }}
      ref={(el) => (divRef = el)}
      class={"Poster"}
      style={{
        transition: "all .05s",
      }}
    >
      <video
        class={"Poster__video"}
        controls={false}
        autoplay
        loop
        muted
        poster={PhotoMe}
      >
        <source src={VideoMe} type={"video/mp4"} />
      </video>
    </AnimatedShow>
  );
};

export default Poster;
