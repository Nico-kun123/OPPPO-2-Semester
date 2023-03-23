import { MAX_YEAR, MIN_YEAR } from "./constants";

/**
 * Вспомогательная функция. Генерация случайного дня
 * @returns число от 1 до 31
 */
function randomDay() {
  return Math.floor(Math.random() * 31) + 1;
}

/**
 * Вспомогательная функция. Генерация случайного месяца
 * @returns число от 1 до 12
 */
function randomMonth() {
  return Math.floor(Math.random() * 12) + 1;
}

/**
 * Вспомогательная функция. Генерация случайного года
 * @returns число от MIN_YEAR до MAX_YEAR (эти константы находятся в файле "/help/constants.js")
 */
function randomYear() {
  return Math.floor(Math.random() * (MAX_YEAR - MIN_YEAR + 1)) + MIN_YEAR;
}

export { randomDay, randomMonth, randomYear };
