"use strict";
/**
 * Вычисление разницы между двумя датами в днях
 * @param firstDate Дата №1
 * @param secondDate Дата №2
 * @returns результаты функции "show_string", в которую передаётся количество дней: разницу между двумя датами
 */
function count_days(firstDate, secondDate) {
  let dif = Math.round(
    Math.abs(
      firstDate.dateToDays(firstDate.year, firstDate.month, firstDate.day) -
        secondDate.dateToDays(secondDate.year, secondDate.month, secondDate.day)
    )
  );
  return show_string(dif);
}

/**
 * Возвращает строку с информацией о том, сколько дней разница между датами
 * @param difference количество дней. Разница между двумя датами
 * @returns строка в духе: "Разница: ... дней!"
 */
function show_string(difference) {
  return `Difference (JS):\t${difference} days have passed!`;
}

export { count_days, show_string };
//# sourceMappingURL=days.js.map
