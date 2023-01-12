function readTableRow(input) {
    let sortedInput = Array.from(input).sort();
    for (var i = 0; i < sortedInput.length; i++) {

        if (sortedInput[i] === sortedInput[i + 1] || sortedInput[i] > 9 || sortedInput[i] < 1) {
            return false;
        }
    }
    return true;
}