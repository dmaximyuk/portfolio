import { FlattedDict } from "@/shared/lib/i18n/locales";

export interface HeaderElement {
  type: "link" | "action";
  id: string;
  to: string;
  label: keyof FlattedDict;
}

export interface FooterElement {
  header: keyof FlattedDict;
  children: Array<{
    id: string;
    label: keyof FlattedDict;
    to: string;
  }>;
}
