// test/accounting.test.ts
import { describe, it, expect } from 'vitest';
import { accounting } from '../src';

describe('accounting utils', () => {
  it('suffixFormatNumber should format properly', () => {
    expect(accounting.suffixFormatNumber(1234567)).toBe('1.23M');
  });

  it('convertArabicToKhmer should convert properly', () => {
    expect(accounting.mapArabicToKhmer('1234567')).toBe('១២៣៤៥៦៧');
  });

  it('convertArabicToKhmer should convert properly', () => {
    expect(accounting.commaFormatNumber('2234567')).toBe('2,234,567');
  });

  it('convert Number to English Month', () => {
    expect(accounting.mapNumberToKhmerMonth(1, 'en')).toBe('January');
  });

  it('convert English to Khmer Month', () => {
    expect(accounting.mapEnglishToKhmerMonth('January')).toBe('មករា');
  });

  it("convert Text to Base64", () => {
    expect(accounting.conversionTextToBase64('Hello')).toBe('SGVsbG8=');
  });

  it("convert Base64 to Text", () => {
    expect(accounting.conversionBase64ToText('SGVsbG8=')).toBe('Hello');
  });
  
});
