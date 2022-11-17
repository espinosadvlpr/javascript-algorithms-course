function palindrome(str) {
    var regularExpresion = /[^A-Za-z0-9]/g;
    var lowerStr = str.toLowerCase().replace(regularExpresion, '');
    var reverseStr = lowerStr.split('').reverse().join('');
    return reverseStr === lowerStr;
}

const phrases = ["eye", "_eye", "race car", "not a palindrome", "A man, a plan, a canal. Panama", "nope", "0_0 (: /-\ :) 0-0"]
phrases.forEach(phrase => console.log(phrase, palindrome(phrase)));