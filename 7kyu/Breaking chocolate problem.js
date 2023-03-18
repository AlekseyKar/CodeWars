// Ваша задача состоит в том, чтобы разделить плитку шоколада заданного размера n x m на маленькие квадратики. Каждый квадрат имеет размер 1x1 и не поддается разрушению. Реализуйте функцию, которая будет возвращать минимальное количество необходимых перерывов.

// Например, если вам дают плитку шоколада размером 2 х 1, вы можете разделить ее на отдельные квадратики всего за один разлом, но для размера 3 х 1 вам необходимо сделать два разлома.

// Если входные данные неверны, вы должны вернуть 0 (так как в случае, если у нас нет шоколада для разделения, перерывы не требуются). Входными данными всегда будет неотрицательное целое число.

function breakChocolate(n, m) {
  const res = n * m
  return res ? res - 1 : 0
}