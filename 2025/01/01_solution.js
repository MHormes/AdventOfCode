import { log } from 'console';
import { readFile } from 'fs/promises';

var currentNumber = 50;
var zeroCount = 0;

const content = await readFile('01_input.txt', 'utf8');
const linesArray = content.split('\n');
const inputLines = linesArray.filter(line => line.trim() !== '');

for(let line of inputLines) {
    const direction = line.charAt(0);
    const number = parseInt(line.slice(1), 10);
    if(direction === "L"){
        currentNumber -= number;
        if(currentNumber < 0){
            while(currentNumber < 0){
                 currentNumber = 100 - Math.abs(currentNumber);
            }
           
        }
    }
    else if(direction === "R"){
        currentNumber += number;
        if(currentNumber === 100){
            currentNumber = 0;
        }else if(currentNumber > 100){
            while(currentNumber >= 100){
                currentNumber = currentNumber - 100;
            }
        }
    }
    if (currentNumber === 0) {
        zeroCount++;
    }
    log("Current Number: ", currentNumber);
}

log("Zero Count: ", zeroCount);