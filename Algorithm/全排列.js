const permute = (nums) => {
  const res = [];
  const bfs = (data) => {
    if (data.length === nums.length) {
      res.push([...data]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (data.includes(nums[i])) continue;
      data.push(nums[i]);
      bfs(data);
      data.pop();
    }
  };
  bfs([]);
  return res;
};
console.log(permute([1, 2, 3]));
