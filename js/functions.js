// → 1 ←
const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('длина строки - 17', 22);
checkStringLength('длина строки - 17', 17);
checkStringLength('длина строки - 17', 15);

// → 2 ←
const checkPalindrome = function(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return string === reverseString;
};

checkPalindrome('топот');
checkPalindrome('ДохОд');
checkPalindrome('Барсик');
checkPalindrome('      Тут  как ту т ');

// → 3 ←
const extractNumber = function(input) {
  const string = input.toString().replaceAll(' ', '');
  let output = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      output += string[i];
    }
  }

  return parseInt(output, 10);
};

extractNumber('2077 год');
extractNumber('2 банана, 1.5 листа');
extractNumber('agent 007');
extractNumber('где помидор???');
extractNumber(-2023.10);

