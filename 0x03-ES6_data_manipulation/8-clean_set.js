export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }
  const matchedValues = Array.from(set)
    .filter((value) => value && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return matchedValues.join('-');
}
