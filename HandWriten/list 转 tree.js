const list = [
  { key: 1, data: "A", parentKey: 0 },
  { key: 2, data: "B", parentKey: 0 },
  { key: 3, data: "C", parentKey: 1 },
  { key: 4, data: "D", parentKey: 1 },
  { key: 5, data: "E", parentKey: 2 },
  { key: 6, data: "F", parentKey: 3 },
  { key: 7, data: "G", parentKey: 2 },
  { key: 8, data: "H", parentKey: 4 },
];
const list2tree1 = (list, parentKey) => {
  return list.filter((item) => {
    if (item.parentKey !== parentKey) {
      let parent = list.find((parent) => parent.key === item.parentKey);
      if (!parent.children) parent.children = [];
      parent.children.push(item);
      return false;
    }
    return true;
  });
};

console.log(list2tree1(list, 0));
/** 
  [ 
      { 
          key: 1, 
          data: 'A', 
          parentKey: 0, 
          children: [ 
              { key: 3, data: 'C', parentKey: 1, children: [{ key: 6, data: 'F', parentKey: 3 }] }, 
              { key: 4, data: 'D', parentKey: 1, children: [{ key: 8, data: 'H', parentKey: 4 }] }, 
          ], 
      }, 
      { 
          key: 2, 
          data: 'B', 
          parentKey: 0, 
          children: [ 
              { key: 5, data: 'E', parentKey: 2 }, 
              { key: 7, data: 'G', parentKey: 2 }, 
          ], 
      }, 
  ];
  */
