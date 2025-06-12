import { enDict } from "./en";
import { ruDict } from "./ru";
import { Flatten } from "@solid-primitives/i18n";

export const dictionaries = {
  en: enDict,
  ru: ruDict,
};

export type Dict = typeof enDict;
export type Locales = keyof typeof dictionaries;
export type FlattedDict = Flatten<Dict>;
