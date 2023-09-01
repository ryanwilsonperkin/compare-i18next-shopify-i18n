export type TranslationDictionary = {[key: string]: string | TranslationDictionary}

const isObjectEmpty = (objectName: any) => {
    return JSON.stringify(objectName) === "{}";
  };

export function translationConverter(translationBundle: TranslationDictionary) {
    const newTranslationbundle: TranslationDictionary = {};

    for (const key in translationBundle) {
        const inner = translationBundle[key];
        if (typeof inner === "object") {
            for (const key2 in inner) {
                if (key2 === "one" || key2 === "two" || key2 === "few" || key2 === "other") {
                    const originalString = inner[key2] as string;
                    const modifiedString = originalString.replace(/\bamount\b/g, 'count');
                    newTranslationbundle[`${key}_${key2}`] = modifiedString;
                }
            }
            newTranslationbundle[key] = translationConverter(inner);
        } else {
            newTranslationbundle[key] = inner;
        }
    }
  
    return newTranslationbundle;
}

export function translationNamespaceAdder(translationBundle: TranslationDictionary) {
    const newTranslationbundle: TranslationDictionary = {};
    for (const locale in translationBundle) {
        newTranslationbundle[locale] = {
            translation: translationBundle[locale],
          };
    }

    return newTranslationbundle;
}
