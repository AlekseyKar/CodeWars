/*
Description:
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

function noBoringZeros(n) {
  return +(`${n}`.replace(/0+$/, ''))
}

// ${n} преобразует число n в строку.

// .replace(/0+$/, '') заменяет все последовательности нулей, которые находятся в конце строки, на пустую строку. Это делается с помощью регулярного выражения /0+$/, которое ищет один или несколько нулей в конце строки.

// + перед выражением возвращает результат как число, а не строку.


// В итоге функция noBoringZeros возвращает число без конечных нулей. Например, вызов noBoringZeros(10200) вернет число 102.

function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}