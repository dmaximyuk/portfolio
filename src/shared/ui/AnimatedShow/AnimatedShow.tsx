import { Component, JSX, onMount, splitProps } from "solid-js";
import { animate, type AnimationParams } from "animejs";
import { Dynamic } from "solid-js/web";

interface AnimatedShowProps extends JSX.HTMLAttributes<HTMLElement> {
  Component: keyof JSX.IntrinsicElements;
  animationParams: AnimationParams;
}

const AnimatedShow: Component<AnimatedShowProps> = (props) => {
  const [local, attributes] = splitProps(props, [
    "Component",
    "animationParams",
    "ref",
  ]);
  let elementRef: HTMLElement | null = null;

  onMount(() => {
    if (!elementRef) return;
    animate(elementRef, props.animationParams);
  });

  return (
    <Dynamic
      {...attributes}
      component={local.Component}
      ref={(ref: HTMLElement) => {
        elementRef = ref;

        if (typeof local.ref === "function") {
          local.ref(ref);
        } else {
          local.ref = ref;
        }
      }}
    />
  );
};

export default AnimatedShow;
