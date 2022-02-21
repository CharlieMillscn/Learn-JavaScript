const mergeSort = (arr) => {
  let data = [...arr];
  const n = data.length;
  const __mergeSort = (l, r) => {
    if (l >= r) return;
    const mid = l + Math.floor((r - l) / 2);
    __mergeSort(l, mid);
    __mergeSort(mid + 1, r);
    if (data[mid] > data[mid + 1]) __merge(l, r, mid);
    // data[mid] <= data[mid + 1] 时整个归并过程有序
  };
  const __merge = (l, r, mid) => {
    let temp = new Array(r - l + 1);
    for (let i = l; i <= r; i++) {
      temp[i - l] = data[i];
    }
    let i = l,
      j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        data[k] = temp[j - l];
        j++;
      } else if (j > r) {
        data[k] = temp[i - l];
        i++;
      } else if (temp[i - l] < temp[j - l]) {
        data[k] = temp[i - l];
        i++;
      } else {
        data[k] = temp[j - l];
        j++;
      }
    }
  };
  __mergeSort(0, n - 1);
  return data;
};
console.log(mergeSort([2, 6, -1, 5, 3, 9, 4, 0, -66]));
