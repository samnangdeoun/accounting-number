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

