import { CurrencyCode } from "@shopify/react-i18n";

export enum UnicodeCharacterSet {
  DirectionControl = "[\u200E\u200F\u202A-\u202E]",
  Negative = "[\u002D\u058A\u05BE\u1806\u2010-\u2015\u2212\u2796\u2E3A\u2E3B\uFE58\uFE63\uFF0D]",
  Punctuation = "[!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65\uD800]|[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]",
  Latin = "[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]",
  Han = "[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]",
  Hangul = "[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]",
  Katakana = "[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D\uD82B]|[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]",
  Hiragana = "[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|\uD83C\uDE00",
  Thai = "[\u0E01-\u0E3A\u0E40-\u0E5B]",
}

const UNICODE_NUMBERING_SYSTEM = "-u-nu-";
const LATIN = "latn";

interface NumberFormatOptions extends Intl.NumberFormatOptions {
  as?: "number" | "currency" | "percent";
  precision?: number;
}

function latinLocales(locales?: string | string[]) {
  return Array.isArray(locales)
    ? locales.map((locale) => latinLocale(locale)!)
    : latinLocale(locales);
}

const CurrencyShortFormException = {
  BRL: "R$",
  HKD: "HK$",
};

function numberFormatCacheKey(
  locales?: string | string[],
  options: NumberFormatOptions = {}
) {
  const localeKey = Array.isArray(locales) ? locales.sort().join("-") : locales;

  return `${localeKey}-${JSON.stringify(options)}`;
}

const numberFormats = new Map<string, Intl.NumberFormat>();
export function memoizedNumberFormatter(
  locales?: string | string[],
  options?: Intl.NumberFormatOptions
) {
  // force a latin locale for number formatting
  const latnLocales = latinLocales(locales);
  const key = numberFormatCacheKey(latnLocales, options);
  if (numberFormats.has(key)) {
    return numberFormats.get(key)!;
  }
  const i = new Intl.NumberFormat(latnLocales, options);
  numberFormats.set(key, i);
  return i;
}

function latinLocale(locale?: string) {
  if (!locale) return locale;
  // Intl.Locale was added to iOS in v14. See https://caniuse.com/?search=Intl.Locale
  // We still support ios 12/13, so we need to check if this works and fallback to the default behaviour if not
  try {
    return new Intl.Locale(locale, {
      numberingSystem: LATIN,
    }).toString();
  } catch {
    const numberingSystemRegex = new RegExp(
      `(?:-x|${UNICODE_NUMBERING_SYSTEM}).*`,
      "g"
    );
    const latinNumberingSystem = `${UNICODE_NUMBERING_SYSTEM}${LATIN}`;
    return locale
      .replace(numberingSystemRegex, "")
      .concat(latinNumberingSystem);
  }
}

function getCurrencySymbol(locale: string, options: Intl.NumberFormatOptions) {
  const currencyStringRaw = formatCurrencyNumber(0, locale, options);
  const controlChars = new RegExp(
    `${UnicodeCharacterSet.DirectionControl}*`,
    "gu"
  );
  const currencyString = currencyStringRaw.replace(controlChars, "");
  const matchResult = /\p{Nd}\p{Po}*\p{Nd}*/gu.exec(currencyString);
  if (!matchResult) {
    throw new Error(
      `Number input in locale ${locale} is currently not supported.`
    );
  }
  const formattedAmount = matchResult[0];
  const [currencyPrefix, currencySuffix] =
    currencyString.split(formattedAmount);
  const elements = {
    symbol: currencyPrefix || currencySuffix,
    prefixed: currencyPrefix !== "",
  };

  return elements;
}

function formatCurrencyNumber(
  amount: number,
  locale: string,
  options: Intl.NumberFormatOptions
) {
  return memoizedNumberFormatter(locale, {
    style: "currency",
    ...options,
  }).format(amount);
}

function getShortCurrencySymbol(currency: string, locale: string) {
  const regionCode = currency.substring(0, 2);
  let shortSymbolResult: { symbol: string; prefixed: boolean };

  // currencyDisplay: 'narrowSymbol' was added to iOS in v14.5. See https://caniuse.com/?search=currencydisplay
  // We still support ios 12/13, so we need to check if this works and fallback to the default if not
  // All other supported browsers understand narrowSymbol, so once our minimum iOS version is updated we can remove this fallback
  try {
    shortSymbolResult = getCurrencySymbol(locale, {
      currency,
      currencyDisplay: "narrowSymbol",
    });
  } catch {
    shortSymbolResult = getCurrencySymbol(locale, { currency });
  }

  if (currency in CurrencyShortFormException) {
    return {
      symbol: (CurrencyShortFormException as any)[currency],
      prefixed: shortSymbolResult.prefixed,
    };
  }

  const shortSymbol = shortSymbolResult.symbol.replace(regionCode, "");
  const alphabeticCharacters = /[A-Za-zÀ-ÖØ-öø-ÿĀ-ɏḂ-ỳ]/;

  return alphabeticCharacters.exec(shortSymbol)
    ? shortSymbolResult
    : { symbol: shortSymbol, prefixed: shortSymbolResult.prefixed };
}

function formatCurrencyNone(
  amount: any,
  locale: string,
  options: Intl.NumberFormatOptions
): string {
  const currency = options.currency || "";
  const adjustedPrecision = currencyDecimalPlaces.get(currency.toUpperCase());

  return memoizedNumberFormatter(locale, {
    style: "decimal",
    minimumFractionDigits: adjustedPrecision,
    maximumFractionDigits: adjustedPrecision,
    ...options,
  }).format(amount);
}

export function formatCurrency(
  amount: any,
  locale: string,
  currency: CurrencyCode
): string {
  const formattedAmount = formatCurrencyNone(amount, locale, { currency });
  const negativeRegex = new RegExp(
    `${UnicodeCharacterSet.DirectionControl}*${UnicodeCharacterSet.Negative}`,
    "g"
  );
  const negativeMatch = negativeRegex.exec(formattedAmount)?.shift() || "";

  const shortSymbol = getShortCurrencySymbol(currency, locale);
  const formattedWithSymbol = shortSymbol.prefixed
    ? `${shortSymbol.symbol}${formattedAmount}`
    : `${formattedAmount}${shortSymbol.symbol}`;

  return `${negativeMatch}${formattedWithSymbol.replace(negativeMatch, "")}`;
}

const currencyDecimalPlaces = new Map([
  ["AED", 2],
  ["AFN", 2],
  ["ALL", 2],
  ["AMD", 2],
  ["ANG", 2],
  ["AOA", 2],
  ["ARS", 2],
  ["AUD", 2],
  ["AWG", 2],
  ["AZN", 2],
  ["BAM", 2],
  ["BBD", 2],
  ["BDT", 2],
  ["BGN", 2],
  ["BHD", 3],
  ["BIF", 0],
  ["BMD", 2],
  ["BND", 2],
  ["BOB", 2],
  ["BOV", 2],
  ["BRL", 2],
  ["BSD", 2],
  ["BTN", 2],
  ["BWP", 2],
  ["BYN", 2],
  ["BYR", 0],
  ["BZD", 2],
  ["CAD", 2],
  ["CDF", 2],
  ["CHE", 2],
  ["CHF", 2],
  ["CHW", 2],
  ["CLF", 4],
  ["CLP", 0],
  ["CNY", 2],
  ["COP", 2],
  ["COU", 2],
  ["CRC", 2],
  ["CUC", 2],
  ["CUP", 2],
  ["CVE", 2],
  ["CZK", 2],
  ["DJF", 0],
  ["DKK", 2],
  ["DOP", 2],
  ["DZD", 2],
  ["EGP", 2],
  ["ERN", 2],
  ["ETB", 2],
  ["EUR", 2],
  ["FJD", 2],
  ["FKP", 2],
  ["GBP", 2],
  ["GEL", 2],
  ["GHS", 2],
  ["GIP", 2],
  ["GMD", 2],
  ["GNF", 0],
  ["GTQ", 2],
  ["GYD", 2],
  ["HKD", 2],
  ["HNL", 2],
  ["HRK", 2],
  ["HTG", 2],
  ["HUF", 2],
  ["IDR", 2],
  ["ILS", 2],
  ["INR", 2],
  ["IQD", 3],
  ["IRR", 2],
  ["ISK", 0],
  ["JEP", 2],
  ["JMD", 2],
  ["JOD", 3],
  ["JPY", 0],
  ["KES", 2],
  ["KGS", 2],
  ["KHR", 2],
  ["KMF", 0],
  ["KPW", 2],
  ["KRW", 0],
  ["KWD", 3],
  ["KYD", 2],
  ["KZT", 2],
  ["LAK", 2],
  ["LBP", 2],
  ["LKR", 2],
  ["LRD", 2],
  ["LSL", 2],
  ["LYD", 3],
  ["MAD", 2],
  ["MDL", 2],
  ["MGA", 2],
  ["MKD", 2],
  ["MMK", 2],
  ["MNT", 2],
  ["MOP", 2],
  ["MRO", 5],
  ["MUR", 2],
  ["MVR", 2],
  ["MWK", 2],
  ["MXN", 2],
  ["MXV", 2],
  ["MYR", 2],
  ["MZN", 2],
  ["NAD", 2],
  ["NGN", 2],
  ["NIO", 2],
  ["NOK", 2],
  ["NPR", 2],
  ["NZD", 2],
  ["OMR", 3],
  ["PAB", 2],
  ["PEN", 2],
  ["PGK", 2],
  ["PHP", 2],
  ["PKR", 2],
  ["PLN", 2],
  ["PYG", 0],
  ["QAR", 2],
  ["RON", 2],
  ["RSD", 2],
  ["RUB", 2],
  ["RWF", 0],
  ["SAR", 2],
  ["SBD", 2],
  ["SCR", 2],
  ["SDG", 2],
  ["SEK", 2],
  ["SGD", 2],
  ["SHP", 2],
  ["SLL", 2],
  ["SOS", 2],
  ["SRD", 2],
  ["SSP", 2],
  ["STD", 2],
  ["STN", 2],
  ["SVC", 2],
  ["SYP", 2],
  ["SZL", 2],
  ["THB", 2],
  ["TJS", 2],
  ["TMT", 2],
  ["TND", 3],
  ["TOP", 2],
  ["TRY", 2],
  ["TTD", 2],
  ["TWD", 2],
  ["TZS", 2],
  ["UAH", 2],
  ["UGX", 0],
  ["USD", 2],
  ["USN", 2],
  ["UYI", 0],
  ["UYU", 2],
  ["UYW", 4],
  ["UZS", 2],
  ["VED", 2],
  ["VEF", 2],
  ["VES", 2],
  ["VND", 0],
  ["VUV", 0],
  ["WST", 2],
  ["XAF", 0],
  ["XAG", 0],
  ["XAU", 0],
  ["XBA", 0],
  ["XBB", 0],
  ["XBC", 0],
  ["XBD", 0],
  ["XCD", 2],
  ["XDR", 0],
  ["XOF", 0],
  ["XPD", 0],
  ["XPF", 0],
  ["XPT", 0],
  ["XSU", 0],
  ["XTS", 0],
  ["XUA", 0],
  ["YER", 2],
  ["ZAR", 2],
  ["ZMW", 2],
  ["ZWL", 2],
]);
