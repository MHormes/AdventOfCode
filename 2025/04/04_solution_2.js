import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('04_input.txt', 'utf8');
const rowsArray = content.split('\r\n');

let accessibleRolls = 0;
let removedThisRound = 0;
do {
    removedThisRound = 0;
    for (let [index, row] of rowsArray.entries()) {
        for (let [rIndex, roll] of row.split('').entries()) {
            if (roll === '@') {
                let adjacentRollsCount = 0;

                const upperrow = rowsArray[index - 1] ? rowsArray[index - 1].split('') : [];
                const LA = upperrow[rIndex - 1];
                const MA = upperrow[rIndex];
                const RA = upperrow[rIndex + 1];

                const L = row[rIndex - 1];
                const R = row[rIndex + 1];

                const lowerrow = rowsArray[index + 1] ? rowsArray[index + 1].split('') : [];
                const LB = lowerrow[rIndex - 1];
                const MB = lowerrow[rIndex];
                const RB = lowerrow[rIndex + 1];

                const adjacentRolls = [LA, MA, RA, L, R, LB, MB, RB];

                for (let adjacentRoll of adjacentRolls) {
                    if (adjacentRoll === roll) {
                        adjacentRollsCount++;
                    }
                }
                if (adjacentRollsCount < 4) {
                    accessibleRolls++;
                    rowsArray[index] = rowsArray[index].substring(0, rIndex) + '.' + rowsArray[index].substring(rIndex + 1);
                    removedThisRound++;
                }
            }
        }
    }

} while (removedThisRound > 0);

log("Accessible Rolls: ", accessibleRolls);