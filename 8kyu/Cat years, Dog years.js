// нужно написать функцию, которая принимает один параметр humanYears и возвращает массив из трех элементов: [humanYears, catYears, dogYears]. Для вычисления catYears и dogYears вам нужно использовать заданные формулы в зависимости от значения humanYears.

// Функция для вычисления возраста кота и собаки по возрасту человека
function calculateAge(humanYears) {
// Объявляем переменные для хранения возраста кота и собаки
let catYears = 0;
let dogYears = 0;

// Проверяем, что humanYears - это целое число больше или равно 1
if (Number.isInteger(humanYears) && humanYears >= 1) {
// Для первого года прибавляем по 15 лет к обоим переменным
catYears += 15;
dogYears += 15;

// Если humanYears больше 1, то для второго года прибавляем по 9 лет к обоим переменным
if (humanYears > 1) {
catYears += 9;
dogYears += 9;
}

// Если humanYears больше 2, то для каждого последующего года прибавляем по 4 года к catYears и по 5 лет к dogYears
if (humanYears > 2) {
catYears += (humanYears - 2) * 4;
dogYears += (humanYears - 2) * 5;
}

// Возвращаем массив из трех элементов: [humanYears, catYears, dogYears]
return [humanYears, catYears, dogYears];
} else {
// Если humanYears не удовлетворяет условию, то возвращаем сообщение об ошибке
return "Неверный ввод. Введите целое число больше или равно 1.";
}
}

// Примеры вызова функции с разными аргументами
console.log(calculateAge(1)); // [1, 15, 15]
console.log(calculateAge(2)); // [2, 24, 24]
console.log(calculateAge(10)); // [10, 56, 64]
console.log(calculateAge(0.5)); // Неверный ввод. Введите целое число больше или равно 1.