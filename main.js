function problema1(){
    var x = parseInt(prompt("inserire primo numero"));
    var y = parseInt(prompt("inserire secondo numero"));
    var maggiore = 0;
    if (x>y){
        maggiore = x;
    }
    else{
        maggiore = y;
    }
    console.log(maggiore);
    document.getElementById("p1").innerHTML= maggiore + " è il numero maggiore";
}

function problema2(){
    var x = prompt("inserire prima parola");
    var y = prompt("inserire seconda parola");
    var lunga = 0;
    if(x.length>y.length){
        lunga = x;
    }
    else{
        lunga = y;
    }
    document.getElementById("p2").innerHTML= lunga + " è la p'arola più lunga";
}