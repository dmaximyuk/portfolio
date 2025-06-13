import { lazy } from "solid-js";

export { default as Home } from "./Home/Home";
export { default as Works } from "./Works/Works";
export const Other = lazy(() => import("./Home/Home"));
