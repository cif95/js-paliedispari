// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/**Function that checks if a word is palindrome
 * 
 * @param {*} word word to be checked
 * @returns true if the word is palindrome, otherwise returs false.
 */
function isPalindrome (word) {
	return ([...Array.from(word)].reverse().join('') === word);
}

/**Function that adds HTML content inside DOM Element inner HTML
 * 
 * @param {*} DOMElement dom element where to add content
 * @param {*} content content that will be added
 * @returns the addition of content inside the dom element inner html
 */
function addHTMLContent (DOMElement, content) {
	return DOMElement.innerHTML = content;
}

const sectionPalindrome = document.querySelector('#palindrome');

const sectionTitle = document.createElement('h2');
addHTMLContent(sectionTitle, 'Check if your word is palindrome :');

const textInput = document.createElement('input');
textInput.type = 'text';
textInput.placeholder = "Insert your word";

sectionPalindrome.prepend(sectionTitle, textInput);

const outputElement = document.getElementById('output');


const checkBtn = document.querySelector('#check-palindrome');

checkBtn.addEventListener ( 'click', function() {
	addHTMLContent(outputElement, '');
	const userWord = textInput.value;
	if ( isPalindrome(userWord) === true ) {
		addHTMLContent(outputElement, 'It\'s palindrome!');
	} else {
		addHTMLContent(outputElement, 'It\'s not palindrome!');
	}
})




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
	return number % 2 === 0;
}


const playBtn = document.querySelector('#play');

play.addEventListener ( 'click', function() {
	const userChoice = prompt('Pari o Dispari?').toLowerCase().trim();
	let userNumber = '';

while ((isNaN(userNumber)) || (userNumber > 5) || (userNumber < 1)) {
	userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

const randomNumber = randomInt(1, 5);

let sum = userNumber + randomNumber;

alert(`
User choose : ${userChoice}
user number : ${userNumber}
aI number : ${randomNumber}
Sum : ${sum}
`);

if ((isEven(sum)) && (userChoice == 'pari') || (!isEven(sum)) && (userChoice == 'dispari') ) {
	alert('Hai vinto!');
} else{
	alert('Hai perso!');
}
})












