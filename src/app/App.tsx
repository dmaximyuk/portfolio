import { type Component, onMount } from "solid-js";
import Lenis from "lenis";

import { Router, RouteSectionProps } from "@solidjs/router";

import { Footer, Header, Loading } from "@/widgets";
import { Poster } from "@/features";

import { footerItems, headerItems } from "@/shared/config";

import { routes } from "./routes";

const Layout: Component<RouteSectionProps<unknown>> = (props) => {
  return (
    <Loading>
      <Header items={headerItems} before={<Poster />} />
      {props.children}
      <Footer items={footerItems} />
    </Loading>
  );
};

const App: Component = () => {
  const lenis = new Lenis({
    duration: 1.1,
  });

  const smoothRaf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(smoothRaf);
  };

  onMount(() => {
    requestAnimationFrame(smoothRaf);
  });

  return <Router root={Layout}>{routes}</Router>;
};

export default App;
