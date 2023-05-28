// ax2 + bx + c = 0

let a = parseFloat(prompt(`Nhập giá trị của a:`));
let b = parseFloat(prompt(`Nhập giá trị của b:`));
let c = parseFloat(prompt(`Nhập giá trị của c:`));
let delta = null;
let result1 = null;
let result2 = null;
if (a === 0) {
    console.log(`Phương trình có 1 nghiệm: ${-c / b}`);
} else {
    delta = (b ** 2 - 4 * a * c);
    if (delta < 0) {
        console.log(`Phương trình vô nghiệm`);
    } else if (delta === 0) {
        console.log(`Phương trình có 1 nghiệm: ${-b / (2 * a)}`);
    } else {
        result1 = (-b + Math.sqrt(delta)) / (2 * a);
        result2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm: ${result1}, ${result2}`);
    }
}

