/*Write a JavaScript program to check the total marks of a student in various
examinations. The student will get A+ grade if the total marks are in the
range 89..100 inclusive, if the examination is "Final-exam." the student will
get A+ grade and total marks must be greater than or equal to 90. Return
true if the student get A+ grade or false otherwise*/


function checkGrade(totalMarks, isFinalExam) {
    if (isFinalExam) {
        return totalMarks >= 90; // A+ if total marks >= 90 in final exam
    } else {
        return totalMarks >= 89 && totalMarks <= 100; // A+ if marks are between 89 and 100
    }
}

// Test cases
console.log(checkGrade(95, false)); // true (A+ in regular exam)
console.log(checkGrade(85, true)); // false (Not A+ in final exam)
console.log(checkGrade(92, true)); // true (A+ in final exam)
