import "./PageTitle.sass";

import { onCleanup, onMount, type Component, type JSX } from "solid-js";
import { animate } from "animejs";

import { Section } from "@/widgets";
import { AnimatedShow } from "@/shared/ui";

interface PageTitleProps
  extends Omit<JSX.HTMLAttributes<HTMLElement>, "children"> {
  children: JSX.Element;
}

const PageTitle: Component<PageTitleProps> = (props) => {
  let textRef: HTMLElement | null = null;
  let ticking = false;

  const handleScroll = () => {
    if (!textRef) return;

    const scrollY = window.scrollY;
    const start = 100;
    const stop = window.innerHeight;

    if (scrollY > stop || scrollY < start / 2) return;

    if (scrollY <= start) {
      return animate(textRef, {
        translateY: 0,
        opacity: 1,
        duration: 200,
        ease: "easeOutQuad",
      });
    }

    const progress = Math.min((scrollY - start) / (stop - start), 1);
    animate(textRef, {
      translateY: -150 * progress,
      opacity: 1 - progress,
      duration: 200,
      ease: "easeOutQuad",
    });
  };

  const onHandleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  onMount(() => {
    window.addEventListener("scroll", onHandleScroll, { passive: true });
  });

  onCleanup(() => {
    window.removeEventListener("scroll", onHandleScroll);
  });

  return (
    <Section
      class={"PageTitle"}
      containerClass={"PageTitle__container"}
      fullScreen
    >
      <AnimatedShow
        Component={"h1"}
        animationParams={{
          opacity: [0, 1],
          scale: [0.95, 1],
          translateY: [50, 0],
          ease: "inOutBack",
        }}
        ref={(r) => (textRef = r)}
        class={"PageTitle__title"}
      >
        {props.children}
      </AnimatedShow>
    </Section>
  );
};

export default PageTitle;
