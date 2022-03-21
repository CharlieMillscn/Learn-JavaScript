const findNearesttargetber = (arr, target) => {
  let mid;
  let l = 0;
  let r = arr.length - 1;
  // 保证指针最终停留在相邻的两个数,所以这里是判断是否大于1
  while (r - l > 1) {
    undefined;
    mid = Math.floor((l + r) / 2);
    // 如果目标数比中间小，所以范围在左边
    if (target < arr[mid]) {
      r = mid;
    } else {
      l = mid;
    }
  }
  // 最后比较这两个数字的绝对差大小即可。
  return Math.abs(target - arr[l]) <= Math.abs(target - arr[r])
    ? arr[l]
    : arr[r];
};
console.log(findNearesttargetber([1, 6, 9, 10, 19], 18));
