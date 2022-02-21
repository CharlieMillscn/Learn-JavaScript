const bubbleSort = (arr) => {
  let data = [...arr];
  const n = data.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }
  return data;
};
console.log(bubbleSort([2, 6, -1, 5, 3, 9, 4, 0, -66]));
