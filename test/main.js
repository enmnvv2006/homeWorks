const students = [
  {
    id: 1,
    name: "Tom",
    age: 18,
    city: "Bishkek",
    grades: [5, 4, 3, 5],
    hobbies: ["football", "gaming"],
    isGraduated: false
  },
  {
    id: 2,
    name: "Anna",
    age: 20,
    city: "Osh",
    grades: [3, 2, 4, 3],
    hobbies: ["reading", "painting", "yoga"],
    isGraduated: true
  },
  {
    id: 3,
    name: "Bob",
    age: 19,
    city: "Karakol",
    grades: [5, 5, 5, 4],
    hobbies: [],
    isGraduated: false
  },
  {
    id: 4,
    name: "Lisa",
    age: 22,
    city: "Bishkek",
    grades: [4, 5, 5, 5],
    hobbies: ["volleyball", "travel"],
    isGraduated: true
  },
  {
    id: 5,
    name: "John",
    age: 21,
    city: "Talas",
    grades: [2, 3, 2, 4],
    hobbies: ["movies", "football"],
    isGraduated: false
  },
  {
    id: 6,
    name: "Mila",
    age: 23,
    city: "Osh",
    grades: [5, 4, 4, 5],
    hobbies: ["reading", "cooking"],
    isGraduated: true
  },
  {
    id: 7,
    name: "Alex",
    age: 19,
    city: "Naryn",
    grades: [3, 3, 4, 3],
    hobbies: ["music", "football"],
    isGraduated: false
  },
  {
    id: 8,
    name: "Kate",
    age: 20,
    city: "Bishkek",
    grades: [4, 4, 5, 5],
    hobbies: ["dance", "photography"],
    isGraduated: true
  },
  {
    id: 9,
    name: "Nick",
    age: 18,
    city: "Talas",
    grades: [5, 5, 4, 5],
    hobbies: ["gaming", "reading"],
    isGraduated: false
  },
  {
    id: 10,
    name: "Sara",
    age: 21,
    city: "Osh",
    grades: [4, 5, 3, 4],
    hobbies: ["travel", "yoga"],
    isGraduated: true
  }
];


const cards = document.querySelector(".cards-grid")

students.map((student) => {
  const card = document.createElement("div")
  cards.append(card)
  card.setAttribute("class", "card")

  const studentName = student.name
  const cardName = document.createElement("div")
  card.append(cardName)
  cardName.setAttribute("class", "card-name")
  cardName.innerText = studentName

  const studentAge = student.age
  const cardAge = document.createElement("div")
  card.append(cardAge)
  cardAge.setAttribute("class", "card-age")
  cardAge.innerText = `Age: ${studentAge}`

  const studentCity = student.city
  const cardCity = document.createElement("div")
  card.append(cardCity)
  cardCity.setAttribute("class", "card-city")
  cardCity.innerText = `City: ${studentCity}`

  const studentGrades = student.grades
  const avgGrade = studentGrades.map((grade) => Number(grade))
  const cardGrades = document.createElement("div")
  card.append(cardGrades)
  cardGrades.setAttribute("class", "card-grades")
  cardGrades.innerText = `Average Grade: ${avgGrade}`

  const studentHobbies = student.hobbies.length > 0 ? student.hobbies.join(", ") : "No hobbies listed"
  const cardHobbies = document.createElement("div")
  card.append(cardHobbies)
  cardHobbies.setAttribute("class", "card-hobbies")
  cardHobbies.innerText = `Hobbies: ${studentHobbies}`

  const studentGraduation = student.isGraduated ? "Graduated" : "Not Graduated"
  const cardGraduation = document.createElement("div")
  card.append(cardGraduation)
  cardGraduation.setAttribute("class", "card-graduation")
  cardGraduation.innerText = `Status: ${studentGraduation}`
  if (student.isGraduated) {
    card.style.border = "7px solid green"
  } else {
    card.style.border = "7px solid red"
  }
})

const inputName = document.querySelector("#searchInput")
const searchButton = document.querySelector("#searchBtn")

searchButton.addEventListener("click", () => {
  const searchValue = inputName.value.toLowerCase()

  const index = students.findIndex((student) => student.name.toLowerCase() === searchValue)

  if (index == -1) {
    alert("Студент не найден")
  } else {
    alert(`Студент найден! Индекс: ${index}`)
  }
})


console.log(
  students.map((student) => {
  return student.name
}));

console.log(
  students.filter((student) => {
    return student.age <= 19
  })
);

const studentsWithGrade = students.map(student => {
    
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    const averageGrade = sum / student.grades.length;

    return {
        id: student.id,
        name: student.name,
        grade: averageGrade
    };
});

console.log(studentsWithGrade);

const oldest = students.reduce((a,b) => {
  if (a.age > b.age) {
    return a
  } else {
    return b
  }
})

const youngest = students.reduce((a,b) => {
  if (a.age < b.age) {
    return a
  } else {
    return b
  }
})

console.log("Разница между самым старшим и младшим:",oldest.age - youngest.age);

console.log(
  students.filter((student) => {
    const a = student.isGraduated == true
    return a
})
);

console.log(students.reverse());

