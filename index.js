function addInput(input){
    var operators = ["+", "-", "*", "/", "sqrt"];
    output = document.getElementById("output");
    if (output.value == "Syntax Error"){
        output.value = "";
    }
    if (operators.includes(input)){
        output = document.getElementById("output");
        if (operators.includes(output.value.slice(-1))){
            output.value = output.value.slice(0, -1);
        }
        else if (output.value == ""){
            output.value = "";
        }
        else{
            output.value += input;
        }
    }
    else {
        output.value += input;
    }
}

function clearInput(){
    output = document.getElementById("output");
    output.value = "";
}

function deleteInput(){
    output = document.getElementById("output");
    if (output.value == "Syntax Error"){
        output.value = "";
    }
    output.value = output.value.slice(0, -1);
}

function calculate(){
    var operators = ["+", "-", "*", "/"];
    output = document.getElementById("output");
    if (output.value == "Syntax Error"){
        output.value = "";
    }
    if (operators.includes(output.value.slice(-1))){
        output.value = "Syntax Error"
        return;
    }
    if (output.value === ""){
        output.value = "";
        return;
    }
    else{   
        output.value = eval(output.value);
    }
}