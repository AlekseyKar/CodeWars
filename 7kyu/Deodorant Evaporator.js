function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let gas = 100;
  while (gas > threshold) {
  gas -= gas * (evap_per_day / 100);
  days ++;
  }
  return days;
  }

// Вот как это работает:
// Мы начинаем с количества газа в емкости равным 100%.
// Мы уменьшаем количество газа в емкости на процент потерь каждый день.
// Мы продолжаем уменьшать количество газа в емкости каждый день до тех пор, пока количество газа не достигнет порогового значения.
// Мы считаем количество дней, которые потребовались для того, чтобы количество газа в емкости достигло порогового значения

// function evaporator(content, evap_per_day, threshold){ 
//   threshold = threshold / 100
//   evap_per_day = evap_per_day / 100
//   return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
// }