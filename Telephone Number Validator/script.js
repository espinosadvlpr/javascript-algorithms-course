function telephoneCheck(str) {
    return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}

const phones = ["555-555-5555", "1 555-555-5555", "1 (555) 555-5555", "555-5555", "2 (757) 622-7382"];
phones.forEach(phone => console.log(telephoneCheck(phone)));