let wins = 0;
const words = {
    thing1: 'one',
    thing2: 'two',
    thing3: 'three',
    thing4: 'four',
    thing5: 'five',
};
const guessesRemaining = 12;
const lettersGuessed = []
const alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

//shuffle function
const randomProperty = (obj) => {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

console.log(randomProperty(words));