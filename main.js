"use strict";
import * as js from "./modules/days.js";
import * as ts from "./modules/days.ts";
import { NUMBER_OF_TESTS } from "./help/constants.js";

// Импорт класса ДАТ
import { CustomDate } from "./help/class.js";

function timeMeasure(language) {
  let start = performance.now();
  for (let i = 0; i < NUMBER_OF_TESTS; i++) {
    let firstDate = new CustomDate();
    let secondDate = new CustomDate();

    // Вычислить и вывести результаты на экран 
    console.log(
      `\nDate 1: ${firstDate.day}-${firstDate.month}-${firstDate.year}`,
      `\nDate 2: ${secondDate.day}-${secondDate.month}-${secondDate.year}\n`,
      language.count_days(firstDate, secondDate)
    );

    // Просто Вычислить
    // language.count_days(firstDate, secondDate);
  }
  let end = performance.now();

  return `\nExecution Time: ${(end - start).toFixed(
    3
  )} milliseconds! (${Math.floor(
    ((end - start) / 1000).toFixed(3)
  )} seconds)\n`;
}

console.log(
  `\n\n~~[JavaScript]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
  timeMeasure(js),
  `\n~~[TypeScript]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
  timeMeasure(ts)
);
