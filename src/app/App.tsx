import { type Component, onMount } from "solid-js";
import Lenis from "lenis";

import { Router } from "@solidjs/router";

import { routes } from "./routes";

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

  return <Router>{routes}</Router>;
};

export default App;
