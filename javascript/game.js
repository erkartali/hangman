let wins = 0;
const words = ['one','two','three','four','five'];
let guessesRemaining = 12;
let lettersGuessed = [];
let lettersOfWord = [];
let dashes = [];
const alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

//shuffle function
randomWord = words[Math.floor(Math.random() * words.length)];

// splits the word selected into individual letters
lettersOfWord = randomWord.split('');

// loop through the letters of the word and add dashes 
for (let i = 0; i < lettersOfWord.length; i++) {
    dashes.push('_');
}

    console.log(`dashes: ${dashes}`);

// get the key pressed by the user
document.onkeyup = (e) => {
    const keyPressed = e.key;

    if(alphabet.includes(keyPressed)) {

        // if key pressed IS NOT in lettersGuessed array
        if (!lettersGuessed.includes(keyPressed)) {

            // if letter guessed is in word
            if (keyPressed) {}

                // add to letters guessed array

                // replace _ with letter

                // if word is filled in completely

                    // run win function

            // if letter guessed is not in word

                // add letter to lettersGuessed array

                // reduce number of guesses remaining by 1

                // if guesses remaining is 0
                
                    // run you lose function 
        }

        console.log('balls');

    }
}

// output guesses remaining to html
document.getElementById('guesses-remaining').innerHTML = `<span>${guessesRemaining}</span>`;

// output wins to html
document.getElementById('wins').innerHTML = `<span>${wins}</span>`;

// output letters guessed to html
lettersGuessed.forEach(element => {
    document.getElementById("letters-guessed").innerHTML= JSON.stringify(lettersGuessed); 
 });

