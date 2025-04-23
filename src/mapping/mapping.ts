import { arabicToKhmerMap, englishToKhmerMonthMap, numberToKhmerMonthMap, numberToEnglishMonthMap } from "../keysObj/keys";

/**
 * Convert Arabic numerals to Khmer numerals.
 * @param arabicNumber - A string representing an Arabic numeral.
 * @returns A string representing the equivalent Khmer numeral.
 */
export function mapArabicToKhmer(arabicNumber: string): string {
    // Splits the Arabic number into individual digits and maps each digit to its Khmer equivalent
    return arabicNumber.split('').map(digit => arabicToKhmerMap[digit] || digit).join('');
}

/**
 * Maps a number to its corresponding Khmer month.
 * @param number - A number representing the month (1-12).
 * @param language - The language to map to. Defaults to English.
 * @returns A string representing the Khmer month, or ' ' if invalid.
 */
export function mapNumberToKhmerMonth(number: number, language: string = 'en'): string {
    return (language === 'en' ? numberToEnglishMonthMap[number] : numberToKhmerMonthMap[number]) || ' ';
}

/**
 * Maps an English month name to its corresponding Khmer month.
 * @param englishMonth - A string representing the English month name.
 * @returns A string representing the Khmer month, or ' ' if invalid.
 */
export function mapEnglishToKhmerMonth(englishMonth: string): string {
    // Returns the Khmer month name based on the provided English month name, defaults to ' ' if not found
    return englishToKhmerMonthMap[englishMonth] || ' ';
}
