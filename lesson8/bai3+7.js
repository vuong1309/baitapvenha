let yourMonthNum = parseFloat(prompt(`Enter the month of your birthday:`));
switch (yourMonthNum) {
    case 1:
        console.log(`Your birthday is on January`);
        break;
    case 2:
        console.log(`Your birthday is on February`);
        break;
    case 3:
        console.log(`Your birthday is on March`);
        break;
    case 4:
        console.log(`Your birthday is on April`);
        break;
    case 5:
        console.log(`Your birthday is on May`);
        break;
    case 6:
        console.log(`Your birthday is on June`);
        break;
    case 7:
        console.log(`Your birthday is on July`);
        break;
    case 8:
        console.log(`Your birthday is on August`);
        break;
    case 9:
        console.log(`Your birthday is on September`);
        break;
    case 10:
        console.log(`Your birthday is on October`);
        break;
    case 11:
        console.log(`Your birthday is on November`);
        break;
    case 12:
        console.log(`Your birthday is on December`);
        break;
    default:
        console.log(`Please re-input the month of your birthday again!`)
        break;
}

if (yourMonthNum === 1 || yourMonthNum === 2 || yourMonthNum === 3) {
    console.log(`Your birthday is on Spring`);
} else if (yourMonthNum === 4 || yourMonthNum === 5 || yourMonthNum === 6) {
    console.log(`Your birthday is on Summer`);
} else if (yourMonthNum === 7 || yourMonthNum === 8 || yourMonthNum === 9) {
    console.log(`Your birthday is on Autumn`);
} else if (yourMonthNum === 10 || yourMonthNum === 11 || yourMonthNum === 12) {
    console.log(`Your birthday is on Winter`);
}