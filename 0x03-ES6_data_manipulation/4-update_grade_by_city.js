export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newStudentGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newStudentGrade ? newStudentGrade.grade : 'N/A',
      };
    });
}
