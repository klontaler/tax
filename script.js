// generating variables
let buttonSI = document.getElementById('buttonSI');
let buttonClar = document.getElementById('buttonClar');
let buttonBack = document.getElementById('buttonBack');

let inputSal = document.getElementById('inputSal');
let selectBen = document.getElementById('Ben');
let selectPRC = document.getElementById('PRC');

let sectionSI = document.getElementById('salaryInput');
let sectionClar = document.getElementById('clarification');
let sectionR = document.getElementById('result');

let FBCSI = document.getElementById('FBCSI');
let FBCClar = document.getElementById('FBCClar');

let totalSpan = document.getElementById('totalSpan');
let ndflSpan = document.getElementById('ndflSpan');
let opsSpan = document.getElementById('opsSpan');
let omsSpan = document.getElementById('omsSpan');
let vnimSpan = document.getElementById('vnimSpan');
let travmSpan = document.getElementById('travmSpan');

let benefits;
let PRC;
let preSalary;

let salary;
let ndfl;
let ops;
let oms;
let vnim;
let travm;
let total;

// html functions
function checkNumber(key) {
    return (key >= '0' && key <= '9') || key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}

// js functions
function beforeNdflSalaryCalc() {
    if (preSalary / 85 * 100 * 12 > 5000000) {
        salary = preSalary / 85 * 100
    }
    else {
        salary = preSalary / 87 * 100
    }
    preSalary = Number(preSalary);
}

function ndflCalc() {
    if (salary * 12 > 5000000) {
        ndfl = salary * 0.15
    }
    else {
        ndfl = salary * 0.13
    }

    ndfl = Math.round(ndfl);
}

function opsCalc() {
    if (benefits = 'standard') {
        ops = salary * 0.22;
        if (salary * 12 > 1032000) {
            ops = 1565000 / 12 * 0.22 + (salary - 1565000 /12) * 0.1;
        }
    }
    else if (benefits = 'SMBs') {
        ops = salary * 0.1;
    }
    else if (benefits = 'IT') {
        ops = salary * 0.06;
    }
    ops = Math.round(ops);
}

function omsCalc() {
    if (benefits = 'standard') {
        oms = salary * 0.051;
    }
    else if (benefits = 'SMBs') {
        oms = salary * 0.05;
    }
    else if (benefits = 'IT') {
        oms = salary * 0.001;
    }
    oms = Math.round(oms);
}

function vnimCalc() {
    if (benefits = 'standard') {
        vnim = salary * 0.029;
        if (salary * 12 > 1032000) {
            vnim = 1032000 / 12 * 0.029;
        }
    }
    else if (benefits = 'SMBs') {
        vnim = 0
    }
    else if (benefits = 'IT') {
        vnim = salary * 0.015;
    }

    vnim = Math.round(vnim);
}

function travmCalc() {
    switch(PRC) {
        case '1':
            travm = salary / 100 * 0.2;
            break;
        case '2':
            travm = salary / 100 * 0.3;
            break;
        case '3':
            travm = salary / 100 * 0.4;
            break;
        case '4':
            travm = salary / 100 * 0.5;
            break;
        case '5':
            travm = salary / 100 * 0.6;
            break;
        case '6':
            travm = salary / 100 * 0.7;
            break;
        case '7':
            travm = salary / 100 * 0.8;
            break;
        case '8':
            travm = salary / 100 * 0.9;
            break;
        case '9':
            travm = salary / 100 * 1;
            break;
        case '10':
            travm = salary / 100 * 1.1;
            break;
        case '11':
            travm = salary / 100 * 1.2;
            break;
        case '12':
            travm = salary / 100 * 1.3;
            break;
        case '13':
            travm = salary / 100 * 1.4;
            break;
        case '14':
            travm = salary / 100 * 1.5;
            break;
        case '15':
            travm = salary / 100 * 1.7;
            break;
        case '16':
            travm = salary / 100 * 1.9;
            break;
        case '17':
            travm = salary / 100 * 2,1;
            break;
        case '18':
            travm = salary / 100 * 2,3;
            break;
        case '19':
            travm = salary / 100 * 2,5;
            break;
        case '20':
            travm = salary / 100 * 2,8;
            break;
        case '21':
            travm = salary / 100 * 3,1;
            break;
        case '22':
            travm = salary / 100 * 3,4;
            break;
        case '23':
            travm = salary / 100 * 3,7;
            break;
        case '24':
            travm = salary / 100 * 4,1;
            break;
        case '25':
            travm = salary / 100 * 4,5;
            break;
        case '26':
            travm = salary / 100 * 5;
            break;
        case '27':
            travm = salary / 100 * 5,5;
            break;
        case '28':
            travm = salary / 100 * 6,1;
            break;
        case '29':
            travm = salary / 100 * 6,7;
            break;
        case '30':
            travm = salary / 100 * 7,4;
            break;
        case '31':
            travm = salary / 100 * 8,1;
            break;
        case '32':
            travm = salary / 100 * 8,5;
            break;
        default:
            travm = salary / 100 * 0.2;
            break;
    }
    travm = Math.round(travm);
}

function totalCalc() {
    beforeNdflSalaryCalc();

    ndflCalc();
    opsCalc();
    omsCalc();
    vnimCalc();
    travmCalc();
    console.log(ndfl);
    total = ndfl + ops + oms + vnim + travm + preSalary;
    total = Math.round(total);
    console.log(ndfl + ops + oms + vnim + travm);
}

function results() {
    totalCalc();

    totalSpan.innerHTML = total + " ₽";
    ndflSpan.innerHTML = ndfl + " ₽";
    opsSpan.innerHTML = ops + " ₽";
    omsSpan.innerHTML = oms + " ₽";
    vnimSpan.innerHTML = vnim + " ₽";
    travmSpan.innerHTML = travm + " ₽";
}

// main code
inputSal.oninput = function() {
    preSalary = inputSal.value;
    if (inputSal.value == '') {
        buttonSI.disabled = true;
    }
    else {
        buttonSI.disabled = false;
    }
};



buttonSI.onclick = function() {
    sectionSI.style.display = 'none'; 
    FBCSI.style.display = 'none'
    FBCClar.style.display = 'flex'
    sectionClar.style.display = 'flex';
}

buttonClar.onclick = function() {
    PRC = selectPRC.value;
    benefits = selectBen.value;
    sectionClar.style.display = 'none'; 
    sectionR.style.display = 'grid'; 
    buttonBack.style.display = 'block';
    FBCClar.style.display = 'none'
    results();
}

buttonBack.onclick = function() {
    sectionSI.style.display = 'flex';
    sectionR.style.display = 'none';
    FBCSI.style.display = 'flex'
    inputSal.innerHTML = '';
    buttonBack.style.display = 'none';
};