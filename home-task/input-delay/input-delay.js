(() =>{

    const DELAY_TIME = 500;
    const inputText = document.createElement('input');
    const display = document.createElement('div');

    let timeout;

    inputText.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            display.textContent = inputText.value;},
        DELAY_TIME);
    });

    document.addEventListener('DOMContentLoaded', () => {
    
        document.body.append(inputText);
        document.body.append(display);

    });

})();