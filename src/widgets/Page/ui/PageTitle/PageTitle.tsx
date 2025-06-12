import "./PageTitle.sass";

import { onCleanup, onMount, type Component, type JSX } from "solid-js";
import { animate } from "animejs";

import { Section } from "@/widgets";

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
    const max = 500;

    if (scrollY <= start) {
      return animate(textRef, {
        translateY: 0,
        opacity: 1,
        duration: 200,
        ease: "easeOutQuad",
      });
    }

    const progress = Math.min((scrollY - start) / (max - start), 1);
    animate(textRef, {
      translateY: -150 * progress,
      opacity: 1 - progress,
      duration: 200,
      ease: "easeOutQuad",
    });
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  onMount(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", onScroll);
  });

  return (
    <Section
      class={"PageTitle"}
      containerClass={"PageTitle__container"}
      fullScreen
    >
      <h1 ref={(r) => (textRef = r)} class={"PageTitle__title"}>
        {props.children}
      </h1>
    </Section>
  );
};

export default PageTitle;
