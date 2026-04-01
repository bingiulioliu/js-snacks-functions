/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
//let hours = now.getHours();

// Dichiara la funzione qui.
function saluti(nome) {
    let currentHour = new Date().getHours();
    if (currentHour <= 13){
        return console.log(`Buongiorno ${nome}`);
    } else if (currentHour <=17){
        return console.log(`Buon pomeriggio ${nome}`);
    } else
        return console.log(`Buonasera ${nome}`);
}


// Invoca la funzione qui e stampa il risultato in console
saluti(name);





//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.