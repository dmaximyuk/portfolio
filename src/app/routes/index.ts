import { Home, Works, NotFound } from "@/pages";

import { type RouteDefinition } from "@solidjs/router";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/works",
    component: Works,
  },
  {
    path: "*",
    component: NotFound,
  },
];
