var currentnumberwrapper = document.getElementById('currentNumber'); /*--currentnumberwrapper é o element span*/
var currentNumber = 0;

function modifyText() { /* função modificar texto */
    if(currentNumber < 0){
        currentnumberwrapper.style.color = "red"; /* se o currentnumber for menor que 0 altera a cor pra vermelho */
    }
    if(currentNumber >= 0){
        currentnumberwrapper.style.color = "green"; /* se o currentnumber for ihual ou maior que 0 altera a cor pra verde */
    }
}


function increment() { 
    currentNumber = currentNumber + 1;
    currentnumberwrapper.innerHTML = currentNumber;
    
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentnumberwrapper.innerHTML = currentNumber;    
    
}


document.getElementById("negative").addEventListener('click', modifyText);
document.getElementById("positive").addEventListener('click', modifyText);