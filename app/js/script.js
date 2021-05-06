/** MATH FUNCTIONS */
function add (a, b) {
	return (a + b);
}

function subtract (a, b) {
	return (a - b);
}

function divide (a, b) {

    if(b == 0){

        return 0;

    }

    if((a == 0) && (b == 0)){

        return 0;

    }

	return (a / b).toFixed(9);
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


    digitIterate(displayValue, operator); // iterates through currentArray for a and b digit input


    document.querySelector('#display').innerHTML = displayValue;

}); // Ends '9' digit button listener function

document.querySelector('.digit1').addEventListener("click", function(){


    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 8;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }


    document.querySelector('#display').innerHTML = displayValue;

}); // Ends '8' digit button listener function

document.querySelector('.digit2').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 7;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }


    document.querySelector('#display').innerHTML = displayValue;

});  // Ends '7' digit button listener function

document.querySelector('.digit3').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 6;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }

    document.querySelector('#display').innerHTML = displayValue;

}); // Ends '6' digit button listener function

document.querySelector('.digit4').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 5;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }

    document.querySelector('#display').innerHTML = displayValue;

}); // Ends '5' digit button listener function

document.querySelector('.digit5').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 4;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }

    document.querySelector('#display').innerHTML = displayValue;

}); // Ends '4' digit button listener function

document.querySelector('.digit6').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 3;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }

    document.querySelector('#display').innerHTML = displayValue;

});  // Ends '3' digit button listener function

document.querySelector('.digit7').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 2;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }

    document.querySelector('#display').innerHTML = displayValue;

}); // Ends '2' digit button listener function

document.querySelector('.digit8').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 1;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }

    document.querySelector('#display').innerHTML = displayValue;

}); // Ends '1' digit button listener function

document.querySelector('.digit9').addEventListener("click", function(){

    if(resultShows == true){

        innerResult = 0; // Clears all previous innerResult calculations after EQUALS Button is pressed

    }

    resultShows = false; // helps to ensure after new digit continuing operations can occur
    displayValue = 0;

        if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

            currentArray = [];
            currentArray.push(displayValue);
            let newArray = currentArray;
            newArray.toString();
            displayValue = parseInt(newArray); //displays & translates digit input to number value

            console.log('a: ' + displayValue);
        } 

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray;  //changes current displayed value

            a = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('a: ' + displayValue);

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

        }

        else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
            
            currentArray.push(displayValue);

            newArray = currentArray;
            newArray = newArray.join();
            newArray = newArray.replaceAll(',','');
            newArray = Number(newArray); //translates digit input to number value

            displayValue = newArray; //changes current displayed value
            
            b = newArray;

            innerResult = operate(operator, a, b); // stores current result

            console.log('b: ' + displayValue);

        }


    document.querySelector('#display').innerHTML = displayValue;

}); // Ends '0' digit button listener function




function digitIterate (displayValue, operator){

    if((currentArray.length < 1) && (operator == '')){ // determines 'a' value

        currentArray = [];
        currentArray.push(displayValue);
        let newArray = currentArray;
        newArray.toString();
        displayValue = parseInt(newArray); //displays & translates digit input to number value

        console.log('a: ' + displayValue);
        console.log(currentArray);

        
    } 

    else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator == '')){ // allows for up to 10 digit numbers

        currentArray.push(displayValue);
        console.log(currentArray);

        newArray = currentArray;
        newArray = newArray.join();
        newArray = newArray.replaceAll(',','');
        newArray = Number(newArray); //translates digit input to number value

        displayValue = newArray;  //changes current displayed value

        a = newArray;

        innerResult = operate(operator, a, b); // stores current result

        console.log('a: ' + displayValue);

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

    }

    else if((currentArray.length >= 1) && (currentArray.length < 9) && (operator != '')){ // allows for up to 10 digit numbers
        
        currentArray.push(displayValue);

        newArray = currentArray;
        newArray = newArray.join();
        newArray = newArray.replaceAll(',','');
        newArray = Number(newArray); //translates digit input to number value

        displayValue = newArray; //changes current displayed value
        
        b = newArray;

        innerResult = operate(operator, a, b); // stores current result

        console.log('b: ' + displayValue);

    }

} // Ends function call


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
    console.log('Divide Button a: ' + a);

    b = 0; 
    console.log('Divide Button b: ' + b);

    if(resultShows == true){

        operator = '/'; 
        innerResult = operate(operator, a, b); // stores current result

        a = result;
    
    }

    resultShows = false;
    operator = '/'; 

    if(innerResult > 0){
       
        a = innerResult;
        console.log('a = ' + innerResult);
    }

    currentArray = []; // Clears Array when operation is defined by user
});

/** MULTIPLY BUTTON LISTENER */
document.querySelector('.operation3').addEventListener("click", function(){


    a = displayValue;
    console.log('Multiply Button a: ' + a);

    b = 0; 
    console.log('Multiply Button b: ' + b);

    if(resultShows == true){

        operator = '*'; 
        innerResult = operate(operator, a, b); // stores current result

        a = result;
    
    }

    resultShows = false;
    operator = '*'; 

    if(innerResult > 0){
       
        a = innerResult;
        console.log('a = ' + innerResult);
    }

    currentArray = []; // Clears Array when operation is defined by user

});

/** SUBTRACT BUTTON LISTENER */
document.querySelector('.operation1').addEventListener("click", function(){


    a = displayValue;
    console.log('Subtract Button a: ' + a);

    b = 0; 
    console.log('Subtract Button b: ' + b);

    if(resultShows == true){

        operator = '-'; 
        innerResult = operate(operator, a, b); // stores current result

        a = result;
    
    }

    resultShows = false;
    operator = '-'; 

    if(innerResult > 0){
       
        a = innerResult;
        console.log('a = ' + innerResult);
    }

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

    console.log('RESULT: '+ result );

});







