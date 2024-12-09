let yearInput = parseInt(prompt("input your birth year"));
printZodiac(yearInput);
function printZodiac(year)
{
    let calculateZodiac = (year- 4) % 12; //Get zodiac number 

    if (calculateZodiac==0) {
        alert("Your chinese zodiac is Rat");
    }
    else if (calculateZodiac==1) {
        alert("Your chinese zodiac is Ox");
    }
    else if (calculateZodiac==2) {
        alert("Your chinese zodiac is Tiger");
    }
    else if (calculateZodiac==3) {
        alert("Your chinese zodiac is Rabbit");
    }
    else if (calculateZodiac==4) {
        alert("Your chinese zodiac is Dragon");
    }
    else if (calculateZodiac==5) {
        alert("Your chinese zodiac is Snake");
    }
    else if (calculateZodiac==6) {
        alert("Your chinese zodiac is Horse");
    }
    else if (calculateZodiac==7) {
        alert("Your chinese zodiac is Goat");
    }
    else if (calculateZodiac==8) {
        alert("Your chinese zodiac is Monkey");
    }
    else if (calculateZodiac==9) {
        alert("Your chinese zodiac is Rooster");
    }
    else if (calculateZodiac==10) {
        alert("Your chinese zodiac is Dog");
    }
    else if (calculateZodiac==11) {
        alert("Your chinese zodiac is Pig");
    }
}
        