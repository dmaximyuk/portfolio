import "./Works.sass";

import { type Component, type JSX } from "solid-js";

import { Section, PageTitle } from "@/widgets";

interface WorksProps extends JSX.HTMLAttributes<HTMLElement> {}

const Works: Component<WorksProps> = () => {
  return (
    <>
      <PageTitle>
        <span class={"Works__accent"}>I'm Dmitry —</span> an experienced
        frontend developer simplifying complexity & delivering impactful
        solutions
      </PageTitle>
      <Section fullScreen>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
        amet autem blanditiis cum dicta earum eius ex harum in, odit officia
        quae quasi, ratione repellat reprehenderit, sint voluptates
        voluptatibus.
      </Section>
      <Section fullScreen>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
        amet autem blanditiis cum dicta earum eius ex harum in, odit officia
        quae quasi, ratione repellat reprehenderit, sint voluptates
        voluptatibus.
      </Section>
      <Section fullScreen>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
        amet autem blanditiis cum dicta earum eius ex harum in, odit officia
        quae quasi, ratione repellat reprehenderit, sint voluptates
        voluptatibus.
      </Section>
    </>
  );
};

export default Works;
