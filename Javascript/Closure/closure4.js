function bankAccount(initialBalance){
    var balance = initialBalance;
    return function(){
        return balance;
    }
}
var myAccount = bankAccount(1000000);
console.log(myAccount());