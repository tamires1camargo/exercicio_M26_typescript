"use strict";
let area = calculaArea(15, 8);
document.getElementById("demo").innerHTML = area;
function calculaArea(base, altura) {
    return base * altura;
}
let pessoa = dizOla('Olá');
document.getElementById("hello").innerHTML = pessoa;
function dizOla(pessoa) {
    return `${pessoa} Tamires!`;
}
