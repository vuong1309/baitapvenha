let listStudent = [
    { id: 1, name: "Nguyen Van A", age: 15 },
    { id: 2, name: "Nguyen Van B", age: 13 },
    { id: 3, name: "Nguyen Van C", age: 18 },
    { id: 4, name: "Nguyen Van D", age: 14 }
]

// listStudent.sort((a, b) => a.age - b.age);
// console.log(listStudent);

function sortArray(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

console.log(sortArray(listStudent));

// output[
//     { id: 2, name: "Nguyen Van B", age: 13 },
//     { id: 4, name: "Nguyen Van D", age: 14 },
//     { id: 1, name: "Nguyen Van A", age: 15 },
//     { id: 3, name: "Nguyen Van C", age: 18 },
// ]


