function removeElement(array, item) {
  index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
console.log(removeElement([1, 2, 3, 4, 5, 6, 7], 5));
