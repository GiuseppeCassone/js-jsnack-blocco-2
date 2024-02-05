// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
let userNumber = Number(prompt("Inserisci un numero"));

while (isNaN(userNumber)) {
    alert("Inserisci un numero valido");
    userNumber = Number(prompt("Inserisci un numero"));

}

if (userNumber % 2 === 0) {

    document.getElementById(`result`).innerHTML = userNumber;

} else {

    document.getElementById(`result`).innerHTML = userNumber + 1;

}