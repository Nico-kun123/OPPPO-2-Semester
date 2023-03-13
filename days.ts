"use strict";

function count_days(first_date: Date, second_date: Date): string {
  let dif: number = Math.ceil(
    Math.abs(second_date.getTime() - first_date.getTime()) / (1000 * 3600 * 24)
  );

  return show_string(dif);
}

function show_string(difference: number): string {
  return `Difference (TS):\t${difference} days have passed!`;
}

export { count_days, show_string };
