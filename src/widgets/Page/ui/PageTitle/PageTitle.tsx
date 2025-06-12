import "./PageTitle.sass";

import { Component, JSX, onMount } from "solid-js";

import { Section } from "@/widgets";

import { gsap } from "gsap";

import { isIOS } from "@/shared/lib";

interface PageTitleProps
  extends Omit<JSX.HTMLAttributes<HTMLElement>, "children"> {
  children: JSX.Element;
}

const PageTitle: Component<PageTitleProps> = (props) => {
  let textRef: HTMLElement | null = null;

  onMount(() => {
    if (!textRef || isIOS) return;

    gsap.to(textRef, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: textRef,
        start: "+100",
        scrub: true,
      },
    });
  });

  return (
    <Section class={"PageTitle"} fullScreen>
      <h1
        id={"parallax-layer"}
        ref={(r) => (textRef = r)}
        class={"PageTitle__title"}
        data-speed={!isIOS && "clamp(1.75)"}
      >
        {props.children}
      </h1>
    </Section>
  );
};

export default PageTitle;
