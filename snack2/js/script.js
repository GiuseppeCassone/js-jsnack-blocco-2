// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero.
// Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!

const computerNumber = Math.floor(Math.random() * 100 + 1);

let userNumber;

let rightNumber = false;

do {

    userNumber = Number(prompt("Inserisci un numero da 1 a 100"));

    if (userNumber > computerNumber){

        alert("Il numero inserito è troppo alto!");

    } else if (userNumber < computerNumber) {

        alert("Il numero inserito è troppo basso!");

    } else {
        rightNumber = true;
        document.getElementById(`result`).innerHTML = "Il numero inserito è quello corretto";
    }

}

while (rightNumber !== true){

}