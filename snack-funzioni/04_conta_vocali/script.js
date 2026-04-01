/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const word2 = 'aiuole';


// Dichiara la funzione qui.
function vocalizzatore(parola) {
    const scomponiParola = parola.split('');
    const vocali = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const nuovaParola = [];
    let nuovissimaParola;
    
    for (let i = 0; i < scomponiParola.length; i++) {
        if (vocali.includes(scomponiParola[i])) {
            nuovaParola.push(scomponiParola[i]);
        }
    }
    nuovissimaParola = nuovaParola.join('');
    return nuovissimaParola;
}
// arrow
const vocalizzatoreArrow = (parola) => {
    const scomponiParola = parola.split('');
    const vocali = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const nuovaParola = [];
    let nuovissimaParola;
    
    for (let i = 0; i < scomponiParola.length; i++) {
        if (vocali.includes(scomponiParola[i])) {
            nuovaParola.push(scomponiParola[i]);
        }
    }
    nuovissimaParola = nuovaParola.join('');
    return nuovissimaParola;
}

// Invoca la funzione qui e stampa il risultato in console
let parolaVocali =vocalizzatore(word);
console.log(parolaVocali);

let parolaVocaliArrow =vocalizzatoreArrow(word2);
console.log(parolaVocaliArrow);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)