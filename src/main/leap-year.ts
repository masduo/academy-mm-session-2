export const leapYear = (year: number): boolean => {
  if (isNaN(year)) throw new TypeError("input is not a number!");

  return (
    (isTypicalLeapYear(year) && !isATypicalCommonYear(year)) ||
    (isTypicalLeapYear(year) && isATypicalLeapYear(year))
  );
};

const isTypicalLeapYear = (year: number): boolean => year % 4 === 0;

const isATypicalCommonYear = (year: number): boolean => year % 100 === 0;

const isATypicalLeapYear = (year: number): boolean =>
  isATypicalCommonYear(year) && year % 400 === 0;
