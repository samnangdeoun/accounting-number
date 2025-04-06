import { suffixFormatNumber, commaFormatNumber } from './format/format';
import { convertArabicToKhmer } from './conversion/conversion';

export const accounting = {
    // FORMAT
    suffixFormatNumber: suffixFormatNumber,
    commaFormatNumber: commaFormatNumber,

    // CONVERSION
    convertArabicToKhmer: convertArabicToKhmer
}