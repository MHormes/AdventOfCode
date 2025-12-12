import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('02_input.txt', 'utf8');
const lines = content.split('\r\n')

let totalScore = 0;

for (const line of lines) {
    const plays = line.split(' ');

    switch(plays[1]){
        case 'X':
            totalScore++;
            switch(plays[0]){
                case 'A':
                    totalScore += 3;
                    break;
                case 'B':
                    break;
                case 'C':
                    totalScore += 6;
                    break;
            }
            break;
        case 'Y':
            totalScore += 2;
            switch(plays[0]){
                case 'A':
                    totalScore += 6;
                    break;
                case 'B':
                    totalScore += 3;
                    break;
                case 'C':
                    break;
            }
            break;
        case 'Z':
            totalScore += 3;
            switch(plays[0]){
                case 'A':
                    break;
                case 'B':
                    totalScore += 6;
                    break;
                case 'C':
                    totalScore += 3;
                    break;
            }
            break;
    }
}

log(totalScore);