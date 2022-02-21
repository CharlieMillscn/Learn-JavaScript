const insertionSort = (arr) => {
  let data = [...arr];
  const n = data.length;
  for (let i = 1; i < n; i++) {
    // for (let j = i; j > 0 && data[j] < data[j - 1]; j--) {
    //   const temp = data[j];
    //   data[j] = data[j - 1];
    //   data[j - 1] = temp;
    // }
    const e = data[i];
    let j;
    for (j = i; j > 0 && data[j - 1] > e; j--) {
      data[j] = data[j - 1];
    }
    data[j] = e;
  }
  return data;
};
console.log(insertionSort([2, 6, -1, 5, 3, 9, 4, 0, -66]));
