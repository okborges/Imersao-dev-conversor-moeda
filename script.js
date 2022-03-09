function calcularDolar() {
  var valorDolar = parseFloat(document.getElementById("valor").value);
  var conversaoDolar = valorDolar * 5;

  resultado.innerHTML = "$" + conversaoDolar;
}

function calcularEuro() {
  var valorEuro = parseFloat(document.getElementById("valor").value);
  var conversaoEuro = valorEuro * 5.54;

  resultado.innerHTML = "$" + conversaoEuro;
}
