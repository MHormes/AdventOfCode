import { log } from 'console';
import { readFile } from 'fs/promises';

let freshAmount = 0;

const content = await readFile('05_input.txt', 'utf8');
const split = content.split('\r\n\r\n');

const ranges = split[0].split('\r\n')

for (let range of ranges) {
    let start = Number(range.split('-')[0]);
    let end = Number(range.split('-')[1]);

    let numberOfFresh = end - start + 1;
    freshAmount += numberOfFresh;
}

log("Fresh id's count: ", freshAmount)