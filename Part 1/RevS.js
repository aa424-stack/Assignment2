function ReverseString(str) {
    // Convert the string into an array of characters
    return str.split('').reverse().join('');
}

document.getElementById('RSButton').addEventListener('click', function() {
    var input = document.getElementById('inputString').value;
    var reversed = ReverseString(input);
    document.getElementById('outputString').value = reversed;
});
