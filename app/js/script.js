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

let innerResult = 0; // intermediate result before pressing equals key, for run on operations
let currentResult = 0; // stores current result based on innerResult

let resultShows = false;

document.querySelector('#display').innerHTML = displayValue;



/** DIGIT BUTTON LISTENERS */

document.querySelector('.digit0').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 9;


        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 10) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

        }

        if((operator != '') && (currentArray.length < 1)){ // determines 'b' value
            
            currentArray = [];
            b = displayValue;
            currentArray.push(displayValue);

            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            innerResult = operate(operator, a, b); // stores current result
            
            console.log('b: ' + displayValue);
            console.log('a value: ' + a);
            console.log('b value: ' + b);

        }

        else if((currentArray.length >= 1) && (currentArray.length < 10) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a value: ' + a);
            console.log('b value: ' + b);

        }

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

    a = 0;
    b = 0;
    currentArray = [];
    operator = '';

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

    currentArray = []; // Clears Array when operation is defined by user

});

/** ADD BUTTON LISTENER */
document.querySelector('.operation2').addEventListener("click", function(){


    a = displayValue;
    console.log('Add Button a: ' + a);

    b = 0; 
    console.log('Add Button b: ' + b);

    if(resultShows == true){

        operator = '+'; 
        innerResult = operate(operator, a, b); // stores current result

        a = result;
    
    }

    resultShows = false;
    operator = '+'; 

    if(innerResult > 0){
       
        a = innerResult;
        console.log('a = ' + innerResult);
    }

    currentArray = []; // Clears Array when operation is defined by user

});


/** EQUALS BUTTON LISTENER */
document.querySelector('.operation6').addEventListener("click", function(){

    /** RESETS ALL DIGIT INPUT */
    if(resultShows == false){
        result = operate(operator, a, b);// call appropriate operation function
        a = 0;
        currentArray = [];
        operator = '';
    }


    resultShows = true;// Allows EQUALS BUTTON to be clicked multiple times in a row
    
    displayValue = result;
    document.querySelector('#display').innerHTML = result; //display result on display

    // console.log('a value: ' + a);
    // console.log('b value: ' + b);
    console.log('RESULT: '+ result );

});




// fix code so that after every (a + b) operation this 'result' exists so that you can continue to run operations if necessary





