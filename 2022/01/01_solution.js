import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('01_input.txt', 'utf8');
const linesArray = content.split('\r\n\r\n');

let highestCalories = 0;

for (const line of linesArray) {
    const caloriesArray = line.split('\r\n').map(Number);
    const totalCalories = caloriesArray.reduce((a, b) => a + b, 0);

    if (totalCalories > highestCalories) {
        highestCalories = totalCalories;
    }
}

log('Highest Calories:', highestCalories);
