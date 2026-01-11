// 1 Задача

const array = [2,5,1,3,4]

array.push(6)
console.log(array);

array.shift()
console.log(array)

console.log(array.filter((num) => {
    return num % 2 == 0
}))

console.log(array.map((num) => {
    return num * 5
}));

console.log(array.reduce((a,b) => {
    return a + b / array.length
},0 ))

console.log(array.sort());

// 2 Задача

const celebrities = [
    {name: "Cristiano Ronaldo", age: 40,role: "footboller"},
    {name: "Khabib Nurmagomedov", age: 37,role: "Coach"},
    {name: "Garry Potter", age: 17,role: "actor"},
    {name: "Assap Rocky", age: 27,role: "singer"},
    {name: "Maks Ilyasov", age: 29,role: "athlete"},
    {name: "Ilya Topuria", age: 28,role: "fighter"},
    {name: "Jhone Jhons", age: 38,role: "fighter"},
    {name: "Maks Hollowey", age: 39,role: "fighter"},
    {name: "XXXtentacion", age: 20,role: "singer"},
    {name: "Ulukmanapo", age: 34,role: "singer"},
]

console.log(
    celebrities.map((elem) => {
    return elem.name
})
);

console.log(
    celebrities.map((elem) => {
    return `${elem.name} is a ${elem.role}`;
})
);

const minAge = celebrities.reduce((m, p) => Math.min(m, p.age), celebrities[0].age);
const maxAge = celebrities.reduce((m, p) => Math.max(m, p.age), 0);

console.log("Разница в возрасте",maxAge - minAge);


console.log(
    celebrities.filter((num) => {
        return num.age < 18
    })
);

console.log(
    celebrities.filter((elem) => {
        return elem.age >= 20
    })
);



