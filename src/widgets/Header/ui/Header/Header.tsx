import "./Header.sass";

import { type Component, type JSX, For, splitProps, onMount } from "solid-js";
import { i18n } from "@/shared/lib";

import { A } from "@solidjs/router";

import { HeaderElement } from "@/shared/models";
import { animate, stagger } from "animejs";

interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  items: Array<HeaderElement>;
  before: JSX.Element;
}

const Header: Component<HeaderProps> = (props) => {
  let headerRef: HTMLUListElement | null = null;
  const mode: "desktop" | "mobile" = "desktop"; // TODO: add change mode
  const [local, attributes] = splitProps(props, ["items", "before"]);
  const { t } = i18n;

  onMount(() => {
    if (!headerRef) return;

    animate(headerRef, {
      opacity: [0, 1],
      translateY: [-50, 0],
    });

    animate(headerRef.childNodes, {
      opacity: [0, 1],
      translateY: [-50, 0],
      alternate: true,
      delay: stagger(200, { start: 250 }),
    });
  });

  return (
    <header class={"Header"} data-mode={mode} {...attributes}>
      <div class={"Header__container"}>
        <div class={"Header__container--before"}>{local.before}</div>
        <nav class={"Header__container--after"}>
          <ul class={"Header__links"} ref={(r) => (headerRef = r)}>
            <For each={local.items}>
              {(v) => (
                <li class={"Header__links-item"}>
                  <A
                    class={"Header__links-link"}
                    classList={{
                      "Header__links-btn": v.type === "action",
                    }}
                    // activeClass={"Header__links-link--active"}
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
