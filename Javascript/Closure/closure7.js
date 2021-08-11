//Global is closure
//braces is closure
(function(){var num1=15;
var sum = function(){
    var num2=6, num=3;
    return function(){
        return num1+num2;
    }
}
var myFunction=sum();
console.dir(myFunction);
})();