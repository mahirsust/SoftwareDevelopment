"use strict"
var x = 21;
function myfunc(){
    var x = 23;
    console.log(`${x} is in myfunc()`);
}
myfunc();
console.log(x);