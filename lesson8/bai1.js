let number1 = parseFloat(prompt(`Nhập số thứ nhất:`));
let number2 = parseFloat(prompt(`Nhập số thứ hai:`));
if (number1 > number2) {
    console.log(`Số thứ nhất: ${number1} lớn hơn số thứ hai: ${number2}`);
} else if (number2 > number1) {
    console.log(`Số thứ hai: ${number2} lớn hơn số thứ nhất: ${number1}`);
} else {
    console.log(`Số thứ nhất và số thứ hai có giá trị bằng nhau : ${number1}`);
}