// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

let arrayNumbers = [];

let sum = 0;

while (sum < 50){
    
    let userNumbers = Number(prompt("Inserisci un numero"));
    arrayNumbers.push(userNumbers);
    sum += userNumbers;

}
 console.log(sum)
