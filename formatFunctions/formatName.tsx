const EASTERN_NAME_ORDER_FORMATTERS = new Map([
  [
    "ko",
    (firstName: string, lastName: string, full: boolean) =>
      full ? `${lastName}${firstName}` : lastName,
  ],
  [
    "ja",
    (firstName: string, lastName: string, full: boolean) =>
      full ? `${lastName}${firstName}` : `${lastName}様`,
  ],
  [
    "zh-CN",
    (firstName: string, lastName: string, full: boolean) =>
      full ? `${lastName}${firstName}` : lastName,
  ],
  [
    "zh-TW",
    (firstName: string, lastName: string, full: boolean) =>
      full ? `${lastName}${firstName}` : lastName,
  ],
]);

export function formatName(
    name: {
  firstName?: string;
  lastName?: string;
  options?: { full?: boolean };
}, locale: string,) {
  if (!name.firstName) {
    return name.lastName || "";
  }
  if (!name.lastName) {
    return name.firstName;
  }

  const isFullName = Boolean(name.options && name.options.full);

  const customNameFormatter =
  EASTERN_NAME_ORDER_FORMATTERS.get(locale);

  if (customNameFormatter) {
    return customNameFormatter(name.firstName, name.lastName, isFullName);
  }
  if (isFullName) {
    return `${name.firstName} ${name.lastName}`;
  }
  return name.firstName;
}
