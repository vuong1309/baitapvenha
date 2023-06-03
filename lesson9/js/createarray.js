let arrFootballPlayer = ["Ronaldo", "Messi", "Neymar"];

let askQuestion = prompt(`Do you want to add more football player? "Y" or "N"`);
switch (askQuestion) {
    case "Y":
        let newPlayer = prompt(`Please write down the name of a player?`);
        arrFootballPlayer.push(newPlayer);
        console.log(arrFootballPlayer);
        break;
    case "N":
        console.log(`Good Bye!`);
    default:
        break;
}