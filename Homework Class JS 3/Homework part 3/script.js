let availableCash = 1000;
let withdrawInput = 0;
function withdrawMoney(amount){
    if((availableCash - amount) < 0){
        alert("Not enough money. Your current balance is: " + availableCash.toFixed(2))
    }
    else {
        availableCash = availableCash - amount;
        alert("You withdraw: " + amount + ", on your account have left: " + availableCash)
    }
}

withdrawInput = parseInt(prompt("How much money do you want to withdraw?"));
withdrawMoney(withdrawInput);