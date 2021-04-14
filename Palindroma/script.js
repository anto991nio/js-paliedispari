/* Chiedo all'utente di inserire una Parola */
var parola = prompt("Inserisci una parola");

/* Effettuo una verifica per vedere se l'utente ha inserito una parola o un numero */
var verificaParola = parseInt(parola);
if(!Number.isNaN(verificaParola)){
    alert("Hai inserito un numero");
}else{

    /* se ha inserito una parola la inverto */

var parolaInversa = invertiParola(parola); 

/* questa parola viene invertita tramite una funzione, utilizzando .split trasformo la mia stringa in un array, utilizzo .reverse per invertire l'ordine e . join per ritrasformarmo in una stringa. */
function invertiParola(parola){
  var risultatoParola = parola.split('').reverse().join('');  
  return risultatoParola;
}
/* a questo punto basta semplicemente verificare se la parola inserita e la parola invertita sono uguale riducendole tutte in minuscolo così anche se l'utente inserisce una lettera maiuscola il controllo può essere effettuato */
if(parola.toLowerCase() == parolaInversa.toLowerCase()){
    console.log("la parola" + " " + parola + " " +"è palindroma");
  } else {
    console.log("la parola" + " " + parola + " " + "non è palindroma");
  }
}