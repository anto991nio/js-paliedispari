
/* Chiedo all'utente di scegliere tra pari e dispari */
var pariDispari = prompt("Scegli pari o dispari")

/* modifico i caratteri in modo da poterli confrontare con il risultato */
pariDispari=pariDispari.toLowerCase();

/* chiedo all'utente di inserire un numero e se è corretto può proseguire */

var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

if (Number.isNaN(userNumber) || userNumber < 0 || userNumber > 5) {
    alert("Hai inserito un carattere o un numero non valido")
}

console.log(userNumber)

/* con una funzione genero un numero da 1 a 5 per il computer */
function generaNumeroComputer() {
    return Math.ceil(Math.random() * 5)

}

var numeroCpu = generaNumeroComputer();
console.log(numeroCpu);


/* sommo i due numeri */
var somma = userNumber + numeroCpu;
console.log(somma);


 /* con una funziona verifico se sono pari o dispari */
function sommaPariDispari() {

    if (somma % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

var vincitore = sommaPariDispari();

/*  confronto il risultato con quello immesso dall'utente per verificare se ha vinto o meno */

if(vincitore ===pariDispari){
    console.log("Hai vinto");
}else{
    console.log("Hai perso");
}
