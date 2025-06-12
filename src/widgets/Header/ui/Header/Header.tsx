import "./Header.sass";

import { type Component, type JSX, For, splitProps } from "solid-js";
import { i18n } from "@/shared/lib";

import { A } from "@solidjs/router";

import { HeaderElement } from "@/shared/models";

interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  items: Array<HeaderElement>;
  before: JSX.Element;
}

const Header: Component<HeaderProps> = (props) => {
  const mode: "desktop" | "mobile" = "desktop"; // TODO: add change mode
  const [local, attributes] = splitProps(props, ["items", "before"]);
  const { t } = i18n;

  return (
    <header class={"Header"} data-mode={mode} {...attributes}>
      <div class={"Header__container"}>
        <div class={"Header__container--before"}>{local.before}</div>
        <nav class={"Header__container--after"}>
          <ul class={"Header__links"}>
            <For each={local.items}>
              {(v) => (
                <li class={"Header__links-item"}>
                  <A
                    class={"Header__links-link"}
                    classList={{
                      "Header__links-btn": v.type === "action",
                    }}
                    activeClass={"Header__links-link--active"}
                    href={v.to}
                  >
                    {`${t(v.label)}`}
                  </A>
                </li>
              )}
            </For>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
