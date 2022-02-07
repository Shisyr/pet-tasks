
function addTwoNumbers(str) {
    return Number(str[0]) + Number(str[1]);
}
function subtractTwoNumbers(str) {
    return Number(str[0]) - Number(str[1]);
}

function multiplyTwoNumbers(str) {
    return Number(str[0]) * Number(str[1]);
}
function divideTwoNumbers(str) {
    return Number(str[0]) / Number(str[1]);
}


function calculateTwoNumbers(str) {
    const isContainsPlus = str.includes('+');
    const isContainsMinus = str.includes('-');
    const isContainsMultiply = str.includes('*');
    const isContainsDivision = str.includes('/');
    if (isContainsDivision) {
        return divideTwoNumbers(str.split('/'));
    } else if (isContainsMultiply) {
        return multiplyTwoNumbers(str.split('*'));
    } else if (isContainsPlus) {
        return addTwoNumbers(str.split('+'));
    } else if (isContainsMinus) {
        return subtractTwoNumbers(str.split('-'));
    }
}

function calculateInBrackets(str) {
    let afterDeleteSpace = str.split(' ').join('')
    let index = 0;
    let closedBracket = 0;
    let openedBracket = 0;
    while(afterDeleteSpace.includes('(') || afterDeleteSpace.includes(')')) {
        if (openedBracket && closedBracket) {
            const substr = afterDeleteSpace.substring(openedBracket + 1, closedBracket);
            const resultOfTwoNumbers = calculateTwoNumbers(substr);
            const searchValue = afterDeleteSpace.substring(openedBracket, closedBracket + 1);
            afterDeleteSpace = afterDeleteSpace.replace(searchValue, resultOfTwoNumbers);
            index = -1;
            openedBracket = 0;
            closedBracket = 0;
        } else {
            if (afterDeleteSpace[index] === '(') {
                openedBracket = index;
            } else if (afterDeleteSpace[index] === ')') {
                closedBracket = index;
            }
        }
        index++;
    }
    return afterDeleteSpace;
}

function calculateByType(str, type) {
    const strategy = {
        MULTIPLY: /((-?[0-9]\d*(\.\d+)?)\*(-?[0-9]\d*(\.\d+)?))|(\d+\*\d+)/,
        DIVISION: /(\d+\.?\d+\/\d+\.?\d+)|(\d+\/\d+)/
    }
    const regex = strategy[type];
    let matchedData = str.match(regex);
    while (matchedData) {
        if (matchedData) {
            const item = calculateTwoNumbers(matchedData[0]);
            str = str.replace(matchedData[0], item);
        }
        matchedData = str.match(regex);
    }
    return str
}

function calculateBySequence(str) {
    const negativeNumberRegex = /(-\d+\.?\d+)|(-\d+)/;
    let negativeNumber = str.match(negativeNumberRegex);
    let result = 0;
    while (negativeNumber) {
        result += Number(negativeNumber[0]);
        str = str.replace(negativeNumberRegex, '');
        negativeNumber = str.match(negativeNumberRegex);
    }
    for (const item of str.split('+')) {
        result += Number(item);
    }
    return result.toFixed(1);
}

String.prototype.calculate = function() {
    console.log(this)
    const afterBrackets = calculateInBrackets(this);
    console.log(afterBrackets);
    const afterDivision = calculateByType(afterBrackets, 'DIVISION');
    console.log('afterDivision');
    console.log(afterDivision);
    console.log('afterDivision');
    const afterMultiply = calculateByType(afterDivision, 'MULTIPLY');
    console.log('afterMultiply');
    console.log(afterMultiply);
    console.log('afterMultiply');
    return calculateBySequence(afterMultiply);

};

// '5 + 6 - (3 * (5 + (5 + 7))) * 5 / 9 + (3 + (7 + (8 + 9))) * 3 / 6'
// const str = '5 + 6 - 6 * 7 / 7 * 9 + (((43 + 43) + 5) + 6)';
// const result = str.calculate();
// console.log('RESULT: ', result);

export default function (str) {
    const result = str.calculate();
    console.log('RESULT: ', result);
}