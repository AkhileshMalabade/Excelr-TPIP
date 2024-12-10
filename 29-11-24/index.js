const prompt = require('prompt-sync')();
const number = prompt('Enter number: ');

function printTable(number, multiplier = 1) {
    if (multiplier > 10) return; 
    console.log(`${number} x ${multiplier} = ${number * multiplier}`);
    printTable(number, multiplier + 1); 
    console.log("Printed");
}

printTable(number);