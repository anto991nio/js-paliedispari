/* Chiedo all'utente di inserire una Parola */
var parola = prompt("Inserisci una parola");

/* Effettuo una verifica per vedere se l'utente ha inserito una parola o un numero */
var verificaParola = parseInt(parola);
if (!Number.isNaN(verificaParola)) {
  alert("Hai inserito un numero");
}else{

/* se ha inserito una parola la inverto */


/* questa parola viene invertita tramite un ciclo for*/

var parolaInvertita = ""
for (var i = parola.length - 1; i >= 0; i--) {
  parolaInvertita += parola[i];
}

/* a questo punto basta semplicemente verificare se la parola inserita e la parola invertita sono uguale riducendole tutte in minuscolo così anche se l'utente inserisce una lettera maiuscola il controllo può essere effettuato */


function parolaPalindroma(parolaOriginale , parolaDaControllare) {
  if (parolaOriginale.toLowerCase() == parolaDaControllare.toLowerCase()) {
    return "la parola" + " " + parola + " " + "è palindroma";

  } else {
    return ("la parola" + " " + parola + " " + "non è palindroma");
  }

}
console.log(parolaPalindroma(parola , parolaInvertita));
}
