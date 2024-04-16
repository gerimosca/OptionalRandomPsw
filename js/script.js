const pswGeneratedElement = document.getElementById('psw-generated');
const pswLengthElement = document.getElementById('psw-length');
const rangeElement = document.getElementById('range');
const checkboxUpperElement = document.getElementById('checkbox-upper');
const checkboxLowerElement = document.getElementById('checkbox-lower');
const checkboxNumbersElement = document.getElementById('checkbox-numbers');
const checkboxSymbolsElement = document.getElementById('checkbox-symbols');
const buttonGenerateElement = document.getElementById('button-generate');
const buttonCopyElement = document.getElementById('button-copy');

const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const numbersCharacters = '0123456789';
const symbolsCharacters = '!`~@#$%^&*()_+-={}[ ]|:;"<>,.?/';

let allowedCharacters = '';

const rangeLength = (event) => {
  pswLengthElement.textContent = event.target.value;
};

const selectedCharactersOptions = () => {
  allowedCharacters = '';

  if (checkboxLowerElement.checked) {
    allowedCharacters += lowercaseCharacters;
  }
  if (checkboxNumbersElement.checked) {
    allowedCharacters += numbersCharacters;
  }
  if (checkboxUpperElement.checked) {
    allowedCharacters += uppercaseCharacters;
  }
  if (checkboxSymbolsElement.checked) {
    allowedCharacters += symbolsCharacters;
  }

  console.log(allowedCharacters);

  return allowedCharacters;
};

const passwordGenerated = () => {
  let newPassword = '';

  const length = rangeElement.value;

  for (let index = 0; index < length; index++) {
    const randomCharacter = Math.floor(Math.random() * allowedCharacters.length);
    newPassword += allowedCharacters[randomCharacter];
  }

  return newPassword;
};

const newPass = (event) => {
  pswGeneratedElement.value = passwordGenerated();
};

const passwordCopied = (event) => {
  pswGeneratedElement.value;
  console.log(passwordCopied);
};

rangeElement.addEventListener('input', rangeLength);

checkboxUpperElement.addEventListener('change', selectedCharactersOptions);
checkboxLowerElement.addEventListener('change', selectedCharactersOptions);
checkboxNumbersElement.addEventListener('change', selectedCharactersOptions);
checkboxSymbolsElement.addEventListener('change', selectedCharactersOptions);

buttonGenerateElement.addEventListener('click', newPass);
