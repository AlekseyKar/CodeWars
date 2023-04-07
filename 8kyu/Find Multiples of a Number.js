/*
В этом простом упражнении вы создадите программу, которая принимает значение integer и возвращает список его кратных до другого значения limit. Если ограничение кратно целому числу, оно также должно быть включено. В функцию всегда будут передаваться только положительные целые числа, не состоящие из 0. Лимит всегда будет выше базового.

Например, если переданными параметрами являются (2, 6), функция должна возвращать [2, 4, 6], поскольку 2, 4 и 6 кратны от 2 до 6.

Если вы можете, попробуйте написать это только в одной строке кода.
*/

function findMultiples(integer, limit) {
  const result = []

  for (let i = integer; i <= limit; i += integer) {
    result.push(i)
  }

  return result
}

// function findMultiples(int,limit){
//   return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
// }



// Math.floor(limit/int) вычисляет количество кратных чисел int в пределах limit и округляет его до ближайшего меньшего целого числа.

// Array(Math.floor(limit/int)).fill(1) создает массив из Math.floor(limit/int) элементов, каждый из которых имеет значение 1.

// .map((x,i)=>int*(i+1)) преобразует каждый элемент массива, умножая его индекс i на int, чтобы получить кратное число int. Здесь мы добавляем 1 к i, потому что массивы в JavaScript индексируются с 0, а мы хотим, чтобы первым элементом было кратное число int вместо 0.
