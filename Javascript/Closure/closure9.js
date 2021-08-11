function stopwatch(){
    var startTime=Date.now();
    function getdelay(){
        console.log(Date.now()-startTime);
    }
    return getdelay;
}
var timer=stopwatch();
for( var i=0; i<1000000; i++)
{
    var sum=i+Math.random();
}
timer();
timer();
console.dir(timer);
timer=null;
timer();