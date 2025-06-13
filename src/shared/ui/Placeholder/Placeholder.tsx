import "./Placeholder.sass";
import { Component, JSX } from "solid-js";

interface PlaceholderProps extends JSX.HTMLAttributes<HTMLElement> {
  title: string;
  children: string;
}

const Placeholder: Component<PlaceholderProps> = (props) => {
  return (
    <div class={"Placeholder"}>
      <p>{props.title}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Placeholder;
