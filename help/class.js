import { MIN_DATE, MAX_DATE } from "./constants.js";

export class CustomDate {
  constructor(day = 0, month = 0, year = 0, random = true) {
    // Генерируем случайный год от MIN_DATE до MAX_DATE
    // Генерируем случайный месяц от 1 до 12
    // Генерируем случайный день от 1 до 31
    if (random) {
      this.year = this.randYear();
      this.month = this.randMonth();
      this.day = this.randDay();
    } else {
      this.day = day;
      this.month = month;
      this.year = year;
    }

    this.adjustDateIfNeeded();
  }

  // Меняет параметры у даты, если дата неправильная
  adjustDateIfNeeded() {
    if (!this.checkMonth()) {
      this.month = this.randMonth();
    }

    if (!this.checkYear()) {
      this.year = this.randYear();
    }

    if (!this.checkDay()) {
      this.day = this.randDay();
      this.adjustDateIfNeeded();
    }
  }

  // Проверка месяца
  checkMonth() {
    return (
      this.month <= 12 &&
      this.month >= 1 &&
      typeof this.month === "number" &&
      !isNaN(this.month)
    );
  }

  // Проверка года
  checkYear() {
    return typeof this.year === "number" && !isNaN(this.year);
  }

  // Проверка дня
  checkDay() {
    return (
      (this.day > 0 && typeof this.day === "number" && !isNaN(this.day)) ||
      this.day <= this.getDaysInMonth(this.year, this.month)
    );
  }

  randDay() {
    return Math.floor(Math.random() * 31) + 1;
  }

  randMonth() {
    return Math.floor(Math.random() * 12) + 1;
  }

  randYear() {
    return Math.floor(Math.random() * (MAX_DATE - MIN_DATE + 1)) + MIN_DATE;
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
