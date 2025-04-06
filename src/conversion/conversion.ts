import { arabicToKhmerMap } from "../mapping/mapping";


/**
 * Convert Arabic numerals to Khmer numerals.
 * @param arabicNumber - A string representing an Arabic numeral.
 * @returns A string representing the equivalent Khmer numeral.
 */
export function convertArabicToKhmer(arabicNumber: string): string {
    return arabicNumber.split('').map(digit => arabicToKhmerMap[digit] || digit).join('');
}