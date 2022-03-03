// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola').toLocaleLowerCase().trim();

/**Function that checks if a word is palindrome
 * 
 * @param {*} word word to be checked
 * @returns true if the word is palindrome, otherwise returs false.
 */
function isPalindrome (word) {
	const wordArray = Array.from(word);
	const reversedWordArray = [...wordArray].reverse();
	const reversedWord = reversedWordArray.join('');
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


/**Function that created a random integer between two values
 * 
 * @param {*} min minimum value of the random integer 
 * @param {*} max maximum value of the random integer 
 * @returns a random integer between a min and a max value
 */
function randomInt (min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

/**Function that checks if a number is even
 * 
 * @param {*} number number to be checked
 * @returns true if number is even, otherwise returns false
 */
function isEven (number) {
	if ( number % 2 === 0) {
		return true
	}
	return false
}

const userChoice = prompt('Pari o Dispari?').toLowerCase().trim();
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

while ((isNaN(userNumber)) || (userNumber > 5) || (userNumber < 1)) {
	userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

const randomNumber = randomInt(1, 5);

let sum = userNumber + randomNumber;

console.log(`
User choose : ${userChoice}
user number : ${userNumber}
AI number : ${randomNumber}
Sum : ${sum}
`);

if ((isEven(sum)) && (userChoice == 'pari') || (!isEven(sum)) && (userChoice == 'dispari') ) {
	console.log('Hai vinto!');
} else{
	console.log('Hai perso!');
}









