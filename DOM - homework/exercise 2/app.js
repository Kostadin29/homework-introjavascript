console.log("it works");

const numbers = [2, 4, 5];

const num = document.getElementById("num");
const sum = document.getElementById("sum")

function printGrades(numbers) {
    let sumOfNumbers = 0;
    num.innerHTML = "";

    let liContent = "";

    for (let number of numbers) {
        num.innerHTML += `<li>${number}</li>`;
        sumOfNumbers += number;
    }
    num.innerHTML += `<ul>${liContent}</ul>`;
    sum.innerHTML += `${sumOfNumbers}`
}

printGrades(numbers)
