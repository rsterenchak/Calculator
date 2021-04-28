function add (a, b) {
	return (a + b);
}

function subtract (a, b) {
	return (a - b);
}

function divide (a, b) {
	return (a / b);
}


function multiply(a, b) {

return (a * b);

}


/** OPERATE function takes an operator to determine the appropriate function to be applied to numbers (a & b) and returns result of said operation */
function operate(operator, a, b){

let result;


    if(operator == '+'){

        result = add(a, b);

    }

    if(operator == '-'){

        result = subtract(a, b);

    }

    if(operator == '/'){

        result = divide(a, b);

    }

    if(operator == '*'){

        result = multiply(a, b);

    }

    return result;

} // Ends OPERATE function - function() works



let a = 0;
let b = 0;
let displayValue = a; // 0
let operator = '';
let currentArray = [];

document.querySelector('#display').innerHTML = displayValue;



/** DIGIT BUTTON LISTENERS */

document.querySelector('.digit0').addEventListener("click", function(){

        // take array 
        // append digit value to the next index in the array


    displayValue = 9;

        if(currentArray.length < 1){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;//define new array
            newArray.toString();
            displayValue = parseInt(newArray);

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 10) && (operator == '')){ // allows for up to 10 digit calculation

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join(); // converts to string
            newArray = newArray.replaceAll(',','');// remove commas in string

            newArray = Number(newArray);

            displayValue = newArray;
            
            a = newArray;

            

        } // this 'array updater' needs to be defined outside of this listener function

        if((operator != '') && (b == 0)){ // FIX IT, enter and exit conditions
            
            currentArray = [];
            b = displayValue;
            currentArray.push(displayValue);

            let newArray = currentArray;//define new array
            newArray.toString();

            displayValue = parseInt(newArray);

            console.log('b: ' + displayValue);
        }

        else if((currentArray.length >= 1) && (currentArray.length < 10) && (operator != '')){

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join(); // converts to string
            newArray = newArray.replaceAll(',','');// remove commas in string

            newArray = Number(newArray);

            displayValue = newArray;
            
            b = newArray;

        } // need 'else if' conditional to keep track of array


    document.querySelector('#display').innerHTML = displayValue;


});// Ends '9' digit button listener function

document.querySelector('.digit1').addEventListener("click", function(){


    displayValue = 8;

        if(a > 0){
                
            b = displayValue;

        }

    document.querySelector('#display').innerHTML = displayValue;


});

document.querySelector('.digit2').addEventListener("click", function(){


    displayValue = 7;

        if(a > 0){
                
            b = displayValue;

        }


    document.querySelector('#display').innerHTML = displayValue;


});

document.querySelector('.digit3').addEventListener("click", function(){


    displayValue = 6;

        if(a > 0){
                
            b = displayValue;

        }

    document.querySelector('#display').innerHTML = displayValue;

});

document.querySelector('.digit4').addEventListener("click", function(){


    displayValue = 5;

        if(a > 0){
                
            b = displayValue;

        }

    document.querySelector('#display').innerHTML = displayValue;

});

document.querySelector('.digit5').addEventListener("click", function(){


    displayValue = 4;

        if(a > 0){
                
            b = displayValue;

        }

    document.querySelector('#display').innerHTML = displayValue;

});

document.querySelector('.digit6').addEventListener("click", function(){


    displayValue = 3;

        if(a > 0){
                
            b = displayValue;

        }

    document.querySelector('#display').innerHTML = displayValue;

});

document.querySelector('.digit7').addEventListener("click", function(){


    displayValue = 2;

        if(a > 0){
                
            b = displayValue;

        }

    document.querySelector('#display').innerHTML = displayValue;

});

document.querySelector('.digit8').addEventListener("click", function(){


    displayValue = 1;

        if(a > 0){
                
            b = displayValue;

        }

    document.querySelector('#display').innerHTML = displayValue;

});

document.querySelector('.digit9').addEventListener("click", function(){


    displayValue = 0;

        if(a > 0){
                
            b = displayValue;

        }

    document.querySelector('#display').innerHTML = displayValue;

});



/** OPERAND BUTTON LISTENERS */

/** CLEAR BUTTON LISTENER */
document.querySelector('.operation5').addEventListener("click", function(){


    displayValue = 0;

    document.querySelector('#display').innerHTML = displayValue;


});

/** DIVIDE BUTTON LISTENER */
document.querySelector('.operation4').addEventListener("click", function(){


    a = displayValue;
    operator = '/';


});

/** MULTIPLY BUTTON LISTENER */
document.querySelector('.operation3').addEventListener("click", function(){


    a = displayValue;
    operator = '*';


});

/** SUBTRACT BUTTON LISTENER */
document.querySelector('.operation1').addEventListener("click", function(){


    a = displayValue;
    operator = '-';


});

/** ADD BUTTON LISTENER */
document.querySelector('.operation2').addEventListener("click", function(){


    a = displayValue;
    operator = '+';


});


/** Calls function and calculates operation based on values */
document.querySelector('.operation6').addEventListener("click", function(){

    result = operate(operator, a, b);// call appropriate operation function
    
    a = result;
    displayValue = result;

    document.querySelector('#display').innerHTML = result; //display result on display

});



// first, first define displayValue 
// second, store operand to be used and previous displayValue as 'a'
// third, second displayValue = b
// press equals to take a, b, and operand to complete operation according to the type of operand chosen




// let test = operate('*', 8, 8);
// console.log(test);


// function multiply (total) {
	
// 	let i = 1;
// 	let result = total[0];

// 	while(i < (total.length)){

// 		result= result * total[i];

// 		i++;

// 	}

// 	return result;
// }











