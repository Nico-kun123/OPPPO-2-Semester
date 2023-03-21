import { MAX_DATE, MIN_DATE } from "./constants";

function randomDay() {
  return Math.floor(Math.random() * 31) + 1;
}
function randomMonth() {
  return Math.floor(Math.random() * 12) + 1;
}
function randomYear() {
  return Math.floor(Math.random() * (MAX_DATE - MIN_DATE + 1)) + MIN_DATE;
}

export { randomDay, randomMonth, randomYear };
