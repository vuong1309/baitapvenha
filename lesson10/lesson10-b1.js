let arrayData = [
    {
        id: 1,
        name: 'Nguyen Van A',
        age: 15
    },
    {
        id: 2,
        name: 'Nguyen Van B',
        age: 16
    },
    {
        id: 3,
        name: 'Nguyen Van C',
        age: 17
    },
    {
        id: 4,
        name: 'Nguyen Van D',
        age: 18
    },
]
for (let i = 0; i < arrayData.length; i++) {
    console.log(`STT: ${arrayData[i].id} - Họ tên: ${arrayData[i].name} - ${arrayData[i].age} tuoi`);
}