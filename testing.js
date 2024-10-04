function capitalize(prop) {
  return prop.charAt(0).toUpperCase() + prop.slice(1);
}

function reverseString(prop) {
  const stringToArr = prop.split("");
  const newArr = [];

  for (let i = prop.length - 1; i >= 0; i--) {
    newArr.push(stringToArr[i]);
  }

  return newArr.join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

function changeLetter(char) {
  if (/[a-zA-Z]/.test(char)) {
    let isUpperCase = false;

    if (char === char.toUpperCase()) {
      isUpperCase = true;
      char = char.toLowerCase();
    }

    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    let changedChar = alphabet[alphabet.indexOf(char) + 3];

    return isUpperCase ? changedChar.toUpperCase() : changedChar;
  } else {
    return char;
  }
}

function caesarCipher(str) {
  let splitString = str.split("");
  let arrayToJoin = [];
  for (let i = 0; i < splitString.length; i++) {
    arrayToJoin.push(changeLetter(splitString[i]));
  }
  let newString = arrayToJoin.join("");
  return newString;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
