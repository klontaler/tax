// generating variables
let buttonSI = document.getElementById('buttonSI');
let buttonClar = document.getElementById('buttonClar');
let buttonBack = document.getElementById('buttonBack');

let inputSal = document.getElementById('inputSal');

let sectionSI = document.getElementById('salaryInput');
let sectionClar = document.getElementById('clarification');
let sectionR = document.getElementById('result');

let FBCSI = document.getElementById('FBCSI');
let FBCClar = document.getElementById('FBCClar');

// html functions
function checkNumber(key) {
    return (key >= '0' && key <= '9') || key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}

// js functions
// there s nothing here right now ¯\_(ツ)_/¯

// main code
buttonSI.onclick = function() {
    sectionSI.style.display = 'none'; 
    FBCSI.style.display = 'none'
    FBCClar.style.display = 'flex'
    sectionClar.style.display = 'flex';
}

buttonClar.onclick = function() {
    sectionClar.style.display = 'none'; 
    sectionR.style.display = 'grid'; 
    buttonBack.style.display = 'block';
    FBCClar.style.display = 'none'
}

buttonBack.onclick = function() {
    sectionSI.style.display = 'flex';
    sectionR.style.display = 'none';
    FBCSI.style.display = 'flex'
    inputSal.innerHTML = '';
}