const selectionSort = (arr) => {
  let data = [...arr];
  const n = data.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    [data[i], data[minIndex]] = [data[minIndex], data[i]];
  }
  return data;
};
console.log(selectionSort([2, 6, -1, 5, 3, 9, 4, 0, -66]));
