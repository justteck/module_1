'use strict';

const sortStudents = (a, b) => {
  const allStudents = a;
  const failedStudents = b;

  const passedStudents = allStudents.filter((student) => !failedStudents.includes(student));

  return passedStudents;
};

console.log('Passed students: ', sortStudents(['Petr', 'Ivan', 'Sasha', 'Masha', 'Kesha', 'Vitya'], ['Kesha', 'Petr', 'Vitya']));
