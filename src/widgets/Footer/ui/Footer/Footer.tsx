import "./Footer.sass";

import { type Component, type JSX, For } from "solid-js";
import { i18n } from "@/shared/lib";

import { Section } from "@/widgets";
import { A } from "@solidjs/router";

import { type FooterElement } from "@/shared/models";

interface FooterProps extends JSX.HTMLAttributes<HTMLElement> {
  items: Array<FooterElement>;
}

const Footer: Component<FooterProps> = (props) => {
  const { t } = i18n;

  return (
    <Section
      Component={"footer"}
      class={"Footer"}
      containerClass={"Footer__container"}
    >
      <div class={"Footer__top"}>
        <div class={"Footer__container--before"}>
          <h3 class={"Footer__time"}>
            <span class={"Footer__time--accent"}>Local time -</span> 11:13 AM
          </h3>
          <h2 class={"Footer__title"}>
            Let’s build something incredible together!
          </h2>
          <a class={"Footer__email"} href={"#"}>
            d_maximyuk@icloud.com
          </a>
        </div>

        <div class={"Footer__container--after"}>
          <For each={props.items}>
            {(item) => (
              <div class={"Footer__links"}>
                <p class={"Footer__header"}>{item.header}</p>
                <ul>
                  <For each={item.children}>
                    {(link) => (
                      <li class={"Footer__links-item"}>
                        <A class={"Footer__links-link"} href={link.to}>
                          {`${t(link.label)}`}
                        </A>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </div>
      </div>
      <div class={"Footer__bottom"}>
        <div class={"Footer__copyright"}>
          <p>(C) M.PRODUCTION — 2025</p>
          <p>Built with Love {"<3"}</p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
