"use strict";

function count_days(first_date: any, second_date: any): string {
  let dif: number = Math.ceil(
    Math.abs(second_date.seconds - first_date.seconds) / (3600 * 24)
  );

  return show_string(dif);
}

function show_string(difference: number): string {
  return `Difference (TS):\t${difference} days have passed!`;
}

export { count_days, show_string };
