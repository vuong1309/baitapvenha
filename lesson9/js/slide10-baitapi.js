let i = parseFloat(prompt(`Nhap so thu nhat:`));
let j = parseFloat(prompt(`Nhap so thu hai:`));
let ucln;
let bcnn;


//tim uoc so chung lon nhat
if (i === 0 && j === 0) {
    console.log(`Nhap lai gia tri!`);
} else if (i === 0 && j !== 0) {
    console.log(`Ước chung lớn nhất là: ${j}, không có bội số chung nhỏ nhất`);
} else if (j === 0 && i !== 0) {
    console.log(`Ước chung lớn nhất là: ${i}, không có bội số chung nhỏ nhất`);
} else {
    for (let k = 1; k <= i && k <= j; k++) {
        if (i % k === 0 && j % k === 0) {
            ucln = k;
        }
    }
    //tim boi so chung nho nhat
    bcnn = (i * j) / ucln;
    console.log(`Ước chung lớn nhất của ${i} và ${j} là:`, ucln);
    console.log(`Bội chung nhỏ nhất của ${i} và ${j} là:`, bcnn);
}




