export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).reduce((occ1, occ2) => {
    occ1.push(...occ2);
    return occ1;
  }, []);
  let idx = 0;
  const maxidx = employees.length;
  return {
    next() {
      if (idx < maxidx) {
        const result = { value: employees[idx], done: false };
        idx += 1;
        return result;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => this.next(),
  };
}
