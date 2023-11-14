document.getElementById('calculate').addEventListener('click', function() {
    var numberInput = document.getElementById('numberInput');
    var outputDiv = document.getElementById('output');
    var number = parseInt(numberInput.value);

    if (!isNaN(number) && number >= 0) {
        var factorial = 1;
        for (var i = 1; i <= number; i++) {
            factorial *= i;
        }
        outputDiv.innerHTML = 'Factorial of ' + number + ' is: ' + factorial;
    } else {
        outputDiv.innerHTML = 'Please enter a non-negative number.';
    }
});
