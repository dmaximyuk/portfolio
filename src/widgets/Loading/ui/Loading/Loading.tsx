import "./Loading.sass";

import {
  type Component,
  type JSX,
  onMount,
  For,
  createSignal,
  Switch,
  Match,
} from "solid-js";
import { animate, createTimeline, stagger } from "animejs";

import { Section } from "@/widgets";

interface LoadingProps extends JSX.HTMLAttributes<HTMLElement> {}

const Loading: Component<LoadingProps> = (props) => {
  const typography: string[][] = ["MAXIMYUK".split(""), "PRODUCTION".split("")];
  const [showChildren, setShowChildren] = createSignal(false);

  onMount(() => {
    const tl = createTimeline({
      duration: 100,
      // delay: 500,
    });

    tl.label("loading-animation")
      .add("#loading-char-str-0", {
        opacity: [0, 1],
        y: [-50, 0],
        skew: [15, 0],
        duration: 500,
        delay: stagger(100, { start: 250 }),
        ease: "inOutBack",
      })
      .add("#loading-char-str-0", {
        x: [0, -15],
      })
      .add("#loading-char-str-1", {
        opacity: [0, 1],
        y: [50, 0],
        skew: [-15, 0],
        duration: 500,
        delay: stagger(100, { start: 250 }),
        ease: "inOutBack",
      })
      .add("#loading-char-str-1", {
        x: [0, 15],
      })
      .add("#loading-char-str-2", {
        opacity: [0, 1],
        x: [100, 15],
        delay: stagger(100, { start: 250 }),
        ease: "inOutBack",
      })
      .call(() => setTimeout(() => setShowChildren(true), 1000));
  });

  if (showChildren()) {
    return props.children;
  }

  return (
    <Switch>
      <Match when={showChildren()}>{props.children}</Match>
      <Match when={!showChildren()}>
        <Section class={"Loading"} containerClass={"Loading__container"}>
          <For each={typography}>
            {(str, strIndex) => (
              <div
                id={`loading-typography-${strIndex()}`}
                class={"Loading__typography"}
                classList={{
                  [`Loading__typography-${strIndex()}`]: true,
                }}
              >
                <For each={str}>
                  {(char, charIndex) => (
                    <div
                      id={`loading-char-str-${strIndex()}`}
                      class={"Loading__item"}
                      classList={{
                        [`Loading__item-${charIndex()}`]: true,
                      }}
                    >
                      {char}
                    </div>
                  )}
                </For>
              </div>
            )}
          </For>
        </Section>
      </Match>
    </Switch>
  );
};

export default Loading;
