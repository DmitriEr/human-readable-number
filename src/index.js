module.exports = function toReadable (number) {
    let simple = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let double = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
      if (number === 0) return "zero";
      if (number >= 20 && number < 100) {
        let first = Math.trunc(number / 10);
        let second = number % 10;
        return number % 10 != 0 ? double[first] + " " + simple[second] : double[first];
        };
      if (number >= 100 && number < 1000) {
        let first = Math.trunc(number / 100);
        let second = Math.trunc((number - first * 100) / 10);
          if (second < 2) {
            let A = number  - first * 100;
            return number % 100 != 0 ? simple[first] + " hundred " + simple[A] : simple[first] + " hundred"; 
            };
        let B = number - first * 100 - second * 10;
        return (number % 100) % 10 != 0 ? simple[first] + " hundred " + double[second] + " " + simple[B] : simple[first] + " hundred " + double[second];
        };
        return simple[number];
}