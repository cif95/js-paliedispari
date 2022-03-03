// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const userWord = prompt('Inserisci una parola');



/**Function that checks if a word is palindrome
 * 
 * @param {*} word word to be checked
 * @returns true if the word is palindrome, otherwise returs false.
 */
function isPalindrome (word) {
	const wordArray = Array.from(word);
	console.log(wordArray);
	const reversedWordArray = [...wordArray].reverse();
	console.log(reversedWordArray);
	const reversedWord = reversedWordArray.join('');
	console.log(reversedWord);
	if ( word === reversedWord) {
		return true
	}
	return false
}

console.log(isPalindrome(userWord));




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.