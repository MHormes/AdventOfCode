import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('03_input.txt', 'utf8');
const splitArray = content.split('\r\n');
const input = splitArray.filter(line => line.trim() !== '');

let totalValue = 0;

for (let line of input) {
    let number1 = 0;

    const lineArray = line.split('');
    let answerArray = [];
    let indexArray = [];

    for (let [i,number] of lineArray.entries()) {
        if (number1 < number && i < lineArray.length - 11) {
            number1 = parseInt(lineArray[i], 10);
            answerArray[0] = number1;
            indexArray[0] = i;
        }
    }

    for (let answerArrayCurrentIndex = 1; answerArrayCurrentIndex <= 11; answerArrayCurrentIndex++) {
        for (let lineCurrentIndex = indexArray[answerArrayCurrentIndex-1] + 1; lineCurrentIndex <= lineArray.length; lineCurrentIndex++) {
            if (!answerArray[answerArrayCurrentIndex] || (answerArray[answerArrayCurrentIndex] < lineArray[lineCurrentIndex] && lineCurrentIndex < lineArray.length - (11 - answerArrayCurrentIndex))) {
                answerArray[answerArrayCurrentIndex] = parseInt(lineArray[lineCurrentIndex], 10);
                indexArray[answerArrayCurrentIndex] = lineCurrentIndex;
            }
        }
    }

    log(answerArray);

    const concatenatedNumber = parseInt(answerArray.join(''), 10);
    totalValue += concatenatedNumber;
}

log("Total Value: ", totalValue);