export default function hasValuesFromArray(set, array) {
  let contains = true;

  array.forEach((element) => {
    if (!set.has(element)) {
      contains = false;
    }
  });

  return contains;
}
