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


let displayValue = 0;

document.querySelector('.digit0').addEventListener("click", function(){


    displayValue = 9;


});

document.querySelector('#display').innerHTML = displayValue;







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











