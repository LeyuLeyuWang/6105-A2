function addNumbers() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = Number(num1) + Number(num2);
    document.getElementById('result').innerHTML = "The result is: " + sum;
}

function multiplyNumbers() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var product = Number(num1) * Number(num2);
    document.getElementById('result').innerHTML = "The result is: " + product;
}
