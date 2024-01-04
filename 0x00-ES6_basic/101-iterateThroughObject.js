export default function iterateThroughObject(reportWithIterator) {
  let rep = reportWithIterator.next();
  let x = '';

  while (!rep.done) {
    x += `${rep.value} | `;
    rep = reportWithIterator.next();
  }
  return x.slice(0, x.length - 3);
}
