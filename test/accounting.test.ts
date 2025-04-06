// test/accounting.test.ts
import { describe, it, expect } from 'vitest';
import { accounting } from '../src';

describe('accounting utils', () => {
  it('suffixFormatNumber should format properly', () => {
    expect(accounting.suffixFormatNumber(1234567)).toBe('1.23M');
  });

  it('convertArabicToKhmer should convert properly', () => {
    expect(accounting.convertArabicToKhmer('1234567')).toBe('១២៣៤៥៦៧');
  });

  it('convertArabicToKhmer should convert properly', () => {
    expect(accounting.commaFormatNumber('2234567')).toBe('2,234,567');
  });
});
