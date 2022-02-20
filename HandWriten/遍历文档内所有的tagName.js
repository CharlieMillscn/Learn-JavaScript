const TagNames = (parentNode) => {
  console.log(parentNode.tagName);
  const childNodes = parentNode.childNodes;
  console.log(childNodes);
  // Array.from(childNodes).map((element) => {
  //   TagNames(element);
  // });
};
TagNames(document.body);
