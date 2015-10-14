function Multiples() {
    var x = document.getElementById("pr1_input").value;
    var sum = 0;
    var multiple3 = 0;
    var multiple5 = 0;
    for (var i=1; i<x; i++) {
        if (i%3 == 0) {
            multiple3 = i;
        }
        if (i%5 == 0) {
            multiple5 = i;
        }
        if (multiple3 === multiple5) {
            sum += multiple3;
        } else {
            sum += multiple3;
            sum += multiple5;
        }
        multiple3 = 0;
        multiple5 = 0;
    }
    document.getElementById("result").innerHTML = sum;
};