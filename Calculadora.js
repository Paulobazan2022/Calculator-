/* Calculadora  */

function addNumber(number) {

    document.getElementById("result").value += number;
}


function addSimbol(num) {
    let resultado = document.getElementById("result").value
    if (num == 10) {
        let suma = document.getElementById("plus").value;
        if ((!resultado.includes("+")) && (!resultado.includes("-")) && (!resultado.includes("*")) && (!resultado.includes("/")) || resultado[0] == "-") {
            document.getElementById("result").value += suma
        }
    }
    if (num == 11) {
        let restas = document.getElementById("resta").value;

        if ((!resultado.includes("+")) && (!resultado.includes("-")) || resultado[0] == "-") {

            document.getElementById("result").value += restas;
        }
    }
    if (num == 12) {
        let division = document.getElementById("div").value;
        if ((!resultado.includes("+")) && (!resultado.includes("-")) && (!resultado.includes("*")) && (!resultado.includes("/")) || resultado[0] == "-") {
            document.getElementById("result").value += division
        }
    }
    if (num == 13) {
        let multiplicacion = document.getElementById("multi").value;
        if ((!resultado.includes("+")) && (!resultado.includes("-")) && (!resultado.includes("*")) && (!resultado.includes("/")) || resultado[0] == "-") {
            document.getElementById("result").value += multiplicacion
        }
    }
}

function reestablecer() {
    let borrado = document.getElementById("restart").value;
    document.getElementById("result").value = borrado
}

/* aqui va la funcion del calculo */

function igual() {
    let resultado = document.getElementById("result").value;
    let calc;
    let calc1;
    let total;

    if (resultado.includes("-")) {
        let pos = resultado.lastIndexOf("-");
        calc = parseInt(resultado.slice(0, pos));
        calc1 = parseInt(resultado.slice(pos + 1, resultado.length));
        total = calc - calc1;
        document.getElementById("result").value = total;
    }
    if (resultado.includes("+")) {
        let pos = resultado.indexOf("+");
        calc = parseInt(resultado.slice(0, pos));
        calc1 = parseInt(resultado.slice(pos + 1, resultado.length));
        total = calc + calc1;
        document.getElementById("result").value = total;
    }
    if (resultado.includes("*")) {
        let pos = resultado.indexOf("*");
        calc = parseInt(resultado.slice(0, pos));
        calc1 = parseInt(resultado.slice(pos + 1, resultado.length));
        total = calc * calc1;
        document.getElementById("result").value = total;
    }
    if (resultado.includes("/")) {
        let pos = resultado.indexOf("/");
        calc = parseInt(resultado.slice(0, pos));
        calc1 = parseInt(resultado.slice(pos + 1, resultado.length));
        total = calc / calc1;
        document.getElementById("result").value = total;
    }
}













