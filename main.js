import * as js from "./days.js";
import * as ts from "./days.ts";

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}

function timeMeasure(lang) {
  let start = Date.now();
  for (let i = 0; i < 10; i++) {
    let x = getRandomDate();
    let y = getRandomDate();

    // console.log(lang.count_days(x, y));  // Вывод Результатов На Экран
    lang.count_days(x, y); // Просто Вычислить
  }
  let end = Date.now();

  return `\nExecution Time: ${end - start} milliseconds! (${Math.floor(
    (end - start) / 1000
  )} seconds)\n`;
}

console.log(
  `\n~[JavaScript]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
  timeMeasure(js),
  `\n~[TypeScript]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
  timeMeasure(ts)
);
