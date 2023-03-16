var nota1 = document.getElementById("Matematica");
nota1.onkeyup = validarNota;
var nota2 = document.getElementById("Lengua");
nota2.onkeyup = validarNota;
var nota3 = document.getElementById("EFSI");
nota3.onkeyup = validarNota;

var resultado = document.getElementById("resultado");

var img = document.getElementById("imagen");
img.setAttribute("src", "https://media.tenor.com/bJj-iALYKAEAAAAC/minion-bienvenido.gif");

var error = document.createElement("p");
document.body.appendChild(error);

function validarNota(event) {
    if (event.target.value < 1 || event.target.value > 10) {
        error.innerHTML = "Error. Ingrese un numero del 1 al 10";
    }
    else {
        error.innerHTML = "";
    }
}

function calcularPromedio() {
    if (nota1.value === "" || nota2.value === "" || nota3.value === "") {
        alert("Error. Complete por favor todas los campos.");
    }
    else if (nota1.value < 1 || nota1.value > 10 || nota2.value < 1 || nota2.value > 10 || nota3.value < 1 || nota3.value > 10) {
        alert("Error. Ingrese notas validas, por favor.");
    }
    else {
        var promedio = ((parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value)) / 3);
        resultado.innerHTML = "El promedio del alumno es " + promedio;
        if (promedio >= 6) {
            resultado.style.color = "green";
            img.setAttribute("src", "https://i.pinimg.com/originals/52/0e/52/520e5212080d0fe14d1d9d2e766889e5.gif");
        }
        else {
            resultado.style.color = "red";
            img.setAttribute("src", "https://media.tenor.com/JbD_GUXxzzcAAAAC/crying-minions.gif");
        }
    }
}

function calcularMayor() {
    var max = 0;
    if (parseInt(nota1.value) >= parseInt(nota2.value) && parseInt(nota1.value) >= parseInt(nota3.value)) {
        max = nota1.value;
    }
    else if (parseInt(nota2.value) >= parseInt(nota1.value) && parseInt(nota2.value) >= parseInt(nota3.value)) {
        max = nota2.value;
    }
    else if (parseInt(nota3.value) >= parseInt(nota2.value) && parseInt(nota3.value) >= parseInt(nota1.value)) {
        max = nota3.value;
    }
    return max;
}

function materiaMayor() {
    if (nota1.value === "" || nota2.value === "" || nota3.value === "") {
        alert("Error. Complete por favor todas los campos.");
    }
    else if (nota1.value < 1 || nota1.value > 10 || nota2.value < 1 || nota2.value > 10 || nota3.value < 1 || nota3.value > 10) {
        alert("Error. Ingrese notas validas, por favor.");
    }
    else {
        var max = calcularMayor();
        console.log(max);
        console.log(nota3.value);
        var notaMax = "La nota mayor del alumno es de la/s materia/s: "
        if (nota1.value == max) notaMax += " Matematica ";
        if (nota2.value == max) notaMax += " Lengua ";
        if (nota3.value == max) notaMax += " EFSI ";
        resultado.innerHTML = notaMax;
        resultado.style.color = "blue";
    }
}