import * as js from "./days.js";
import * as ts from "./days.ts";

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

function timeMeasure(lang) {
  let start = Date.now();
  for (let i = 0; i < 10000; i++) {
    let x = getRandomDate();
    let y = getRandomDate();

    // console.log(lang.count_days(x, y)); // Вывод Результатов На Экран
    lang.count_days(x, y); // Просто Вычислить
  }
  let end = Date.now();

  return `\nExecution Time: ${end - start} milliseconds! (${Math.floor(
    (end - start) / 1000
  )} seconds)\n`;
}

console.log(
  `\n~[JavaScript]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
  timeMeasure(js),
  `\n~[TypeScript]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
  timeMeasure(ts)
);
