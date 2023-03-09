var nota1 = document.getElementById("nota1");
nota1.onkeyup = validarNota;
var nota2 = document.getElementById("nota2");
nota2.onkeyup = validarNota;
var nota3 = document.getElementById("nota3");
nota3.onkeyup = validarNota;

var error = document.createElement("p");
document.body.appendChild(error);

function validarNota(event)
{
    if (event.target.value < 1 || event.target.value > 10)
    {
        error.innerHTML = "Error. Ingrese un numero del 1 al 10";
    }
    else
    {
        error.innerHTML = "";
    }
}

var mostrarPromedio = document.createElement("p");
document.body.appendChild(mostrarPromedio);

function calcularPromedio()
{
    var promedio = ((parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value)) / 3);
    mostrarPromedio.innerHTML = "El promedio del alumno es " + promedio;
    if (promedio >= 6)
    {
        mostrarPromedio.style.color = "green";
    }
    else
    {
        mostrarPromedio.style.color = "red";
    }
}