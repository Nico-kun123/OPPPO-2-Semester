"use strict";
function count_days(firstDate, secondDate) {
    let dif = Math.abs(firstDate.dateToDays(firstDate.year, firstDate.month, firstDate.day) -
        secondDate.dateToDays(secondDate.year, secondDate.month, secondDate.day));
    return show_string(dif);
}
function show_string(difference) {
    return `Difference (JS):\t${difference} days have passed!`;
}
export { count_days, show_string };
//# sourceMappingURL=days.js.map