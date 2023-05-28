let calculator = prompt(`Nhập phép tính cần sử dụng + - * /:`);
let number1 = parseFloat(prompt(`Nhập vào số thứ nhất:`));
let number2 = parseFloat(prompt(`Nhập vào số thứ hai:`));
let result = null;


//if else case
// if (calculator === "+") {
//     result = number1 + number2;
//     console.log(`Kết quả của phép tính là: ${result}`);
// } else if (calculator === "-") {
//     result = number1 - number2;
//     console.log(`Kết quả của phép tính là: ${result}`);
// } else if (calculator === "*") {
//     result = number1 * number2;
//     console.log(`Kết quả của phép tính là: ${result}`);
// } else if (calculator === "/") {
//     result = number1 / number2;
//     console.log(`Kết quả của phép tính là: ${result}`);
// } else {
//     console.log(`Nhập sai phép toán, mời nhập lại!`);
// }

//switch case
switch (calculator) {
    case "+":
        result = number1 + number2;
        console.log(`Kết quả của phép tính là: ${result}`);
        break;
    case "-":
        result = number1 - number2;
        console.log(`Kết quả của phép tính là: ${result}`);
        break;
    case "*":
        result = number1 * number2;
        console.log(`Kết quả của phép tính là: ${result}`);
        break;
    case "/":
        result = number1 / number2;
        console.log(`Kết quả của phép tính là: ${result}`);
        break;
    default:
        console.log(`Nhập sai phép toán, mời nhập lại!`);
        break;
}