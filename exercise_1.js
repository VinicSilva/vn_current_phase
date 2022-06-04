const startProcess = performance.now();

const endNumber = 100;
let currentNumber = 1;
while (currentNumber <= endNumber) {
    console.log(process(currentNumber));
    currentNumber++;
}

function process(currentNumber) {
    const modeOfThreeAndFive = 15;
    if (isModeOf(currentNumber, modeOfThreeAndFive)) {
        return "Visual Nuts";
    }
    if (isModeOf(currentNumber, 3)) {
        return "Visual";
    }
    if (isModeOf(currentNumber, 5)) {
        return "Nuts";
    }
    return currentNumber;
}

function isModeOf(number, divisor) {
    return number % divisor === 0;
}

const endProcess = performance.now();
const totalProcess = endProcess - startProcess;
console.log(`Function takes ${totalProcess} milliseconds!`)