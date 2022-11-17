function convertToRoman(num) {
    var romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var roman = '';
    for (const key in romanValues) {
        while (num >= romanValues[key]) {
            num -= romanValues[key];
            roman += key;
        }
    }
    return roman;
}

for (j = 1; j < 15; j++) {
    console.log("El número " + j + " en romano es: " + convertToRoman(j));
}