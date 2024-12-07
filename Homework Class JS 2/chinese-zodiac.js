let yearInput = prompt("input your birth year");
let zodiacs = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];
let calculateZodiac = (yearInput - 4) % 12; //Get zodiac number 

alert(zodiacs[calculateZodiac]);
