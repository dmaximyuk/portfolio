import { type Component, type JSX } from "solid-js";

interface PageProps extends JSX.HTMLAttributes<HTMLElement> {
  header: JSX.Element;
  footer: JSX.Element;
}

const Page: Component<PageProps> = (props) => {
  return (
    <>
      {props.header}
      {props.children}
      {props.footer}
    </>
  );
};

export default Page;
