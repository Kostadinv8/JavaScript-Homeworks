let arrNumbers = [20, 45, 78, 90, 145];
let min = 0;
let max = 0;
let sum = 0;

function returnMin(numbers){
    let minValue = Math.min(...numbers);
    return minValue;
}

function returnMax(numbers){
    let maxValue = Math.max(...numbers);
    return maxValue;
}

min = returnMin(arrNumbers);
max = returnMax(arrNumbers);

sum = min + max;

console.log('Min is: ' + min);
console.log('Max is: ' + max);
console.log ('Total sum from max and min is: ' + sum);