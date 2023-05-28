let i = parseFloat(prompt(`Nhập 1 số bất kỳ: `));
let j = null;
let k = null;
if (i < 2) {
    console.log(`Không có số nào thỏa mãn yêu cầu`);
} else {
    for (let j = 2; j <= i; j++) {
        let prime = j;
        for (let k = 2; k <= Math.sqrt(j); k++) {
            if (j % k === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(j);
        }
    }
}