let arrFootballPlayer = ["Ronaldo", "Messi", "Neymar"];

//print position & player name
for (let i = 0; i < arrFootballPlayer.length; i++) {
    console.log(`Position ${i + 1}:`, arrFootballPlayer[i]);
}

//update player name
let deletePlayer = prompt(`Do you want to delete any players? "Y" or "N"`);
switch (deletePlayer) {
    case "Y":
        let deletePos = parseFloat(prompt(`Please input a position number:`));
        if (arrFootballPlayer[deletePos - 1] === undefined) {
            console.log(`Please input a number again!`);
        } else {
            arrFootballPlayer.splice(deletePos - 1, 1);
            console.log(arrFootballPlayer);
        }
        break;
    case "N":
        console.log(`Good Bye!`);
        break;
    default:
        break;
}