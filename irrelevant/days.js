"use strict";
function count_days(first_date, second_date) {
    let dif = Math.ceil(Math.abs(second_date.getTime() - first_date.getTime()) / (1000 * 3600 * 24));
    return show_string(dif);
}
function show_string(difference) {
    return `Difference (TS):\t${difference} days have passed!`;
}
export { count_days, show_string };
//# sourceMappingURL=days.js.map