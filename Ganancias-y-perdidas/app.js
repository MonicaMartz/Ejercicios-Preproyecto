//ingresos
var income = prompt("¿Cuál es el ingreso?");
//costo
var costs = prompt("¿Cuanto es el costo?");
//porcentaje de impuestos
var taxPercent = prompt("¿Cuanto es el prorcentaje % de impuestos?");
//ganancia bruta
var grossProfit = income- costs;
//obteniendo cantidad de impuestos
var tax = grossProfit* taxPercent/100;
//ganancia neta
var netIncome = grossProfit - tax;
//mostrando ganancia neta
document.write ("Tu ganancia meta es $"+ netIncome);
