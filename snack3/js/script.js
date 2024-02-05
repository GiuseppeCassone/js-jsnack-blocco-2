// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. 
// (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5

let array1 = [1,2,3];
let array2 = [1,2,3,4,5];

while (array1.length !== array2.length) {

    if(array1.length < array2.length) {

        array1.push(prompt("Inserisci un numero"));

    }
}

console.log("1:" + array1);
console.log("2:" + array2);