import dayjs from 'dayjs';
import {
  HOURS_FORMAT_PATTERN,
  PHONE_NUMBER_PATTERN,
  VN_DATE_FORMAT_PATTERN,
  VN_TIME_DATE_FORMAT_PATTERN,
} from '@/config/rules';

export const displayValue = (value: any): string => {
  return value || '-';
};

export const displayTime = (time: string | Date, format: string = HOURS_FORMAT_PATTERN): string => {
  return time ? dayjs(time).format(format) : '-';
};

export const displayDate = (
  date: string | Date,
  format: string = VN_DATE_FORMAT_PATTERN
): string => {
  return date ? dayjs(date).format(format) : '-';
};

export const displayDateTime = (
  date: string | Date,
  format: string = VN_TIME_DATE_FORMAT_PATTERN
): string => {
  return date ? dayjs(date).format(format) : '-';
};

export const displayPhone = (phoneNumber: string | number | undefined | null): string => {
  if (phoneNumber === undefined || phoneNumber === null) {
    return '-';
  }
  const cleanedPhoneNumber = phoneNumber.toString().replace(/\D/g, '');
  const formattedPhoneNumber = cleanedPhoneNumber.replace(PHONE_NUMBER_PATTERN, '$1 $2 $3');
  return formattedPhoneNumber;
};

export const displayNumber = (number: string | number | null | undefined): string => {
  if (!number) {
    return '0';
  }
  const num = typeof number === 'string' ? parseInt(number.toString(), 10) : number;
  return num?.toLocaleString('en-US');
};

export const displayDimension = (
  dimension: { length: number; width: number; height: number } | null | undefined
): string => {
  if (!dimension) {
    return '-';
  }
  return `${dimension?.length} x ${dimension?.width} x ${dimension?.height}`;
};
