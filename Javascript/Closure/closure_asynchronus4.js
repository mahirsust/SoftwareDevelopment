for( let i=0; i<3; i++)
{
    const myfunction = ()=>{
        console.log(i);
    }
    console.log(i);
    console.dir(myfunction);
    setTimeout(myfunction, 3000);
}

console.log("After for loop");
console.log("------------------");
for( var i=0; i<3; i++)
{
    const myfunction = ()=>{
        console.log(i);
    }
    console.log(i);
    console.dir(myfunction);
    setTimeout(myfunction, 3000);
}

console.log("After for loop");