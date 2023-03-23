/** ССЫЛКА НА РЕПОЗИТОРИЙ
 * https://github.com/Nico-kun123/OPPPO-2-Semester
 */

"use strict";
import * as js from "./modules/days.js";
import * as ts from "./modules/days.ts";
import { NUMBER_OF_PAIRS } from "./help/constants.js";

// Импорт класса ДАТ
import { CustomDate } from "./help/class.js";

/**
 * Генерация пар дат, вычисление разницы м/у ними в днях, вычисление времени работы
 * @param {any} language модули js и ts, которые в этот файл были импортированы
 * @returns {string} сколько времени заняло выполнение модулей js и ts
 */
function timeMeasure(language) {
  let start = performance.now();
  for (let i = 0; i < NUMBER_OF_PAIRS; i++) {
    let firstDate = new CustomDate();
    let secondDate = new CustomDate();

    // Вычислить и вывести результаты в консоль
    // console.log(
    //   `\nDate 1: ${firstDate.day}-${firstDate.month}-${firstDate.year}`,
    //   `\nDate 2: ${secondDate.day}-${secondDate.month}-${secondDate.year}\n`,
    //   language.count_days(firstDate, secondDate)
    // );

    // Просто Вычислить
    language.count_days(firstDate, secondDate);
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
