var i=0
var text= "Love to Hangout?"
var speed= 50;
function type(){
    document.getElementById("were").innerHTML+=text.charAt(i)
    i++
    setTimeout(type,speed);
}

type()