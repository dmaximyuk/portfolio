import "./Section.sass";

import { type Component, type JSX, mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

interface SectionProps extends JSX.HTMLAttributes<HTMLElement> {
  Component?: "footer" | "section";
  fullScreen?: boolean;
  containerClass?: string;
}

const defaultProps: Omit<SectionProps, ""> = {
  Component: "section",
};

const Section: Component<SectionProps> = (props) => {
  const [local] = splitProps(mergeProps(defaultProps, props), [
    "children",
    "fullScreen",
    "class",
    "classList",
    "Component",
    "containerClass",
  ]);

  return (
    <Dynamic
      component={local.Component}
      class={"Section"}
      classList={{
        "Section--full-screen": local.fullScreen,
        [`${local.class}`]: !!local.class,
        ...local.classList,
      }}
    >
      <div
        class={"Section__container"}
        classList={{
          [`${local.containerClass}`]: !!local.containerClass,
        }}
      >
        {local.children}
      </div>
    </Dynamic>
  );
};

export default Section;
