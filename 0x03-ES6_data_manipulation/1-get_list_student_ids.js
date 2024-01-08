export default function getListStudentIds(arr) {
  const ids = [];
  if (Array.isArray(arr)) {
    for (const x of arr) {
      ids.push(x.id);
    }
  }
  return ids;
}
