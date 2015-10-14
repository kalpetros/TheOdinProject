// Source: 
// http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
function Lpf() {
    var x = document.getElementById("pr3_input").value;
    // create a boolean array for every consecutive integer up
    // to and including sqrt(number).
    var cutoffInteger = Math.ceil(Math.sqrt(x));
    var sieveArray = [];
    for (var idx = 0; idx <= cutoffInteger; idx++) {
        sieveArray.push(true);
    }
    
    // Check all itegers between 2 <= integer <= cutoffInteger for prime.
    for (var integer = 2; integer <= cutoffInteger; integer++){
        if (sieveArray[integer]) {
            for (var idxSkip = 2*integer; idxSkip <= cutoffInteger; 
                idxSkip += integer) {
                sieveArray[idxSkip] = false;
            }
        }
    }
        
    // return the largest prive factor in sieveArray.
    for (var idx = cutoffInteger; idx >= 2; idx--) {    
        if (sieveArray[idx] && x%idx === 0){
            document.getElementById("result").innerHTML = idx;
        }
    }
};