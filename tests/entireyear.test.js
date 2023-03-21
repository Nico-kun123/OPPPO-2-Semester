/**
 * ДЛЯ ПРОВЕРКИ ПРАВИЛЬНОСТИ:
 * https://www.timeanddate.com/date/durationresult.html?d1=30&m1=04&y1=2014&d2=7&m2=05&y2=1976&ti=on
 */

import { count_days as js } from "../modules/days.js";
import { NUMBER_OF_TESTS } from "../help/constants.js";

// Импорт класса ДАТ
import { CustomDate } from "../help/class.js";
import { randomDay, randomMonth, randomYear } from "../help/random.js";

// ТЕСТЫ ДЛЯ ОСОБЫХ ДАТ (РАЗНИЦА СОСТАВЛЯЕТ РОВНО 365 ДНЕЙ)
for (let i = 1; i <= NUMBER_OF_TESTS; i++) {
  test(`Special Test №${i} (365 day difference): `, () => {
    // ТЕСТ: Одинаковые месяц и день. Год отличается на 1
    let year = randomYear();
    let month = randomMonth();
    let day = randomDay();
    let firstDate = new CustomDate(day, month, year, false);
    let secondDate = new CustomDate(day, month, year + 1, false);
    firstDate.adjustDateIfNeeded();
    secondDate.adjustDateIfNeeded();

    // ~~~
    let date1 = new Date(firstDate.year, firstDate.month - 1, firstDate.day);
    let date2 = new Date(secondDate.year, secondDate.month - 1, secondDate.day);
    let dif = Math.round(
      Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
    );

    console.log(
      `SPECIAL TEST №${i} (365 OR 366 DAY DIFFERENCE)
        Date 1:\t\t${firstDate.day}-${firstDate.month}-${firstDate.year}
        Date 2:\t\t${secondDate.day}-${secondDate.month}-${secondDate.year}
        Difference:\t${dif} days! (NOT including end date)`
    );

    expect(js(firstDate, secondDate)).toBe(
      `Difference (JS):\t${dif} days have passed!`
    );
  });
}
