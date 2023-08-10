import { DateStyle } from "@shopify/react-i18n";

export function dateStyleOptions(date: Date, style?: DateStyle) {
  switch (style) {
    case DateStyle.Long:
      return {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
      };
    case DateStyle.Short:
      return { year: "numeric", month: "short", day: "numeric" };
    case DateStyle.Humanize:
      return { year: "numeric", month: "long", day: "numeric" };
    case DateStyle.Time:
      return { hour: "2-digit", minute: "2-digit" };
    case DateStyle.DateTime:
      return {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
    default:
      return null;
  }
}
