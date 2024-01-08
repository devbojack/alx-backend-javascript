export default function getStudentIdsSum(students) {
  const initialValue = 0;
  return students.reduce((acc, cValue) => acc + cValue.id, initialValue);
}
