import { type Component, type JSX } from "solid-js";

interface PageProps extends Omit<JSX.HTMLAttributes<HTMLElement>, "onScroll"> {
  header: JSX.Element;
  footer: JSX.Element;
  onScroll?: (data?: unknown) => void;
}

const Page: Component<PageProps> = (props) => {
  return (
    <>
      {props.header}
      <div id="scroll">
        {props.children}
        {props.footer}
      </div>
    </>
  );
};

export default Page;
