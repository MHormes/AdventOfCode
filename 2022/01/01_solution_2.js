import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('01_input.txt', 'utf8');
const linesArray = content.split('\r\n\r\n');

let highestCariers = [0, 0, 0];

for (const line of linesArray) {
    const caloriesArray = line.split('\r\n').map(Number);
    const totalCalories = caloriesArray.reduce((a, b) => a + b, 0);
    log(totalCalories);

    for (let carier of highestCariers) {
        if (totalCalories > carier) {
            highestCariers[0] = totalCalories;
            highestCariers.sort((a, b) => a - b);
            log(highestCariers);
            break;
        }
    }

}

const total = highestCariers.reduce((a, b) => a + b, 0);
log('Highest Calories:', total);
