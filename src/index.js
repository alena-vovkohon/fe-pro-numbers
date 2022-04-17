/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */

export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
    let maxNumber = Math.max(maxFirst, maxSecond)
    let minNumber = Math.min(minFirst, minSecond)
    let result = maxNumber * minNumber
    return result
};

const minMaxMultiplyResult = minMaxMultiply(2, 3, 4, 5);

console.log(minMaxMultiplyResult); // 10

/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */

export const getSquareOfCircle = (radius) => {
    let square = Math.PI * Math.pow(radius, 2)
    return square
};

const square = getSquareOfCircle(4);

console.log(square); // 50.26548245743669
/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */

export const getFixedValue = (number, accuracy) => {
    let numberRoundNew = Number(number.toFixed(accuracy))
    return numberRoundNew
};

const fixedValue = getFixedValue(3.2345, 3);

console.log(fixedValue); // 2.235

/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */

export const getFlooroCeil = (number) => {
    let numberNew;
    if (number >0) {
       numberNew = Math.floor(number)
    } else {
        
        numberNew = Math.ceil(number)
    }
    return numberNew
};

console.log(getFlooroCeil(3.235)); // 4
console.log(getFlooroCeil(4.235)); // 4

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {
    let result = Math.round(Math.random() * (from - to) + to)
    return result

};

console.log(randomizer(2, 5)); // от 2 до 5, не знаю сколько)