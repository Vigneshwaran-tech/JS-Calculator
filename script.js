// 
let display = document.getElementById("display");

//displays the value or buttoms onclick
function appendValue(val){
    display.value += val;
}


//clear the values
function clearDisplay(){
    display.value = "";
}

//error handling
function calculateResult(){
    try{
        display.value = eval(display.value);
    } catch (error){
        display.value = "ERROR";
    }
}

