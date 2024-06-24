// SPDX-License-Identifier: MIT

/** A mapping of the numbers 1–59 to their English forms. */
const NUMBER_WORDS = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty-one",
  22: "twenty-two",
  23: "twenty-three",
  24: "twenty-four",
  25: "twenty-five",
  26: "twenty-six",
  27: "twenty-seven",
  28: "twenty-eight",
  29: "twenty-nine",
  30: "thirty",
  31: "thirty-one",
  32: "thirty-two",
  33: "thirty-three",
  34: "thirty-four",
  35: "thirty-five",
  36: "thirty-six",
  37: "thirty-seven",
  38: "thirty-eight",
  39: "thirty-nine",
  40: "forty",
  41: "forty-one",
  42: "forty-two",
  43: "forty-three",
  44: "forty-four",
  45: "forty-five",
  46: "forty-six",
  47: "forty-seven",
  48: "forty-eight",
  49: "forty-nine",
  50: "fifty",
  51: "fifty-one",
  52: "fifty-two",
  53: "fifty-three",
  54: "fifty-four",
  55: "fifty-five",
  56: "fifty-six",
  57: "fifty-seven",
  58: "fifty-eight",
  59: "fifty-nine",
}

/** Special words associated with some numbers when telling time. */
const SPECIAL_NUMBER_WORDS = {
  15: "quarter",
  30: "half",
}

/**
 * Given an integer from 1 to 59, returns the English word associated with that integer.
 * @param {number} num The integer to convert into a word.
 * @throws Will throw an error if num is not between 1 and 59, inclusive, or is not an integer.
 * @returns {string} The word associated with the integer.
 */
function numberToWord(num) {
  if (num < 1 || num > 59 || num % 1 != 0) {
    throw new Error("Argument for numberToWord must be an integer between 1 and 59, inclusive.");
  }

  return NUMBER_WORDS[num];
}

/**
 * Given a time of day, returns the time represented as a phrase such as "three
 * past five" or "quarter to nine". The function only returns 12-hour times;
 * 24-hour times will be converted to 12-hour times because I love freedom and
 * hamburgers.
 * @param {number} hours The hour part of the time, e.g. 5 if the time is 5:03.
 * @param {number} minutes The minute part of the time, e.g. 3 if the time is 5:03.
 * @throws Will throw an error if hours is not an integer between 0 and 24, or if minutes is not an integer between 0 and 59.
 * @returns {string} The phrase representing the time.
 */
function timeToWords(hours, minutes) {
  if (hours < 0 || hours > 24 || hours % 1 != 0) {
    throw new Error("Hours argument for timeToWord must be an integer between 0 and 24, inclusive.");
  }

  if (minutes < 0 || minutes > 59 || minutes % 1 != 0) {
    throw new Error("Minutes argument for timeToWord must be an integer between 0 and 60, inclusive.");
  }

  hours = hours % 12 == 0 ? 12 : hours % 12;

  const hoursWord = numberToWord(hours);

  if (minutes == 0) {
    return `${hoursWord} o'clock`;
  }

  if (minutes <= 30) {
    if (minutes in SPECIAL_NUMBER_WORDS) {
      const specialWord = SPECIAL_NUMBER_WORDS[minutes];
      return `${specialWord} past ${hoursWord}`;
    } else {
      return `${hoursWord} ${minutes < 10 ? "oh " : ""}${numberToWord(minutes)}`;
    }
  } else {
    const remaining = 60 - minutes;
    const nextHour = hours == 12 ? 1 : hours + 1;
    const nextHourWord = numberToWord(nextHour);

    if (remaining in SPECIAL_NUMBER_WORDS) {
      const specialWord = SPECIAL_NUMBER_WORDS[remaining];
      return `${specialWord} to ${nextHourWord}`
    } else {
      return `${numberToWord(remaining)} minute${remaining == 1 ? "" : "s"} to ${nextHourWord}`;
    }
  }
}