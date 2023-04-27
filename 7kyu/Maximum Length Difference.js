// Вам даны два массива строк a1 и a2. Каждая строка состоит из букв от a до z. Пусть x - любая строка в первом массиве, а y - любая строка во втором массиве.

// Найдите max(abs(длина(x) − длина(y)))

// Если a1 и/или a2 пусты, верните значение -1 

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let l1 = a1.map(str => str.length);
  let l2 = a2.map(str => str.length);
  return Math.max(
    Math.max(...l1) - Math.min(...l2),
    Math.max(...l2) - Math.min(...l1)
  );
}