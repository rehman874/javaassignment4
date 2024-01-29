var number = (prompt("Enter a number:"));

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
// 5! 
    var num = 5;
    var factorial = 1;
    var i = 1;

    while (i <= num) {
        factorial *= i;
        i++;
    }
    document.write("Factorial of " + num + " is: " + factorial );