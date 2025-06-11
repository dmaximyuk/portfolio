import { enDict } from "./en";
import { ruDict } from "./ru";

export const dictionaries = {
  en: enDict,
  ru: ruDict,
};

export type Dict = typeof enDict;
export type Locales = keyof typeof dictionaries;
