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

function problema5(){
    var dispari = [];
    var count = 0;
    for (let i=0; i<6; i++){
        var x = parseInt(prompt("inserisci numero"));
        if(x%2 == 1){
            dispari[count] = x;
            count++
        }
        console.log(dispari);
    }
}

function problema6(){
    var x = parseInt(prompt("inserisci numero di numeri a cui calcolare il cubo"));
    for (let i=0; i<x; i++){
        var num = parseInt(prompt("inserisci numero di cui calcolare il cubo"));
        num = num*num*num;
        console.log(num);
        document.getElementById("p6").innerHTML += "  " + num;
    }
}

function problema7(){
    var x = 1;
    document.getElementById("p7").innerHTML +=x;
    for (x=1; x<1000;x++){
        x = x*2;
        if(x<1000){
            document.getElementById("p7").innerHTML +="  " + x;
        }    
        x= x-1
    }
}

function problema8(){
    var x = (prompt("inserisci un numero di 4 cifre"))
    var tot = 0;
    console.log(x.length);
    if (x.length == 4){
        for (let i=0;i<4;i++){
            y = x.charAt(i);
            y=parseInt(y);
            tot = tot + y;
            console.log(tot);
        }
    document.getElementById("p8").innerHTML = "il totale dei singoli numeri è  " + tot;    
    }
    else{
        alert("Il tuo numero non soddisfa le richieste indicate!")
    }
}