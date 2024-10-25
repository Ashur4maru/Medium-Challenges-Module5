import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });



async function raadHetGetal(){

    let randomGetal = Math.floor(Math.random() * 10) + 1;
    let stop = false;

    while(!stop){
        let getal = parseFloat(await userInput.question('Geef een getal tussen 1 en 10: '));

        if(getal === randomGetal){
            console.log('Correct!');
            stop = true;
        }else if(getal < randomGetal){
            console.log('Hoger');
        }else if(getal > randomGetal){
            console.log('Lager')
        }

    }
}

raadHetGetal();



