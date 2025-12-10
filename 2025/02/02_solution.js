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
        
        // for(let index = 0; index < digits.length; index++){
        //     for(let indexCompare = 0; indexCompare < digits.length; indexCompare++){
        //         if(digits[index] === digits[indexCompare] && index !== indexCompare){
        //             hasDouble = true;
        //             break;
        //         }
        //     }
        // }
        const length = currentCheckingString.length;
        for(let index = 0; index < length - 1; index++){
            let part1 = currentCheckingString.substring(0, length/2);
            let part2 = currentCheckingString.substring(length/2, length);

            if(part1 === part2){   
                hasDouble = true;
                break;
            }
        }

        if(hasDouble == true){
            invalidCount += currentChecking;
        }

        currentChecking++
    }
}

log("Invalid Count: ", invalidCount);