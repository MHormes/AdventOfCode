import { log } from 'console';
import { readFile } from 'fs/promises';

var invalidCount = 0;

const content = await readFile('02_input.txt', 'utf8');
const splitArray = content.split(',');
const input = splitArray.filter(line => line.trim() !== '');

for (let range of input) {
    const start = parseInt(range.split('-')[0], 10);
    const end = parseInt(range.split('-')[1], 10);

    let currentChecking = start;

    while (currentChecking <= end) {
        let currentCheckingString = currentChecking.toString();
        const zeroCheckDigit = currentCheckingString.split("")

        if (zeroCheckDigit[0] === "0") {
            log("Leading zero found in number: ", currentChecking);
            invalidCount += currentChecking
        }

        let hasDouble = false;

        const length = currentCheckingString.length;

        for (let index = 0; index < length / 2; index++) {
            let part1 = currentCheckingString.substring(0, length / 2 - index);
            let part2 = currentCheckingString.substring(length / 2 - index, length - (index * 2));
            if (part1 === part2 && index === 0) {
                hasDouble = true;
            } else if (part1 === part2) {
                const amountOfParts = 2 + index;
                let parts = [];
                let splitIndex = 0;
                for (let checkIndex = 0; checkIndex < amountOfParts; checkIndex++) {
                    let part = currentCheckingString.substring(splitIndex, splitIndex + part1.length);
                    splitIndex += part1.length;
                    parts.push(part);
                }
                const allEqual = parts.every(p => p === part1);
                if (allEqual) {
                    hasDouble = true;
                }
            }
        }



        if (hasDouble == true) {
            invalidCount += currentChecking;
        }

        currentChecking++
    }
}


// SOLUTION IS INCCORECT! DID NOT MANAGE TO FIND THE RIGHT PATTERN
log("Invalid Count: ", invalidCount);