document.addEventListener('DOMContentLoaded', function () {


    let counter = document.querySelector('.count-display');
    let incButton = document.querySelector('.increment-button');
    let delButton = document.querySelector('.increment-button-min');
    
    function incrementCount() {
        let currentCount = parseInt(counter.textContent);
        counter.textContent = currentCount + 1;
    }
    
    function delCount(){
        let currentCount = parseInt(counter.textContent);
        counter.textContent = currentCount - 1;
    }
    
    incButton.addEventListener('click', incrementCount);
    delButton.addEventListener('click', delCount);
    
    
    //color block
    
    let colorInput = document.querySelector('.color-input');
    let colorButton = document.querySelector('.color-button');
    let colorBlock = document.querySelector('.color-block');
    
    function printBlock() {
        colorBlock.style.backgroundColor = colorInput.value;
    };
    
    colorInput.addEventListener('input', printBlock);
    
    printBlock();
    
    colorButton.addEventListener('click', function(){
        colorBlock.style.removeProperty('background-color');
        colorInput.value = "";
    });

});
