var salarioAntesdeAjuste;
var aumento;
var salarioDespuesdeAjuste;
aumento=parseFloat(aumento);
salarioAntesdeAjuste=parseFloat(salarioAntesdeAjuste);
salarioDespuesdeAjuste=parseFloat(salarioDespuesdeAjuste);
salarioAntesdeAjuste=parseFloat(prompt("Ingrese su salario"));
if (salarioAntesdeAjuste<1300606) {
    aumento=salarioAntesdeAjuste*0.15
} else {
    aumento=0
}
salarioDespuesdeAjuste=salarioAntesdeAjuste+aumento;
alert("El salario despues de ajuste es " +salarioDespuesdeAjuste);

