export type TranslationDictionary = {[key: string]: string | TranslationDictionary}

const isObjectEmpty = (objectName: any) => {
    return JSON.stringify(objectName) === "{}";
  };

export function translationConverter(translationBundle: TranslationDictionary,) {
    const newTranslationbundle: TranslationDictionary = {};

    for (const key in translationBundle) {
        const inner = translationBundle[key];
        if (typeof inner === "object") {
            const placeholder: TranslationDictionary = {};
            for (const key2 in inner) {
                if (key2 === "one" || key2 === "two" || key2 === "few" || key2 === "other") {
                    const originalString = inner[key2] as string;
                    const modifiedString = originalString.replace(/\bamount\b/g, 'count');
                    placeholder[`${key}_${key2}`] = modifiedString;
                }
            }

            if (!isObjectEmpty(placeholder)) {
                newTranslationbundle["translation"] = placeholder;
            }
            newTranslationbundle[key] = translationConverter(inner);
        } else {
            newTranslationbundle[key] = inner;
        }
    }
  
    return newTranslationbundle;
}
