import "./NotFound.sass";

import { type Component, type JSX } from "solid-js";

import { Section } from "@/widgets";
import { Placeholder } from "@/shared/ui";

interface NotFoundProps extends JSX.HTMLAttributes<HTMLElement> {}

const NotFound: Component<NotFoundProps> = () => {
  return (
    <Section class={"NotFound"}>
      <Placeholder title={"404"}>Not Found</Placeholder>
    </Section>
  );
};

export default NotFound;
