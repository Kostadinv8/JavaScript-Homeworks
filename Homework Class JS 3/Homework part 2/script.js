function calculateDogAge(dogAge){
    let dogsLifetimeInHumanYears = 12;
    let calculatedAge;
    if (dogAge > dogsLifetimeInHumanYears ) {
      calculatedAge = dogAge / 7;
      console.log('Your dos is ' + calculatedAge + ' in human years'); 
    } else { 
        calculatedAge = dogAge * 7;
        console.log('Your dog is ' + calculatedAge + ' in dog years');
    }

}

let yearInput = parseInt(prompt('Enter dog years')); 
calculateDogAge(yearInput);








