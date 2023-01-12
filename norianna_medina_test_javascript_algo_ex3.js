let anomalies = new Array();
CheckRows();
CheckColumns();
CheckRegion();

if (anomalies.length != 0)
    console.log(anomalies);
else
    console.log("the table is correct");

function CheckRows() {
    for (var i = 0; i < 9; i++) {
        if (!readTableRow(table[i])) {
            anomalies.push(`Line ${i + 1} incorrect ${table[i]}`);
        }
    }
}

function CheckColumns() {
    let column = [];
    for (let col = 0; col < SIZE; col++) {
        column = [];
        for (let row = 0; row < SIZE; row++) {
            column.push(table[row][col]);
        }
        if (!readTableRow(column)) {
            anomalies.push(`Column ${col + 1} incorrect ${column}`);
        }
    }
}

function CheckRegion() {
    let region1 = [];
    let region2 = [];
    let region3 = [];
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (col < 3) region1.push(table[row][col]);
            else if (col < 6) region2.push(table[row][col]);
            else region3.push(table[row][col]);
        }

        if (row === 2 || row === 5) {
            if (!readTableRow(region1)) anomalies.push(`Region incorrect ${region1}`);
            if (!readTableRow(region2)) anomalies.push(`Region incorrect ${region2}`);
            if (!readTableRow(region3)) anomalies.push(`Region incorrect ${region3}`);
            region1 = [];
            region2 = [];
            region3 = [];
        }
    }
}