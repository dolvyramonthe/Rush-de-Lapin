import { exit } from "process";

const command: string[] = process.argv.slice(2);
const option: string = command[0];
let checkNumber: number = parseInt(command[1], 10);

if(!checkNumber || !option || (option.toLowerCase() !== '-c' && option.toLowerCase() !== '-f')) {
    console.log("Bad use of the programme");
    exit();
}

function checkLuhn(num: number): number {
    let strNum: string = num.toString();
    let reversedStrNum: string = "";
    let result: string = "";
    let sumResult: number = 0;

    for(let i: number = strNum.length - 1; i >= 0; i--) {
        reversedStrNum += strNum[i];
    }

    for(let i: number = 0; i < reversedStrNum.length; i++) {
        if((i + 1) % 2 === 0) {
            const item: number = Number(reversedStrNum[i]);
            
            if(item * 2 > 9) {
                result += (item * 2 - 9).toString();
            } else {
                result += (item * 2).toString();
            }
        } else {
            result += reversedStrNum[i];
        }
    }

    for (const iterator of result) {
        sumResult += Number(iterator);
    }

    return sumResult;
}

if(option.toLowerCase() === '-c') {
    const resultVal: number = checkLuhn(checkNumber);

    if(resultVal % 10 === 0) {
        console.log("OK");
    } else {
        console.log("KO");
    }
} else if (option.toLowerCase() === '-f') {
    checkNumber = checkNumber * 10;
    const resultVal: number = checkLuhn(checkNumber);

    if (resultVal % 10 !== 0) {
        const luhnKey: number = 10 - (resultVal % 10);
        console.log(luhnKey);
    }
}