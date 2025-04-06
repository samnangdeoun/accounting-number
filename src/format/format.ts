/**
 * Format a number with a suffix of K, M, B, T for thousands, millions, billions and trillions.
 * @param number - The number to be formatted.
 * @param precision - The number of decimal places to round to (default is 2).
 * @returns A string representing the formatted number.
 */
export const suffixFormatNumber = (number: number, precision = 2): string => {
    const map: {
        suffix: string;
        threshold: number;
    }[] = [
        { suffix: 'T', threshold: 1e12 },
        { suffix: 'B', threshold: 1e9 },
        { suffix: 'M', threshold: 1e6 },
        { suffix: 'K', threshold: 1e3 },
        { suffix: '', threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(number) >= x.threshold);
    if (found) {
        const formatted = (number / found.threshold).toFixed(precision) + found.suffix;

        return formatted;
    }
    return number.toString();
};

/**
 * Format a number for accounting purposes.
 * @param value - The number to be formatted, or a string representing a number.
 * @returns A string representing the formatted number.
 */
export function commaFormatNumber(value: number | string): string {
    let numericValue: number;

    if (typeof value === 'number') {
        numericValue = value;
    } else {
        numericValue = parseFloat(value);
        if (isNaN(numericValue)) return value.toString();
    }

    if (isNaN(numericValue) || numericValue === Infinity) {
        return '';
    }

    const formatted = Math.abs(numericValue).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return numericValue < 0 ? `(${formatted})` : formatted;
}
