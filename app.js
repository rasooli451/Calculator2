



let first = "";
let second = "";
let operation = false;
let temp = "";

let oper = "";

const input = document.querySelector(".display .input");

const result = document.querySelector(".display .result");

const keys = document.querySelectorAll(".key");



function add(first, second){
    return first + second;
}

function minus(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function divide(first, second){
    return first / second;
}



function operate(operator, firstnumber, secondnumber){
    let result = 0;
    switch(operator){
        case("+"):
           result = add(firstnumber, secondnumber);
           break;
        case ("-"):
            result = minus(firstnumber , secondnumber);
            break;
        case ("÷"):
            result = divide(firstnumber , secondnumber);
            if (String(result).length > 4){
                result = Number(String(result).slice(0, 4));
            }
            break;
        case ("×"):
            result = multiply(firstnumber , secondnumber);
            break;
    }
    return result;
}



keys.forEach((key)=>{
    key.addEventListener("click", ()=>{
        if (key.classList.contains("num")){
            input.innerHTML += key.innerHTML;
            temp += key.innerHTML;
            operation = true;
        }
        else if (key.classList.contains("opp")){
              if (operation && input.innerHTML.length > 0){
                   input.innerHTML += key.innerHTML;
                   if (first.length == 0){
                         first = temp;
                         console.log(first);
                        }
                    else{
                        second = temp;
                        console.log(second);
                        first = operate(oper, Number(first), Number(second));
                        console.log(first);
                    }
                    oper = key.innerHTML;
                    temp = "";
                    operation = false;
                }
        }
        else if(key.classList.contains("equals")){
            second = temp;
            result.innerHTML = operate(oper, Number(first), Number(second));
            first = "";
            second = "";
            operation = false;
            temp = "";
            input.innerHTML = "";
        }
        else if(key.classList.contains("clear")){
            input.innerHTML = "";
            result.innerHTML = "";
            first = "";
            second = "";
            operation = false;
            temp = ""
        } 
    })
})