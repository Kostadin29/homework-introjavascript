console.log("it works");

const button = document.getElementById("button");

function createTable() {
    let rows = window.prompt("Input number of rows");
    let columns = window.prompt("Input number of columns");

    for (let i = 0; i < parseInt(rows, 10); i++) {

        let table = document.getElementById("myTable").insertRow(i);

        for (let j = 0; j < parseInt(columns, 10); j++) {

            let y = table.insertCell(j);
            y.innerHTML = "Row-" + i + " Column-" + j;
        }
    }
}

button.addEventListener("click", createTable)