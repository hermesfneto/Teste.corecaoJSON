function normalize(input) {
    return input.replace(/ø/gi, "o")
        .replace(/æ/gi, "a")
        .replace(/¢/gi, "c")
        .replace(/ß/gi, "b");
} //https://www.w3schools.com/jsref/jsref_replace.asp