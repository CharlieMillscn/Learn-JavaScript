function result(n, m) {
  let count = 0,
    base = 1,
    round = n;
  while (round >= m) {
    let weight = round % 10;
    round = Math.floor(round / 10);
    if (weight > m) {
      count += (round + 1) * base;
    } else if (weight === m) {
      count += round * base + (n % base) + 1;
    } else {
      count += round * base;
    }
    base *= 10;
  }
  return count;
}
console.log(result(13, 1));
