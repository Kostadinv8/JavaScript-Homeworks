let stringOfNumbers= "";
function checkIfEvenNumber(number){

    if (number % 2 == 0){
        return true;
        
    }
    else {
        return false;
    }

}
for(let i = 1;i <= 20; i++){
    if(checkIfEvenNumber(i)){
        stringOfNumbers += i + "\n";

    }
    else {
        stringOfNumbers  += i + " ";
        
    }
  
}
console.log(stringOfNumbers);

