if(true)
{
    //var is working on function scope
    var varVariable="This is var";
    var varVariable="This is var again";
}
console.log(varVariable);
if(true)
{
    //let is working on block scope
    //variable can declare only once
    let letVariable="This is let";
    //let letVariable="This is let again";
    letVariable="This is new let";
    console.log(letVariable);
}
//console.log(letVariable);
if(true)
{
    //let and const works same
    //same const variable cannot redefined
    const constVariable="This is const";
    //const constVariable="This is const again";
    //constVariable="This is new const";
    console.log(constVariable);
}
//console.log(letVariable);
if(true)
{
    const constObject={
        Name: "Muhammad Mahir Hasan Chowdhury",
        Programmer: "C++"
    };
    //const can update an Object Property
    constObject.Programmer="C++ and JS";
    console.log(constObject);
}