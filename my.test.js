/**
 * ДЛЯ ПРОВЕРКИ ПРАВИЛЬНОСТИ:
 * https://www.timeanddate.com/date/durationresult.html?d1=30&m1=04&y1=2014&d2=7&m2=05&y2=1976&ti=on
 */

import { count_days as js } from "./days.js";

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}

for (let i = 1; i <= 10; i++) {
  test(`Test №${i}: `, () => {
    let firstDate = getRandomDate();
    let secondDate = getRandomDate();

    let dif = Math.ceil(
      Math.abs(secondDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)
    );

    console.log(
      `TEST №${i}
    Date 1:\t\t${firstDate.getDate()}-${
        firstDate.getMonth() + 1
      }-${firstDate.getFullYear()}
    Date 2:\t\t${secondDate.getDate()}-${
        secondDate.getMonth() + 1
      }-${secondDate.getFullYear()}
    Difference:\t${dif} days! (including end date)`
    );

    expect(js(firstDate, secondDate)).toBe(
      `Difference (JS):\t${dif} days have passed!`
    );
  });
}
