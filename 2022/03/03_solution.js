import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('03_input.txt', 'utf8');
const rucksacks = content.split('\r\n');

let duplicates = [];
let totalPriority = 0;

for (const rucksack of rucksacks) {
    const compartment1 = rucksack.slice(0, rucksack.length / 2);
    const compartment2 = rucksack.slice(rucksack.length / 2);

    for (const item of compartment1) {
        if (compartment2.includes(item) || compartment2.includes(item.toLocaleLowerCase()) || compartment2.includes(item.toLocaleUpperCase())) {
            duplicates.push(item);
            break;
        }

    }  
}

  for (const duplicate of duplicates) {
        if (duplicate === duplicate.toLocaleLowerCase()) {
            totalPriority += duplicate.charCodeAt(0) - 96;
        } else {
            totalPriority += duplicate.charCodeAt(0) - 38;
        }
    }


log(totalPriority);