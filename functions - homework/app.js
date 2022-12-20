console.log("it works");

// Exercise 1
function getTypeOfVariable(input) {
    console.log(typeof input);
}

getTypeOfVariable(true)
getTypeOfVariable(3)
getTypeOfVariable("siuuu")
getTypeOfVariable()
getTypeOfVariable(null)

// Exercise 2

function humanToDogAge(humanAge) {
    const dogAge = 7;
    let result = humanAge * dogAge;
    return result;
}

console.log("Human age in Dog Years is:", humanToDogAge(20));

function dogToHumanAge(humanAge) {
    const dogAge = 7;
    let result = humanAge / dogAge;
    return result;
}

console.log ("Dog age in Human Years is:", dogToHumanAge(21));

// Exercise 3
function atm(){
    let moneyInBank = prompt("Enter the amount of money in your account");
    let moneyToWithdraw = parseInt(prompt("Enter the amount of money you want to withdraw"));
    let moneyLeft = moneyInBank - moneyToWithdraw;
    if (moneyToWithdraw >= moneyInBank) {
        console.log("Not enough money in your bank account");} 
    if (moneyInBank >= moneyToWithdraw) {
        console.log(`You just took ${moneyToWithdraw} from your account and you have ${moneyLeft} in your account`);
    }
}
atm()

