import { lazy } from "solid-js";

export { default as Home } from "./Home/Home";
export const Other = lazy(() => import("./Home/Home"));
