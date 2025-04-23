# accounting-number

## Overview

`accounting-number` is a utility library that provides various functions for formatting numbers and converting between different numeral systems and languages. It is designed to assist in accounting-related tasks by offering easy-to-use and efficient methods for number manipulation and conversion.

## Features

- **Number Formatting:** Format numbers with suffixes like K, M, B, T for large numbers or add commas as thousand separators.
- **Numeral Conversion:** Convert numbers between Arabic and Khmer numeral systems.
- **Month Mapping:** Map numbers or English month names to corresponding Khmer month names.
- **Base64 Conversion:** Convert text to Base64 encoding and vice versa.

## Installation

```bash
npm install accounting-number
```

## Usage

```javascript
import { accounting } from 'accounting-number';

// Format a number with a suffix
const formattedNumber = accounting.suffixFormatNumber(1234567);

// Convert Arabic numerals to Khmer
const khmerNumerals = accounting.mapArabicToKhmer('1234567');

// Format number with commas
const commaFormatted = accounting.commaFormatNumber(2234567);

// Convert English month to Khmer
const khmerMonth = accounting.mapEnglishToKhmerMonth('January');

// Convert text to Base64
const base64Text = accounting.conversionTextToBase64('Hello');
```

## License

This project is licensed under the ISC License.