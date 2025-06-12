import { FlattedDict } from "@/shared/lib/i18n/locales";

export interface HeaderElement {
  type: "link" | "action";
  id: string;
  to: string;
  label: keyof FlattedDict;
}
