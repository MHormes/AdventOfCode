import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('06_input.txt', 'utf8');
const lines = content.split('\r\n').filter(line => line.trim() !== '');

let totalCount = 0;
let newArray = [];

for (let line of lines) {
    let splittedLine = line.split(' ').filter(char => char.trim() !== ' ');
    for(let [index, number] of splittedLine.entries()) {
        newArray[index] += number;
    }  
}

log(newArray);
