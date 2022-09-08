// generating variables
let buttonSI = document.getElementById('buttonSI');
let buttonClar = document.getElementById('buttonClar');
let buttonBack = document.getElementById('buttonBack');

let inputSal = document.getElementById('inputSal');

let sectionSI = document.getElementById('salaryInput');
let sectionClar = document.getElementById('clarification');
let sectionR = document.getElementById('result');

// html functions
function checkNumber(key) {
    return (key >= '0' && key <= '9') || key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}

// js functions
// there s nothing here right now ¯\_(ツ)_/¯

// main code
buttonSI.onclick = function() {
    sectionSI.style.display = 'none'; 
}

buttonClar.onclick = function() {
    sectionClar.style.display = 'none'; 
    sectionR.style.display = 'none'; 
}

buttonBack.onclick = function() {
    sectionSI.style.display = 'flex';
    sectionR.style.display = 'none';
    inputSal.innerHTML = '';
}