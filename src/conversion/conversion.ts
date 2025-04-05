import { arabicToKhmerMap } from "../mapping/mapping";

export function convertArabicToKhmer(arabicNumber: string): string {
    return arabicNumber.split('').map(digit => arabicToKhmerMap[digit] || digit).join('');
}