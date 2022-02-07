import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import calculator from './tasks/Calculator/index.js';

const rl = readline.createInterface({ input, output });

rl.question(`What is a task you want to run?\n
Type 1: CALCULATOR\n
Type 2: CALCULATOR\n
Type 3: CALCULATOR\n
Type 4: CALCULATOR\n
Type 5: CALCULATOR\n
Answer: `, (answer) => {
    if (answer === '1') {
        rl.question('Input your data: ', (ans) => {
            calculator(ans);
            rl.close();
        })
    } else {
        rl.close();

    }
});
