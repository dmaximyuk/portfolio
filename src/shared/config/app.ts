import { FooterElement, HeaderElement } from "@/shared/models";

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

export const footerItems: Array<FooterElement> = [
  {
    header: "navigation.contact",
    children: [
      {
        id: "test",
        label: "navigation.contact",
        to: "/",
      },
      {
        id: "test",
        label: "navigation.contact",
        to: "/",
      },
    ],
  },
  {
    header: "navigation.about",
    children: [
      {
        id: "test",
        label: "navigation.about",
        to: "/",
      },
      {
        id: "test",
        label: "navigation.about",
        to: "/",
      },
    ],
  },
];
