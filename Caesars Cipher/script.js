var alphabet = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M'
};

function rot13(str) {
    var encoded = str.split("");
    var decoded = [];

    decoded = encoded.map(function (letter) {
        if (alphabet.hasOwnProperty(letter)) {
            letter = alphabet[letter];
        }
        return letter;
    });
    return decoded.join("");
}

const encodedStrings = ["SERR PBQR PNZC", "SERR CVMMN!", "SERR YBIR?", "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."]
encodedStrings.forEach(string => console.log(rot13(string)));