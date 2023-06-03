let arrFootballPlayer = ["Ronaldo", "Messi", "Neymar"];

//print position & player name
for (let i = 0; i < arrFootballPlayer.length; i++) {
    console.log(`Position ${i + 1}:`, arrFootballPlayer[i]);
}

//update player name
let updatePlayer = prompt(`Do you want to change any players? "Y" or "N"`);
switch (updatePlayer) {
    case "Y":
        let updatePos = parseFloat(prompt(`Please input a position number:`));
        let updateName = prompt(`Please input the name of new player:`);
        if (arrFootballPlayer[updatePos - 1] === undefined) {
            console.log(`Please input a number again!`);
        } else {
            arrFootballPlayer[updatePos - 1] = updateName;
            console.log(arrFootballPlayer);
        }
        break;
    case "N":
        console.log(`Good Bye!`);
        break;
    default:
        break;
}