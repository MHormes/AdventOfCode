import { readFile } from 'fs/promises';
import { log } from 'console';

let currentNumber = 50;
let zeroCount = 0;

const content = await readFile('01_input.txt', 'utf8');
const linesArray = content.split('\n');
const inputLines = linesArray.filter(line => line.trim() !== '');

for (const line of inputLines) {
    const direction = line.charAt(0);
    const number = parseInt(line.slice(1), 10);


    for (let i = 0; i < number; i++) {

        if (direction === "L") {
            currentNumber -= 1;

            if (currentNumber < 0) {
                currentNumber = 99;
            }
        }
        else if (direction === "R") {
            currentNumber += 1;

            if (currentNumber > 99) {
                currentNumber = 0;
            }
        }

        if (currentNumber === 0) {
            zeroCount++;
        }

    }
}

log("Zero Count (Part Two Password): ", zeroCount);