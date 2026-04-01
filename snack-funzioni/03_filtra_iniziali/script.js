/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
//if [i][0] = (name)

// Dichiara la funzione qui.
function sceltaEletti(lista, lettera) {
    const nuovoArray = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][0] === lettera) {
        nuovoArray.push(lista[i]);
        }
    }
    return nuovoArray;
}

// Arrow
const sceltaElettiArrow = (lista, lettera) => {
    const nuovoArrayArrow = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][0] === lettera) {
        nuovoArrayArrow.push(lista[i]);
        }
    }
    return nuovoArrayArrow;
}

// Invoca la funzione qui e stampa il risultato in console
const presceltiA = sceltaEletti(names, 'A');
console.log(presceltiA);
const presceltiL = sceltaEletti(names, 'L');
console.log(presceltiL);
const presceltiAA = sceltaElettiArrow(names, 'A');
console.log(presceltiAA);
const presceltiAL = sceltaElettiArrow(names, 'L');
console.log(presceltiAL);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]