import "./Card.sass";

import { type Component, type JSX } from "solid-js";

interface CardProps extends JSX.HTMLAttributes<HTMLElement> {
  size: "xl";
}

const Card: Component<CardProps> = (props) => {
  return (
    <div
      class={"Card"}
      classList={{
        [`Card_size-${"l"}`]: true,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
