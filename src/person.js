const isAdult = (age) =>{
    if(age>18){
        console.log('U R Adult!');
    }else{
        console.log('Go Back');
        
    }
}

const canDrink = (age) => {
    if(age>18){
        console.log('You can Drink');
    }else{
        console.log("You Can't Drink ");   
    }
    
}
export {isAdult,canDrink}