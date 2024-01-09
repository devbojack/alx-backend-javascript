export default function cleanSet(set, startString) {
  if (startString.length < 1) {
    return '';
  }

  const matchedWords = [];
  let joined = '';

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      matchedWords.push((element.substring(startString.length)));
    }
  });
  joined = matchedWords.join('-');
  return joined;
}
