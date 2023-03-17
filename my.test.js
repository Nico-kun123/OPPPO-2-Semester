/**
 * ДЛЯ ПРОВЕРКИ ПРАВИЛЬНОСТИ:
 * https://www.timeanddate.com/date/durationresult.html?d1=30&m1=04&y1=2014&d2=7&m2=05&y2=1976&ti=on
 */

import { count_days as js } from "./days.js";

class CustomDate {
  constructor(timestamp) {
    const oneDayInSeconds = 86400; // количество секунд в одном дне
    const oneYearInSeconds = 31536000; // количество секунд в одном году

    // вычисляем количество дней
    let day = Math.floor(timestamp / oneDayInSeconds) + 1;
    let year = 1970;
    let month = 0;

    while (day > getDaysInMonth(year, month)) {
      day -= getDaysInMonth(year, month);
      month++;
      if (month > 11) {
        year++;
        month = 0;
      }
    }

    this.seconds = timestamp;
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

function getDaysInMonth(year, month) {
  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return daysInMonth[month];
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function getRandomDate() {
  // получаем максимальный timestamp в секундах
  const maxTimestamp = Math.floor(Date.now() / 1000);
  // генерируем случайный timestamp в секундах
  const randomTimestamp = Math.floor(Math.random() * maxTimestamp);
  return new CustomDate(randomTimestamp);
}

for (let i = 1; i <= 10; i++) {
  test(`Test №${i}: `, () => {
    let firstDate = getRandomDate();
    let secondDate = getRandomDate();

    let dif = Math.ceil(
      Math.abs(secondDate.seconds - firstDate.seconds) / (3600 * 24)
    );

    console.log(
      `TEST №${i}
    Date 1:\t\t${firstDate.day}-${firstDate.month + 1}-${firstDate.year}
    Date 2:\t\t${secondDate.day}-${secondDate.month + 1}-${secondDate.year}
    Difference:\t${dif} days! (including end date)`
    );

    expect(js(firstDate, secondDate)).toBe(
      `Difference (JS):\t${dif} days have passed!`
    );
  });
}
