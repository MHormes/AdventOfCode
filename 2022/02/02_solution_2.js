import { log } from 'console';
import { readFile } from 'fs/promises';

const content = await readFile('02_input.txt', 'utf8');
const lines = content.split('\r\n')

let totalScore = 0;

for (const line of lines) {
    const plays = line.split(' ');

    switch (plays[0]) {
        case 'A':
            switch(plays[1]){
                case 'X':
                    //lose -> play sissors
                    totalScore += 3
                    break;
                case 'Y':
                    //draw -> play rock
                    totalScore += 1;
                    totalScore += 3;
                    break;
                case 'Z':
                    //win -> play paper
                    totalScore += 2;
                    totalScore += 6;
                    break;
            }
            break;
        case 'B':
            switch(plays[1]){
                case 'X':
                    //lose -> play rock
                    totalScore += 1
                    break;
                case 'Y':
                    //draw -> play paper
                    totalScore += 2;
                    totalScore += 3;
                    break;
                case 'Z':
                    //win -> play sissors
                    totalScore += 3;
                    totalScore += 6;
                    break;
            }
            break;
        case 'C':
            switch(plays[1]){
                case 'X':
                    //lose -> play paper
                    totalScore += 2
                    break;
                case 'Y':
                    //draw -> play scissors
                    totalScore += 3;
                    totalScore += 3;
                    break;
                case 'Z':
                    //win -> play rock
                    totalScore += 1;
                    totalScore += 6;
                    break;
            }
            break;
    }
}

log(totalScore);