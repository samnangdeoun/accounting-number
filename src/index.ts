import { suffixFormatNumber, commaFormatNumber } from './format/format';
import { mapArabicToKhmer, mapEnglishToKhmerMonth, mapNumberToKhmerMonth } from './mapping/mapping';
import { conversionBase64ToText, conversionTextToBase64 } from './conversion/conversion';

export const accounting = {
    // FORMAT
    suffixFormatNumber: suffixFormatNumber,
    commaFormatNumber: commaFormatNumber,

    // CONVERSION
    conversionBase64ToText: conversionBase64ToText,
    conversionTextToBase64: conversionTextToBase64,

    // MAPPING
    mapArabicToKhmer: mapArabicToKhmer,
    mapEnglishToKhmerMonth: mapEnglishToKhmerMonth,
    mapNumberToKhmerMonth: mapNumberToKhmerMonth
}