/*
Description:
You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// Функция twoSort принимает массив строк s, сортирует его методом sort, берет первый элемент отсортированного массива с помощью [0], разбивает строку на массив символов с помощью split(''), а затем объединяет символы обратно в строку с разделителем *** с помощью join('***').

// Заметим, что метод sort сортирует массив на месте, изменяя порядок элементов в исходном массиве. Поэтому, когда мы вызываем s.sort()[0], мы сначала сортируем s, а затем берем первый элемент отсортированного массива. Наконец, мы разбиваем этот первый элемент на массив символов и объединяем их обратно в строку с разделителем ***. 

// Таким образом, функция twoSort возвращает первый элемент отсортированного массива s, разделенный звездочками. Например, если вызвать функцию twoSort(['hello', 'world', 'hi']), то она вернет строку h***e***l***l***o.