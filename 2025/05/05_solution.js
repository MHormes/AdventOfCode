import { log } from 'console';
import { readFile } from 'fs/promises';

let freshCount = 0;

const content = await readFile('05_input.txt', 'utf8');
const split = content.split('\r\n\r\n');

const ranges = split[0].split('\r\n')
const numbers = split[1].split('\r\n');

for(let number of numbers){
    let numberConverted = Number(number);
    // log("Checking number: ", numberConverted);

    for(let range of ranges){
        // log("Against range: ", range);
        let start = Number(range.split('-')[0]);
        let end = Number(range.split('-')[1]);

        if(numberConverted >= start && numberConverted <= end){
            freshCount++;
            break;
        }
    }
}

log("Fresh count: ", freshCount)