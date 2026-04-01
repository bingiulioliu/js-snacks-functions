/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

const inizialiNomi = [];

// Dichiara la funzione qui.
function firstLetter(nome) {
    for (let i = 0; i < nome.length; i++) {
        inizialiNomi.push(nome[i][0]); // scorri la lista e prendi per ognuno l'indice zero
    }
}

// Invoca la funzione qui e stampa il risultato in console
firstLetter(names);
console.log(inizialiNomi);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]