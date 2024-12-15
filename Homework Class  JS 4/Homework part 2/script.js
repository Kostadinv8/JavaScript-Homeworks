function sum(numberArray=[20,50,60,47,82]){
    let totalsum=0;
    let hasInvalidNumber = false;
    for(let i = 0;i < numberArray.length; i++){
        if(validateNumber(numberArray[i])){
            totalsum+=numberArray[i];
        
        }
        else { 
            
            hasInvalidNumber = true;
            break;
        }
    }
     if (hasInvalidNumber){
        console.log('ERORR, invalid number');
     }
     else {
        console.log(totalsum);
     }

     
}
function validateNumber(value){
    if (typeof value === typeof 0){
        return true;
    
    }
       
        return false;
}


sum([20,45,15,37,47]);
sum(['20',45,15,37,47]);
