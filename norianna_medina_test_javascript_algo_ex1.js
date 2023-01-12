//create table 9x9
const SIZE = 9;
const table = new Array(9).fill().map(() => new Array(9).fill(0));

readData();

createTableHTML(table);


//Function that read data and transfer the data to the table
function readData() {
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            table[row][col] = array_number[row].split(' ')[col];
        }
    }
}


//Display the content of the table in a htlm table
function createTableHTML(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}
