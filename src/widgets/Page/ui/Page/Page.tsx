import { type Component, type JSX, onMount } from "solid-js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import { isIOS } from "@/shared/lib";

interface PageProps extends Omit<JSX.HTMLAttributes<HTMLElement>, "onScroll"> {
  header: JSX.Element;
  footer: JSX.Element;
  onScroll?: (data?: unknown) => void;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Page: Component<PageProps> = (props) => {
  onMount(() => {
    if (!isIOS) {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });

      ScrollTrigger.normalizeScroll(true);
      ScrollTrigger.refresh();
    }
  });

  return (
    <>
      {props.header}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {props.children}
          {props.footer}
        </div>
      </div>
    </>
  );
};

export default Page;
