var num1=15;
var sum = function(){
    var num2=6;
    return function(){
        return num1;
    }
}
var myFunction=sum();
console.dir(myFunction);