import { memoize } from "@shopify/function-enhancers";

export function ordinal(amount: number, locale: string) {
  const group = memoizedPluralRules(locale, { type: "ordinal" }).select(amount);

  console.log(group);
//   return translate(group, { scope: "ordinal" }, { amount });
}

function pluralRules(locale: string, options: Intl.PluralRulesOptions = {}) {
  return new Intl.PluralRules(locale, options);
}

const memoizedPluralRules = memoize(
  pluralRules,
  (locale: string, options: Intl.PluralRulesOptions = {}) =>
    `${locale}${JSON.stringify(options)}`
);
