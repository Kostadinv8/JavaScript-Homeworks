function createStringOfArray(arrayOfStrings){
    let makeString = '';
    for(let value of arrayOfStrings){
        makeString = makeString + ' ' + value;
    }
    console.log(makeString);
}

createStringOfArray(['Hello', 'my', 'name', 'is', 'Kostadin', '!', 'Im', 'writing', 'code.']);