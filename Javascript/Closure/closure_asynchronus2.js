var string;
function async(){
    string="I";
    function myfunc(){
        console.log(string);
        console.log("Love's");
        console.log("javascript");   
    }
    setTimeout(myfunc, 3000);
    console.dir(myfunc);
}
async();
string = "Mahir";