import { MIN_YEAR, MAX_YEAR } from "./constants.js";

/**
 * Класс, предназначен для работы с датами и содержит методы для генерации случайной даты, проверки правильности даты и т.п.
 * @class "CustomDate"
 */
export class CustomDate {
  /**
   * Конструктор класса "CustomDate"
   * @constructor
   * @param {number} day день
   * @param {number} month месяц
   * @param {number} year год
   * @param {boolean} random параметр для генерации случайной или конкретной даты. Этот параметр надо передовать только при создании конкретной даты (и он должен быть равен "false"). По умолчанию равен "true"
   */
  constructor(day = 0, month = 0, year = 0, random = true) {
    // Если random == true, то даты генерируются случайным образом,
    // иначе дню, месяцу и году присваиваются входные данные у конструктора
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

  /**
   * Меняет день, месяц и год у даты, если они не корректные
   * @method
   */
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

  /**
   * Проверка месяца на корректность
   * @method
   * @returns {boolean} true, если месяц правильный, иначе false
   */
  checkMonth() {
    return (
      this.month <= 12 &&
      this.month >= 1 &&
      typeof this.month === "number" &&
      !isNaN(this.month)
    );
  }

  /**
   * Проверка года на корректность
   * @method
   * @returns {boolean} true, если год правильный, иначе false
   */
  checkYear() {
    return (
      this.year <= MAX_YEAR &&
      this.year >= MIN_YEAR &&
      typeof this.year === "number" &&
      !isNaN(this.year)
    );
  }

  /**
   * Проверка дня на корректность
   * @method
   * @returns {boolean} true, если день правильный, иначе false
   */
  checkDay() {
    return (
      (this.day > 0 && typeof this.day === "number" && !isNaN(this.day)) ||
      this.day <= this.getDaysInMonth(this.year, this.month)
    );
  }

  /**
   * Генерация случайного дня
   * @method
   * @returns {number} Случайное число от 1 до 31 включительно
   */
  randDay() {
    return Math.floor(Math.random() * 31) + 1;
  }

  /**
   * Генерация случайного месяца
   * @method
   * @returns {number} Случайное число от 1 до 12 включительно
   */
  randMonth() {
    return Math.floor(Math.random() * 12) + 1;
  }

  /**
   * Генерация случайного года
   * @method
   * @returns {number} Случайное число от MIN_YEAR до MAX_YEAR включительно (эти константы находятся в файле "/help/constants.js")
   */
  randYear() {
    return Math.floor(Math.random() * (MAX_YEAR - MIN_YEAR + 1)) + MIN_YEAR;
  }

  /**
   * Возвращает количество дней в данном месяце данного года
   * @method
   * @param {number} year год
   * @param {number} month месяц
   * @returns {number} количество дней в данном месяце данного года (с учетом високосности года)
   */
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

  /**
   * Проверяет, является ли год високосным или нет
   * @method
   * @param {number} year год для проверки
   * @returns {boolean} true, если год високосный, иначе false
   */
  isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  /**
   * Переводит дату в количество дней (с учетом високосных лет). Необходимо для поиска разницы между датами в днях
   * @method
   * @param {number} year год
   * @param {number} month месяц
   * @param {number} day день
   * @returns {number} количество дней для данных параметров даты
   */
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
