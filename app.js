console.log("Hello, World!");

function add5andy(y) {console.log(5 + y)}
add5andy(50)
add5andy(100)

const usernumber = prompt("Enter a number:")
console.log (usernumber)

const friendsnumber = 55
function alerttheuser (number) {
    alert ("your number was " + number + "!") }
alerttheuser(usernumber)
alerttheuser(friendsnumber)

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(20, 30)
sum(100, 200)


function calculate (a, b, operator) {
    if (operator === "+") {
        return a + b
    } else if (operator === "-") {
        return a - b
    } else if (operator === "*") {
        return a * b
    } else if (operator === "/") {
        return a / b 
} }

console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "-"))
console.log(calculate(10, 5, "*"))
console.log(calculate(10, 5, "/"))