function joinWithCharacter(array, charactor) {
    return array.join(charactor);
}


// Ví dụ khi sử dụng
let cars = ['Honda', 'Mazda', 'Mercedes'];

let result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"