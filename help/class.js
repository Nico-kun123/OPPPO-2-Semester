import { MIN_DATE, MAX_DATE } from "./constants.js";

export class CustomDate {
  constructor() {
    // Генерируем случайный год от MIN_DATE до MAX_DATE
    this.year =
      Math.floor(Math.random() * (MAX_DATE - MIN_DATE + 1)) + MIN_DATE;

    // Генерируем случайный месяц от 1 до 12
    this.month = Math.floor(Math.random() * 12) + 1;

    // Генерируем случайный день от 1 до 31
    this.day = Math.floor(Math.random() * 31) + 1; 

    this.adjustDateIfNeeded();
  }

  // Меняет день у даты, если дата неправильная
  adjustDateIfNeeded() {
    if (this.day > this.getDaysInMonth(this.year, this.month)) {
      this.day = Math.floor(Math.random() * 31) + 1;
      this.adjustDateIfNeeded();
    }
  }

  // Возвращает кол-во дней для данного месяца
  getDaysInMonth(year, month) {
    switch (month) {
      case 2:
        return this.isLeapYear(year) ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  }

  // Високосный ли год или нет?
  isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  // Перевод даты в дни
  dateToDays(year, month, day) {
    let days = 0;
    for (let i = 1; i < year; i++) {
      if (this.isLeapYear(i)) {
        days += 366;
      } else {
        days += 365;
      }
    }
    for (let i = 1; i < month; i++) {
      days += this.getDaysInMonth(year, i);
    }
    days += day - 1;
    return days;
  }
}
