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

module.exports = { capitalize, reverseString };
