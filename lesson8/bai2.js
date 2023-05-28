let number = parseFloat(prompt(`Nhập 1 số bất kỳ: `));
if (number % 3 === 0) {
    console.log(`Số ${number} chia hết cho 3, kết quả được: ${number / 3}`);
} else {
    console.log(`Số ${number} không chia hết cho 3`);
}