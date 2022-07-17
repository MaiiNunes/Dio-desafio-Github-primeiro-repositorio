var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function modifyText() {
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
    }
    if(currentNumber >= 0){
        document.getElementById("currentNumber").style.color = "green";
    }
}


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;    
    
}


document.getElementById("negative").addEventListener('click', modifyText);
document.getElementById("positive").addEventListener('click', modifyText);