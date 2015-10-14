function Fibonacci() {
    var x = document.getElementById("pr2_input").value;
    var fibPrevious = 1;
    var fibCurrent = 2;
    var fibNext = 0;
    var evenSum = 2;

    while (fibCurrent <= x) {
        fibNext = fibCurrent + fibPrevious;
        fibPrevious = fibCurrent;
        fibCurrent = fibNext;
        if (fibCurrent <= x && fibCurrent%2 === 0) {

            evenSum += fibCurrent;
        }
    }
    document.getElementById("result").innerHTML = evenSum;
};