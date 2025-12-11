import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('03_input.txt', 'utf8');
const splitArray = content.split('\r\n');
const input = splitArray.filter(line => line.trim() !== '');

let totalValue = 0;

for (let line of input) {
    let number1 = 0;
    let indexNumber1 = -1;
    let number2 = 0;
    const lineArray = line.split('');
    for (let i = 0; i <= lineArray.length; i++) {
        if(number1 < lineArray[i] && i < lineArray.length -1){
            number1 = parseInt(lineArray[i], 10);
            indexNumber1 = i;
        }
    }

    for (let i = indexNumber1 +1; i <= lineArray.length; i++) {
        if(number2 < lineArray[i]){
            number2 = parseInt(lineArray[i], 10);
        }
    }
    const concatenatedNumber = parseInt(number1.toString() + number2.toString(), 10);
    totalValue += concatenatedNumber;
}

log("Total Value: ", totalValue);