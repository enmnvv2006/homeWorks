const student = { name: "Ivan", age: 21, skills: ["js", "css"] };

const { name: studentName, age: studentAge } = student
const { skills: [js, css] } = student

console.log(studentName, studentAge);

console.log(js, css);

const printStudent = ({ name, age }) => {
  return `Student ${name}, age ${age}`;
}

console.log(printStudent(student));

const sumAndMultiply = (first, ...num) => {
  const sum = num.reduce((a, b) => {
    return a + b
  }, 0)
  return first * sum
}

console.log(sumAndMultiply(2, 3, 4, 5));

const arrayFirst = [4, 5, 6]
const arraySecond = [1, 2]
const arrayThird = [9, 10]
const arrayFourth = [3]
const arrayFiveth = [7, 8]

const mergedArray = [...arrayFirst, ...arraySecond, ...arrayThird, ...arrayFourth, ...arrayFiveth].sort((a, b) => a - b)

console.log(mergedArray) 
