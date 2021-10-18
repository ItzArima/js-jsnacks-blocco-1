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

function problema3(){
    var totale = 0;
    for (let i=0; i<10; i++){
        var x = parseInt(prompt("inserire numero"))
        totale = totale + x;
        console.log(totale);
    }
    document.getElementById("p3").innerHTML = totale + " è la somma dei 10 numeri";
}

function problema4(){
    invitati = [
        'Luca',
        'Gianni',
        'Mauro',
        'Lucia',
        'Pippo',
        'Cesare',
        'Franco',
        'Alessia',
        'Giulia',
        'Francesca'
    ]
    
    console.log(invitati);

    var x = prompt("Inserisci il tuo nome");
    x = x.charAt(0).toUpperCase() + x.slice(1);
    var verify = 0;
    for (let i=0; i<invitati.length; i++){
        if (x==invitati[i]){
            verify = 1;
            console.log(verify);
        }
    }
    if(verify == 1){
        document.getElementById("p4").innerHTML = "Sei nella lista puoi entrare!";
    }
    else{
        document.getElementById("p4").innerHTML = "Non sei nella lista non puoi entrare!";
    }
    console.log(x);
}