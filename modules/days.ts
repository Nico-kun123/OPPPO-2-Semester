"use strict";

function count_days(firstDate: any, secondDate: any): string {
  let dif: number = Math.abs(
    firstDate.dateToDays(firstDate.year, firstDate.month, firstDate.day) -
      secondDate.dateToDays(secondDate.year, secondDate.month, secondDate.day)
  );
  return show_string(dif);
}

function show_string(difference: number): string {
  return `Difference (TS):\t${difference} days have passed!`;
}

export { count_days, show_string };
