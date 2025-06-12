import { HeaderElement } from "@/shared/models";

export const headerItems: Array<HeaderElement> = [
  {
    type: "link",
    id: "home",
    to: "/",
    label: "navigation.home",
  },
  {
    type: "link",
    id: "works",
    to: "/works",
    label: "navigation.works",
  },
  {
    type: "link",
    id: "about",
    to: "/about",
    label: "navigation.about",
  },
  {
    type: "action",
    id: "contact",
    to: "/contact",
    label: "navigation.contact",
  },
];
