const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    }
]

//reduce function
// let maxLike = sports.reduce((max, game) => max.like > game.like ? max : game);
// console.log(maxLike);

//normal function
function getMostFavoriteSport(array) {
    return array.reduce((a, b) => a.like > b.like ? a : b);
}

// Kỳ vọng
console.log(getMostFavoriteSport(sports))
// Output: [{ name: 'Bóng đá, like: 10 }]
