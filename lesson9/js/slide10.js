let i = parseFloat(prompt(`Nhap vao 1 so bat ky:`));
if (isNaN(i)) {
    console.log(`Nhap lai gia tri!`);
} else {
    // console.log(i);
}

//bai tap a
//in ra so chan
// for (let j = 0; j < i; j += 2) {
//     console.log(j);
// }


//in ra so le
// for (let j = 1; j < i; j += 2) {
//     console.log(j);
// }


//**************************************************

//bai tap b
// let j = i.toString(2);
// console.log(j);

//**************************************************

//bai tap c
// let total = 1;
// if (i < 0) {
//     console.log(`Nhap lai gia tri!`);
// } else if (i === 0) {
//     console.log(`0! = 1`);
// } else {
//     for (let j = 1; j <= i; j++) {
//         total = total * j;
//     }
//     console.log(`Ket qua cua ${i}! la: ${total}`);
// }

//**************************************************

//bai tap d
// let total = 0;
// for (let j = 0; j <= i; j++) {
//     total = total + j;
// }
// console.log(total);

//**************************************************

//bai tap e
// if (i === 0) {
//     console.log(`Mọi số khác 0 đều là ước của 0`);
// } else {
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             console.log(j);
//         }
//     }
// }

//**************************************************

//bai tap f
// if (i <= 1) {
//     console.log(`Số ${i} không phải là số nguyên tố`);
// } else {
//     let prime = i;
//     for (j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             prime = false;
//             break;
//         }
//     }
//     if (prime) {
//         console.log(`Số ${i} là số nguyên tố`);
//     } else {
//         console.log(`Số ${i} không phải là số nguyên tố`);
//     }
// }

//**************************************************

//bai tap g

//hinh vuong dac
// let square = "";
// for (let row = 1; row <= i; row++) {
//     for (let column = 1; column <= i; column++) {
//         square = square + "* ";
//     }
//     square = square + "\n";
// }
// console.log(square);

//hinh vuong rong
// let square = "";
// for (let row = 1; row <= i; row++) {
//     for (let column = 1; column <= i; column++) {
//         if (row === 1 || row === i || column === 1 || column === i) {
//             square = square + "* ";
//         } else {
//             square = square + "  ";
//         }
//     }
//     square = square + "\n";
// }
// console.log(square);

//**************************************************

//bai tap h (hinh vuong can)
// let square = "";
// for (let j = 1; j <= i; j++) {
//     for (let k = 1; k <= i - j; k++) {
//         square = square + " ";
//     }
//     for (let k = 1; k <= j; k++) {
//         square = square + "* ";
//     }
//     square = square + "\n";
// }
// console.log(square);



