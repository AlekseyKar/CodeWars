// write a JS function asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25).
// The function accepts an integer and returns an integer. 

function squareDigits(num) {
  let result = "";
  num.toString().split("").forEach(digit => {
    const squared = parseInt(digit) * parseInt(digit);
    result += squared.toString();
  });
  return parseInt(result);
}

// В этой функции мы сначала преобразуем число в строку и разбиваем его на массив цифр. Затем мы перебираем каждую цифру, возводим ее в квадрат и объединяем возведенную в квадрат цифру в строку. Наконец, мы преобразуем объединенную строку обратно в целое число и возвращаем ее.

// Вы можете вызвать эту функцию с целочисленным аргументом, чтобы получить возведенный в квадрат и объединенный результат. Например, squareDigits(9119) вернет 811181.

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}