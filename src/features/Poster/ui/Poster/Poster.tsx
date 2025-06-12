import "./Poster.sass";

import { Component, JSX, onMount, splitProps } from "solid-js";

import { gsap } from "gsap";

import { PhotoMe } from "@/shared/assets/photos";
import { VideoMe } from "@/shared/assets/video";

import { isIOS } from "@/shared/lib";

interface PosterProps extends JSX.HTMLAttributes<HTMLElement> {
  size: "l" | "xl";
}

const Poster: Component<PosterProps> = (props) => {
  let divRef: HTMLDivElement | null = null;
  const [local] = splitProps(props, ["size"]);

  onMount(() => {
    if (!divRef || isIOS) return;

    gsap.to(divRef, {
      scale: 0.73,
      ease: "none",
      scrollTrigger: {
        pinType: "transform",
        trigger: divRef,
        start: "top top",
        end: "+100",
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={(el) => (divRef = el)}
      class={"Poster"}
      classList={{
        [`Poster_size-${local.size}`]: true,
      }}
      style={
        isIOS
          ? {
              transform: `scale(0.73)`,
            }
          : {}
      }
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
    </div>
  );
};

export default Poster;
