let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

form.addEventListener('submit', e =>{
    e.preventDefault()
})



function validar(){
    let x = num1.value;
    let y = num2.value;

    if(x <= y){
        document.getElementById("resultado").innerText = "Para o formulário ser válido, o segundo número precisa ser maior que o primeiro"
    }else{
        document.getElementById("resultado").innerText = "formulário válido!"
    }
}

