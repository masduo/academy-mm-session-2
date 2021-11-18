import { leapYear } from "../main/leap-year";

describe("Leap Year", () => {
  it("should return true for 1996", () => {
    expect(leapYear(1996)).toBe(true);
  });

  it("should return false for 2001", () => {
    expect(leapYear(2001)).toBe(false);
  });

  it("should return false for 1900", () => {
    expect(leapYear(1900)).toBe(false);
  });

  it("should return true for 2000", () => {
    expect(leapYear(2000)).toBe(true);
  });

  it("should throw exception for NaN", () => {
    expect(() => leapYear(NaN)).toThrowError(/^input is not a number!$/);
  });
});

/*
Write a function that
    returns true or false depending on whether its
    input integer is a leap year or not.

A leap year is defined as one that is divisible by 4,
but is not otherwise divisible by 100
unless it is also divisible by 400.

For example,
    2001 is a typical common year and >     not divisible by 4
    1996 is a typical leap year, whereas    divisible by 4
    1900 is an atypical common year and     divisible by 100
    2000 is an atypical leap year.          divisible by 100 and 400
*/
