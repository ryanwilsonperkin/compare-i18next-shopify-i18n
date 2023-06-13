import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nContext, I18nManager } from "@shopify/react-i18n";

function createShopifyI18n(locale: string) {
  const manager = new I18nManager({ locale });
  return manager;
}

function createI18next(lng: string) {
  const instance = i18next.createInstance();
  instance.use(initReactI18next);
  instance.init({
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
  return instance;
}

test.todo("translate");

test.todo("formatNumber");
test.todo("formatCurrency");
test.todo("formatPercentage");
test.todo("formatDate");
test.todo("formatName");

test.todo("unformatNumber");
test.todo("unformatCurrency");

test.todo("weekStartDay");
test.todo("getCurrencySymbol");
test.todo("ordinal");
test.todo("numberSymbols");

// Not used in shopify/web
test.skip("hasEasternNameOrderFormatter", () => {});
// Not used in shopify/web
test.skip("identifyScripts", () => {});
// Not used in shopify/web
test.skip("identifyScript", () => {});
