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
  ordinal,
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
  // "cs",
  // "da",
  // "de",
  "es",
  "en",
  // "fi",
  // "fr",
  // "it",
  // "ja",
  // "ko",
  // "nb",
  // "nl",
  // "pl",
  // "pt-BR",
  // "pt-PT",
  // "sv",
  // "th",
  // "tr",
  // "vi",
  // "zh-CN",
  // "zh-TW",
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

const ordinal_locales = {
  "cs": {
    "translation": {
      "key_ordinal_one": "{{amount}}.",
      "key_ordinal_two": "{{amount}}.",
      "key_ordinal_few": "{{amount}}.",
      "key_ordinal_other": "{{amount}}."
    }
  },
  "da": {
    "translation": {
      "key_ordinal_one": "{{amount}}.",
      "key_ordinal_two": "{{amount}}.",
      "key_ordinal_few": "{{amount}}.",
      "key_ordinal_other": "{{amount}}."
    }
  },
  "de": {
    "translation": {
      "key_ordinal_one": "{{amount}}.",
      "key_ordinal_two": "{{amount}}.",
      "key_ordinal_few": "{{amount}}.",
      "key_ordinal_other": "{{amount}}."
    }
  },
  "en": {
    "translation": {
      "hello": "hello world",
      "key_ordinal_one": "{{amount}}st",
      "key_ordinal_two": "{{amount}}nd",
      "key_ordinal_few": "{{amount}}rd",
      "key_ordinal_other": "{{amount}}th"
    }
  },
  "es": {
    "translation": {
      "hello": "hola mondo",
      "key_ordinal_one": "{{amount}}ro",
      "key_ordinal_two": "{{amount}}do",
      "key_ordinal_few": "{{amount}}ro",
      "key_ordinal_other": "{{amount}}to"
    }
  },
  "fi": {
    "translation": {
    "key_ordinal_one": "{{amount}}.",
    "key_ordinal_two": "{{amount}}.",
    "key_ordinal_few": "{{amount}}.",
    "key_ordinal_other": "{{amount}}."
    }
  },
  "fr": {
    "translation": {
    "key_ordinal_one": "{{amount}}er",
    "key_ordinal_two": "{{amount}}e",
    "key_ordinal_few": "{{amount}}e",
    "key_ordinal_other": "{{amount}}e"
    }
  },
  "it": {
    "translation": {
    "key_ordinal_one": "{{amount}}°",
    "key_ordinal_two": "{{amount}}°",
    "key_ordinal_few": "{{amount}}°",
    "key_ordinal_other": "{{amount}}°"
    }
  },
  "ja": {
    "translation": {
    "key_ordinal_one": "{{amount}}番目",
    "key_ordinal_two": "{{amount}}番目",
    "key_ordinal_few": "{{amount}}番目",
    "key_ordinal_other": "{{amount}}番目"
    }
  },
  "ko": {
    "translation": {
    "key_ordinal_one": "{{amount}}번째",
    "key_ordinal_two": "{{amount}}번째",
    "key_ordinal_few": "{{amount}}번째",
    "key_ordinal_other": "{{amount}}번째"
    }
  },
  "nb": {
    "translation": {
    "key_ordinal_one": "{{amount}}.",
    "key_ordinal_two": "{{amount}}.",
    "key_ordinal_few": "{{amount}}.",
    "key_ordinal_other": "{{amount}}."
    }
  },
  "nl": {
    "translation": {
    "key_ordinal_one": "{{amount}}ste",
    "key_ordinal_two": "{{amount}}e",
    "key_ordinal_few": "{{amount}}e",
    "key_ordinal_other": "{{amount}}de"
    }
  },
  "pl": {
    "translation": {
    "key_ordinal_one": "{{amount}}.",
    "key_ordinal_two": "{{amount}}.",
    "key_ordinal_few": "{{amount}}.",
    "key_ordinal_other": "{{amount}}."
    }
  },
  "pt-BR": {
    "translation": {
    "key_ordinal_one": "{{amount}}º",
    "key_ordinal_two": "{{amount}}º",
    "key_ordinal_few": "{{amount}}º",
    "key_ordinal_other": "{{amount}}º"
    }
  },
  "pt-PT": {
    "translation": {
    "key_ordinal_one": "{{amount}}.º",
    "key_ordinal_two": "{{amount}}.º",
    "key_ordinal_few": "{{amount}}.º",
    "key_ordinal_other": "{{amount}}.º"
    }
  },
  "sv": {
    "translation": {
    "key_ordinal_one": "{{amount}}",
    "key_ordinal_two": "{{amount}}",
    "key_ordinal_few": "{{amount}}",
    "key_ordinal_other": "{{amount}}:e"
    }
  },
  "th": {
    "translation": {
    "key_ordinal_one": "{{amount}}",
    "key_ordinal_two": "{{amount}}",
    "key_ordinal_few": "{{amount}}",
    "key_ordinal_other": "{{amount}}"
    }
  },
  "tr": {
    "translation": {
    "key_ordinal_one": "{{amount}}.",
    "key_ordinal_two": "{{amount}}.",
    "key_ordinal_few": "{{amount}}.",
    "key_ordinal_other": "{{amount}}."
    }
  },
  "vi": {
    "translation": {
    "key_ordinal_one": "{{amount}}.",
    "key_ordinal_two": "{{amount}}.",
    "key_ordinal_few": "{{amount}}.",
    "key_ordinal_other": "{{amount}}."
    }
  },
  "zh-CN": {
    "translation": {
    "key_ordinal_one": "{{amount}}.",
    "key_ordinal_two": "{{amount}}.",
    "key_ordinal_few": "{{amount}}.",
    "key_ordinal_other": "{{amount}}."
    }
  },
  "zh-TW": {
    "translation": {
    "key_ordinal_one": "{{amount}}.",
    "key_ordinal_two": "{{amount}}.",
    "key_ordinal_few": "{{amount}}.",
    "key_ordinal_other": "{{amount}}."
    }
  }
};

const initialTranslations: {[key: string]: any} = {
  "cs": {
    "ordinal": {
      "one": "{amount}.",
      "two": "{amount}.",
      "few": "{amount}.",
      "other": "{amount}."
    }
  },
  "da": {
    "ordinal": {
      "one": "{amount}.",
      "two": "{amount}.",
      "few": "{amount}.",
      "other": "{amount}."
    }
  },
  "de": {
    "ordinal": {
      "one": "{amount}.",
      "two": "{amount}.",
      "few": "{amount}.",
      "other": "{amount}."
    }
  },
  "en": {
    "hello": "hello world",
    "ordinal": {
      "one": "{amount}st",
      "two": "{amount}nd",
      "few": "{amount}rd",
      "other": "{amount}th"
    }
  },
  "es": {
    "hello": "hola mondo",
    "ordinal": {
      "one": "{amount}ro",
      "two": "{amount}do",
      "few": "{amount}ro",
      "other": "{amount}to"
    }
  },
  "fi": {
    "ordinal": {
      "one": "{amount}.",
      "two": "{amount}.",
      "few": "{amount}.",
      "other": "{amount}."
    }
  },
  "fr": {
    "ordinal": {
      "one": "{amount}er",
      "two": "{amount}e",
      "few": "{amount}e",
      "other": "{amount}e"
    }
  },
  "it": {
    "ordinal": {
      "one": "{amount}°",
      "two": "{amount}°",
      "few": "{amount}°",
      "other": "{amount}°"
    }
  },
  "ja": {
    "ordinal": {
      "one": "{amount}番目",
      "two": "{amount}番目",
      "few": "{amount}番目",
      "other": "{amount}番目"
    }
  },
  "ko": {
    "ordinal": {
      "one": "{amount}번째",
      "two": "{amount}번째",
      "few": "{amount}번째",
      "other": "{amount}번째"
    }
  },
  "nb": {
    "ordinal": {
      "one": "{amount}.",
      "two": "{amount}.",
      "few": "{amount}.",
      "other": "{amount}."
    }
  },
  "nl": {
    "ordinal": {
      "one": "{amount}ste",
      "two": "{amount}e",
      "few": "{amount}e",
      "other": "{amount}de"
    }
  },
  "pl": {
    "ordinal": {
      "one": "{amount}.",
      "two": "{amount}.",
      "few": "{amount}.",
      "other": "{amount}."
    }
  },
  "pt-BR": {
    "ordinal": {
      "one": "{amount}º",
      "two": "{amount}º",
      "few": "{amount}º",
      "other": "{amount}º"
    }
  },
  "pt-PT": {
    "ordinal": {
      "one": "{amount}.º",
      "two": "{amount}.º",
      "few": "{amount}.º",
      "other": "{amount}.º"
    }
  },
  "sv": {
    "ordinal": {
      "one": "{amount}",
      "two": "{amount}",
      "few": "{amount}",
      "other": "{amount}:e"
    }
  },
  "th": {
    "ordinal": {
      "one": "{amount}",
      "two": "{amount}",
      "few": "{amount}",
      "other": "{amount}"
    }
  },
  "tr": {
    "ordinal": {
      "one": "{amount}.",
      "two": "{amount}.",
      "few": "{amount}.",
      "other": "{amount}."
    }
  },
  "vi": {
    "ordinal": {
      "one": "{amount}",
      "two": "{amount}",
      "few": "{amount}",
      "other": "{amount}"
    }
  },
  "zh-CN": {
    "ordinal": {
      "one": "第 {amount}",
      "two": "第 {amount}",
      "few": "第 {amount}",
      "other": "第 {amount}"
    }
  },
  "zh-TW": {
    "ordinal": {
      "one": "第 {amount}",
      "two": "第 {amount}",
      "few": "第 {amount}",
      "other": "第 {amount}"
    }
  }
};

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
      ...ordinal_locales
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
  const i18n = new I18nManager({ locale }, initialTranslations[locale]);
  function Component() {
    const [i18n] = useI18n({
      fallback: initialTranslations['en'],
      id: 'Component',
      translations(locale) {
        return initialTranslations[locale]
      }
    });
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

  describe("ordinal", () => {
    test.each([1,2,3,4])("ordinal [%d]", (val) => {
      const result = renderI18next(locale, (t) =>
        t('key', { count: val, ordinal: true })
      );

      console.log(result)

      const expected = renderShopify(locale, (i18n) =>
        i18n.ordinal(val)
      );
      expect(result).toEqual(expected);
    });
  });

  // Create utility to replace
  test.skip("getCurrencySymbol", () => {});
  test.skip("numberSymbols", () => {});

  // Only used in few spots in web
  test.skip("unformatNumber", () => {});
  test.skip("unformatCurrency", () => {});
});

// Not used in shopify/web
test.skip("abbreviateName", () => {});
// Not used in shopify/web
test.skip("hasEasternNameOrderFormatter", () => {});
// Not used in shopify/web
test.skip("identifyScripts", () => {});
// Not used in shopify/web
test.skip("identifyScript", () => {});
