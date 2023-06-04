var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
let sum = 0;
function getTotalGold(array) {
    for (i = 0; i < array.length; i++) {
        sum += array[i].gold;
    }
    return sum;
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23