export default function cleanSet(set, startString) {
  const matchedWords = [];

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      matchedWords.push((element.substring(startString.length)));
    }
  });
  const joined = startString !== '' ? matchedWords.join('-') : '';
  return joined;
}
