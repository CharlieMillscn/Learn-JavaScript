const quickSort = (arr) => {
  let data = [...arr];
  const __quickSort = (l, r) => {
    if (l >= r) return;
    const p = __partition(l, r);
    __quickSort(l, p - 1);
    __quickSort(p + 1, r);
  };
  const __partition = (l, r) => {
    const v = data[l];
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (data[i] < v) {
        [data[i], data[j + 1]] = [data[j + 1], data[i]];
        j++;
      }
    }
    [data[l], data[j]] = [data[j], data[l]];
    return j;
  };
  const n = data.length;
  __quickSort(0, n - 1);
  return data;
};
console.log(quickSort([2, 6, -1, 5, 3, 9, 4, 0, -66]));
