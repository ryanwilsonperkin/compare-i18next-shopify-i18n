import { CurrencyCode } from "@shopify/react-i18n";
import { getShortCurrencySymbol } from "./formatCurrency";

export function getCurrencySymbol(currency: CurrencyCode, locale: string) {
  if (currency == null) {
    throw new MissingCurrencyCodeError(
      "formatCurrency cannot be called without a currency code."
    );
  }

  console.log (getShortCurrencySymbol(currency, locale));
  return getShortCurrencySymbol(currency, locale);
}

export class MissingCurrencyCodeError extends Error {
  constructor(additionalMessage = "") {
    const baseErrorMessage = "No currency code provided.";
    super(
      additionalMessage === ""
        ? baseErrorMessage
        : `${baseErrorMessage} ${additionalMessage}`
    );
  }
}
