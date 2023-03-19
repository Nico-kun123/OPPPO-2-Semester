/**
 * ДЛЯ ПРОВЕРКИ ПРАВИЛЬНОСТИ:
 * https://www.timeanddate.com/date/durationresult.html?d1=30&m1=04&y1=2014&d2=7&m2=05&y2=1976&ti=on
 */

import { count_days as js } from "../modules/days.js";
import { NUMBER_OF_TESTS } from "../help/constants.js";

// Импорт класса ДАТ
import { CustomDate } from "../help/class.js";

// ТЕСТЫ ДЛЯ ДАТ, КОТОРЫЕ ПОЛНОСТЬЮ СОВПАДАЮТ 
for (let i = 1; i <= NUMBER_OF_TESTS; i++) {
  test(`Random Date Test №${i}: `, () => {
    let firstDate = new CustomDate();
    let secondDate = new CustomDate();

    secondDate.day = firstDate.day;
    secondDate.month = firstDate.month = 1;

    // firstDate.year = secondDate.year = 2021;  // НЕ Високосный год
    firstDate.year = secondDate.year = 2024; // Високосный год

    let dif = Math.abs(
      firstDate.dateToDays(firstDate.year, firstDate.month, firstDate.day) -
        secondDate.dateToDays(secondDate.year, secondDate.month, secondDate.day)
    );

    console.log(
      `SPECIAL TEST №${i} (0 DAY DIFFERENCE)
    Date 1:\t\t${firstDate.day}-${firstDate.month}-${firstDate.year}
    Date 2:\t\t${secondDate.day}-${secondDate.month}-${secondDate.year}
    Difference:\t${dif} days! (NOT including end date)`
    );

    expect(js(firstDate, secondDate)).toBe(
      `Difference (JS):\t${dif} days have passed!`
    );
  });
}
