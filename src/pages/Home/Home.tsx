import "./Home.sass";

import { type Component, type JSX, createSignal } from "solid-js";

import { Page, Header, Section, Footer, PageTitle } from "@/widgets";
import { Poster } from "@/features";

import { headerItems } from "@/shared/config";

interface HomeProps extends JSX.HTMLAttributes<HTMLElement> {}

const Home: Component<HomeProps> = () => {
  const [scrolled, setScrolled] = createSignal<boolean>(false);

  return (
    <Page
      onScroll={() =>
        ((window.pageYOffset > 200 && !scrolled()) ||
          (window.pageYOffset < 200 && scrolled())) &&
        setScrolled(window.pageYOffset > 200)
      }
      header={
        <Header
          items={headerItems}
          before={<Poster size={scrolled() ? "l" : "xl"} />}
        />
      }
      footer={<Footer />}
    >
      <PageTitle>
        <span class={"Home__accent"}>I'm Dmitry —</span> an experienced frontend
        developer simplifying complexity & delivering impactful solutions
      </PageTitle>
      <Section fullScreen>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
        amet autem blanditiis cum dicta earum eius ex harum in, odit officia
        quae quasi, ratione repellat reprehenderit, sint voluptates
        voluptatibus.
      </Section>
    </Page>
  );
};

export default Home;
