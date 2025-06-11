import { createMemo, createSignal } from "solid-js";
import { flatten, translator } from "@solid-primitives/i18n";

import { dictionaries, type Locales } from "./locales";

const [locale, setLocale] = createSignal<Locales>("en");

const parseLocale = () => {
  const localStorageKey = localStorage.getItem("t") as Locales | null;
  if (localStorageKey) {
    setLocale(localStorageKey);
  }
};

const updateLocale = (lang: Locales) => {
  localStorage.setItem("t", lang);
  setLocale(lang);
};

const dict = createMemo(() => flatten(dictionaries[locale()]));

const t = translator(dict);

export const i18n = {
  t,
  parseLocale,
  updateLocale,
};
