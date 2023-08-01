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
} from "@shopify/react-i18n";

const CURRENCIES = Object.values(CurrencyCode);

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

function renderI18next(lng: string, callback: (t: TFunction) => ReactNode) {
  const i18n = i18next.createInstance();
  i18n.use(initReactI18next);
  i18n.init({
    resources: {
      fallback: {
        translation: {
          currency: "{{val, currency}}",
          number: "{{val, number}}",
          percentage: '{{val, number(style: "percent")}}',
          datetime: "{{val, datetime}}",
        },
      },
    },
    fallbackLng: "fallback",
    lng,
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
      test.each([0, -1, -123.456, 123.456, 1234567890])("simple [%d]", (val) => {
        const result = renderI18next(locale, (t) => t("number", { val }));
        const expected = renderShopify(locale, (i18n) =>
          i18n.formatNumber(val)
        );
        expect(result).toEqual(expected);
      });

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

      test
    });
  });

  describe("formatCurrency", () => {
    test.each(CURRENCIES)('currency [%s]', (currency) => {
      const val = 123456789.123456;
      const result = renderI18next(locale, (t) => t("currency", {val, formatParams: {val: {currency}}}));
      const expected = renderShopify(locale, (i18n) => i18n.formatCurrency(val,  {currency}));
      expect(result).toEqual(expected);
    })
  });

  test.todo("formatPercentage");
  test.todo("formatDate");
  test.todo("formatName");

  test.todo("unformatNumber");
  test.todo("unformatCurrency");

  test.todo("weekStartDay");
  test.todo("getCurrencySymbol");
  test.todo("ordinal");
  test.todo("numberSymbols");
});

// Not used in shopify/web
test.skip("hasEasternNameOrderFormatter", () => {});
// Not used in shopify/web
test.skip("identifyScripts", () => {});
// Not used in shopify/web
test.skip("identifyScript", () => {});
