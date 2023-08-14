import React, { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import i18next, { TFunction } from "i18next";
import {
  initReactI18next,
  I18nextProvider as I18nextProvider,
  useTranslation,
} from "react-i18next";
import {
  I18nContext as ShopifyI18nContext,
  I18nManager,
  I18n,
  useI18n,
  CurrencyCode,
  DateStyle,
} from "@shopify/react-i18n";
import {
  formatCurrency,
  formatName,
  dateStyleOptions,
  weekStartDay,
} from "./formatFunctions";

const CURRENCIES = Object.values(CurrencyCode);

function crossProduct(arr1: any, arr2: any) {
  const result = [];
  for (const a of arr1) {
    for (const b of arr2) {
      const product = { date: a, style: b };
      result.push(product);
    }
  }
  return result;
}

// ref: translation-platform
// Complete list of locales to test against because we use them in Web
const LOCALES = [
  "cs",
  "da",
  "de",
  "es",
  "fi",
  "fr",
  "it",
  "ja",
  "ko",
  "nb",
  "nl",
  "pl",
  "pt-BR",
  "pt-PT",
  "sv",
  "th",
  "tr",
  "vi",
  "zh-CN",
  "zh-TW",
];

// ref: from WEEK_START_DAYS map in packages/react-i18n/src/constants/index.ts in web
// List of countries
const COUNTRIES = [
  "AE",
  "AF",
  "BH",
  "DZ",
  "EG",
  "IQ",
  "IR",
  "JO",
  "KW",
  "LY",
  "OM",
  "QA",
  "SA",
  "SY",
  "YE",
  "AR",
  "BO",
  "BR",
  "BZ",
  "CA",
  "CL",
  "CO",
  "CR",
  "DO",
  "EC",
  "GT",
  "HK",
  "HN",
  "IL",
  "JM",
  "JP",
  "KE",
  "KR",
  "MO",
  "MX",
  "NI",
  "PA",
  "PE",
  "PH",
  "SG",
  "SV",
  "TW",
  "US",
  "VE",
  "ZA",
  "ZW",
  "AD",
  "AL",
  "AM",
  "AU",
  "AZ",
  "BE",
  "BG",
  "BN",
  "BY",
  "CH",
  "CN",
  "CZ",
  "DE",
  "DK",
  "EE",
  "ES",
  "FI",
  "FR",
  "GB",
  "GE",
  "GF",
  "GR",
  "HR",
  "HU",
  "ID",
  "IE",
  "IN",
  "IS",
  "IT",
  "KG",
  "KZ",
  "LB",
  "LT",
  "LU",
  "LV",
  "MA",
  "MC",
  "MK",
  "MN",
  "MY",
  "NL",
  "NO",
  "NZ",
  "PK",
  "PL",
  "PT",
  "PY",
  "RO",
  "RS",
  "RU",
  "SE",
  "SK",
  "TH",
  "TN",
  "TR",
  "UA",
  "UY",
  "UZ",
  "VN",
  "XK",
];

function renderI18next(lng: string, callback: (t: TFunction) => ReactNode) {
  const i18n = i18next.createInstance();
  i18n.use(initReactI18next);
  i18n.init({
    resources: {
      fallback: {
        translation: {
          currency: "{{val, formatCurrency(currency: currency)}}",
          number: "{{val, number}}",
          percent: "{{val, number(style: 'percent')}}",
          datetime: "{{val, datetime}}",
          name: "{{val, formatName}}",
          weekStartDay: "{{val, weekStartDay}}",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "fallback",
    lng,
  });

  i18n.services.formatter?.add(
    "formatCurrency",
    (val, locale, { currency = "USD" }) => {
      return formatCurrency(val, locale as string, currency);
    }
  );

  i18n.services.formatter?.add("formatName", (val, locale) => {
    return formatName(val, locale as string);
  });

  i18n.services.formatter?.add("weekStartDay", (country) => {
    return weekStartDay(country);
  });

  function Component() {
    const { t } = useTranslation();
    return callback(t);
  }
  return renderToString(
    <I18nextProvider i18n={i18n}>
      <Component />
    </I18nextProvider>
  );
}

function renderShopify(locale: string, callback: (i18n: I18n) => ReactNode) {
  const i18n = new I18nManager({ locale });
  function Component() {
    const [i18n] = useI18n();
    return callback(i18n);
  }
  return renderToString(
    <ShopifyI18nContext.Provider value={i18n}>
      <Component />
    </ShopifyI18nContext.Provider>
  );
}

describe.each(LOCALES)("locale: %s", (locale) => {
  test.todo("translate");

  describe("formatNumber", () => {
    describe("as: number", () => {
      test.each([0, -1, -123.456, 123.456, 1234567890])(
        "simple [%d]",
        (val) => {
          const result = renderI18next(locale, (t) => t("number", { val }));
          const expected = renderShopify(locale, (i18n) =>
            i18n.formatNumber(val)
          );
          expect(result).toEqual(expected);
        }
      );

      test.each([0, 1, 2, 3, 4, 5, 6, 7])("precision [%d]", (precision) => {
        const val = 123.456789;
        const result = renderI18next(locale, (t) =>
          t("number", {
            val,
            formatParams: { val: { maximumFractionDigits: precision } },
          })
        );
        const expected = renderShopify(locale, (i18n) =>
          i18n.formatNumber(val, { precision })
        );
        expect(result).toEqual(expected);
      });

      test;
    });
  });

  // NOTE: doesn't cover "form" option
  describe("formatCurrency", () => {
    test.each(CURRENCIES)("currency [%s]", (currency) => {
      const val = 123456789.123456;
      const result = renderI18next(locale, (t) =>
        t("currency", { val, formatParams: { val: { currency } } })
      );
      const expected = renderShopify(locale, (i18n) =>
        i18n.formatCurrency(val, { currency })
      );
      expect(result).toEqual(expected);
    });
  });

  describe("formatPercentage", () => {
    test.each([0, 0.5, -0.75, 100, 0, 10000])("percentage [%d]", (val) => {
      const result = renderI18next(locale, (t) => t("percent", { val }));
      const expected = renderShopify(locale, (i18n) =>
        i18n.formatPercentage(val)
      );
      expect(result).toEqual(expected);
    });
  });

  describe("formatDate", () => {
    const dates = [
      new Date(),
      new Date(Date.now() - 3 * 60 * 1000),
      new Date(Date.now() - 4 * 60 * 60 * 1000),
      new Date(2022, 0, 1, 10, 35),
      new Date(Date.now() - 24 * 60 * 60 * 1000),
      new Date(2022, 0, 7, 10, 35),
      new Date(2022, 11, 20, 10, 35),
      new Date(2012, 11, 20, 10, 35),
    ];

    const styles = [
      DateStyle.Long,
      DateStyle.Short,
      DateStyle.Time,
      // DateStyle.Humanize, //Need to write custom function + translation keys
      // DateStyle.DateTime,
      undefined,
    ];

    const product = crossProduct(dates, styles);

    test.each(product)("datetime [%s]", (product) => {
      const date = product.date;
      const style = product.style;

      const result = renderI18next(locale, (t) =>
        t("datetime", {
          val: date,
          formatParams: {
            val: dateStyleOptions(date, style),
          },
        })
      );
      const expected = renderShopify(locale, (i18n) =>
        i18n.formatDate(date, {
          style,
        })
      );

      expect(result).toEqual(expected);
    });
  });

  describe("formatName", () => {
    test.each([
      { firstName: "John", lastName: "Smith" },
      { firstName: "John", lastName: "Smith", options: { full: true } },
      { firstName: "", lastName: "Smith" },
      { firstName: "", lastName: "Smith", options: { full: true } },
      { firstName: "John", lastName: "" },
      { firstName: "John", lastName: "", options: { full: true } },
    ])("name [%s]", (name) => {
      const result = renderI18next(locale, (t) => t("name", { val: name }));
      const expected = renderShopify(locale, (i18n) =>
        i18n.formatName(name.firstName, name.lastName, name.options)
      );
      expect(result).toEqual(expected);
    });
  });

  describe("weekStartDay", () => {
    test.each(COUNTRIES)("weekStartDay [%s]", (country) => {
      const result = renderI18next(locale, (t) =>
        t("weekStartDay", { val: country })
      );
      const expected = renderShopify(locale, (i18n) =>
        i18n.weekStartDay(country)
      );
      expect(result).toEqual(expected);
    });
  });

  test.todo("getCurrencySymbol");
  test.todo("ordinal");
  test.todo("numberSymbols");

  // Only used in few spots in web
  test.skip("unformatNumber", () => {});
  test.skip("unformatCurrency", () => {});
});

// Not used in shopify/web
test.skip("hasEasternNameOrderFormatter", () => {});
// Not used in shopify/web
test.skip("identifyScripts", () => {});
// Not used in shopify/web
test.skip("identifyScript", () => {});
