
/*-------------------------------- Constants --------------------------------*/

   

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');


/*-------------------------------- Variables --------------------------------*/

let currentValue = '';  
let previousValue = ''; 
let operator = '';   

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonText = event.target.innerText;
  
    if (event.target.classList.contains('number')) {
        currentValue += buttonText; 
        display.innerText = currentValue;
      }
  
      if (event.target.classList.contains('operator')) {

        if (buttonText === '+') {
          previousValue = currentValue;
          currentValue = '';
          operator = buttonText;

        } else if (buttonText === '-') {
          previousValue = currentValue;
          currentValue = '';
          operator = buttonText;

        } else if (buttonText === '*') {
          previousValue = currentValue;
          currentValue = '';
          operator = buttonText;

        } 

        else if (buttonText === '/') {
            previousValue = currentValue; 
            currentValue = ''; 
            operator = buttonText;     
          }
      }
  
      if (event.target.classList.contains('equals')) {

        if (operator === '+') {
          currentValue = (parseFloat(previousValue) + parseFloat(currentValue)).toString();
          display.innerText = currentValue;

        } else if (operator === '-') {
          currentValue = (parseFloat(previousValue) - parseFloat(currentValue)).toString();
          display.innerText = currentValue;

        } else if (operator === '*') {
          currentValue = (parseFloat(previousValue) * parseFloat(currentValue)).toString();
          display.innerText = currentValue;

        } 
  
        else if (operator === '/') {
            currentValue = (parseFloat(previousValue) / parseFloat(currentValue).toExponential(2)).toString(); 
            display.innerText = currentValue; 
        }
        previousValue = ''; 
        operator = ''; 
    }

/*-------------------------------- Functions --------------------------------*/

    if (buttonText === 'C') {
        currentValue = '';
        previousValue = '';
        operator = '';
        display.innerText = '0';
      }
    });
    });




