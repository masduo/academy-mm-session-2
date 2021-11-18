export const leapYear = (year: number): boolean => {
  if (isNaN(year)) throw new TypeError("input is not a number!");

  return (
    (isCommonLeapYear(year) && year % 100 != 0) ||
    (isCommonLeapYear(year) && year % 100 === 0 && year % 400 === 0)
  );
};

const isCommonLeapYear = (year: number): boolean => year % 4 === 0;

const leapYear_ = (year: number): boolean =>
  year % 4 === 0 && (year % 100 != 0 || (year % 100 === 0 && year % 400 === 0));
