import { memoize } from "@shopify/function-enhancers";

export const numberSymbols = memoize(() => {
//   const formattedNumber = formatNumber(123456.7, {
//     maximumFractionDigits: 1,
//     minimumFractionDigits: 1,
//   });
  let thousandSymbol;
  let decimalSymbol;
//   for (const char of formattedNumber) {
//     if (isNaN(parseInt(char, 10))) {
//       if (thousandSymbol) decimalSymbol = char;
//       else thousandSymbol = char;
//     }
//   }
  return { thousandSymbol, decimalSymbol };
});
