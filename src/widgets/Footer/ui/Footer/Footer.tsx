import "./Footer.sass";

import { type Component, type JSX } from "solid-js";

import { Section } from "@/widgets";

interface FooterProps extends JSX.HTMLAttributes<HTMLElement> {}

const Footer: Component<FooterProps> = () => {
  return <Section Component={"footer"}>Footer</Section>;
};

export default Footer;
