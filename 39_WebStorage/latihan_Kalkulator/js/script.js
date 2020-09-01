const calculator = {
    displayNumber : '0',
    operator : null,
    firstNumber: null,
    waitingForSecondNumber: false
};

function updateDisplay(){
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false
}

//Memasukan Angka Kedalam Display
function inputDigit(digit){

    if(calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber){
        calculator.displayNumber = digit
    }else{
        if(calculator.displayNumber == '0'){
            calculator.displayNumber = digit;
        }else{
            calculator.displayNumber += digit
        }
    }
}

// ====== Tombol -/+ ======
function inverseNumber(){
    if(calculator.displayNumber === '0'){
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true
        calculator.firstNumber = calculator.displayNumber
    }else{
        alert("Operator sudah ditetapkan")
    }
}

function performCalculation(){

    if(calculator.firstNumber == null || calculator.operator == null){
        alert("Anda Belum Menetapkan Operator");
        return;
    }

    let result = 0;
    if(calculator.operator === "+"){
        result  = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }else{
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }
    

    const history = {
        // Sebelum memanggil fungsi putHistory(), 
        // tentu kita harus menyiapkan data yang akan dikirimkan sebagai argumen fungsi tersebut. 
        firstNumbers: calculator.firstNumber,
        secondNumbers: calculator.displayNumber,
        operators : calculator.operator,
        resultWeb : result
    }

    
    // Memasukan Hasil kalkulasi ke webStorage
    putHistory(history);
    
    calculator.displayNumber = result;

    // Menampilkan Hasil Kalkulasi sebagai WebStorage 
    renderHistory();
}

const buttons = document.querySelectorAll(".button");
for(let button of buttons){
    button.addEventListener('click',function(event){

        //Mendapatkan Object yang diklik
        const target = event.target;

        /* event.classList untuk melihat nilai class apa saja dalam 
        bentuk array yang ada pada element target, 
        kemudian menggunakan contains() yang merupakan 
        method dari array yang berguna untuk memastikan 
        nilai yang terkandung di dalam array tersebut. */

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return; // berhenti dari event 
        }

        if(target.classList.contains("negative")){
            inverseNumber();
            updateDisplay();
            return
        }
        if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            updateDisplay();
            return
        }
        if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return
        }

        inputDigit(target.innerText);
        updateDisplay()
    });
}