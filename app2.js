function refreshSustitucion() {
    formularioSecante.reset();
}

function formula() {
  let xi = parseFloat(document.getElementById("xi4").value); //X INFERIOR
  let xu = parseFloat(document.getElementById("xu4").value); //X SUPERIOR
  let error = parseFloat(document.getElementById("error4").value); //TOLERANCIA DE ERROR PER ITERACION
  
  document.getElementById("resultados").style.display = "block";
  let result = document.getElementById("Result"); //ITERACION IMPRESA
  result.textContent = "";
  let xa=0;
  let porcentualError = 0;
  let iteracion = 0;
  //if (xi == '' || xu == '' || error == '') {
  //result.innerHTML ="<h1>NO HAY DATOS</h1>";
  //} else {
  do {
    iteracion++

    //Sacar los valores de FXI y FXU
    let fXI = (xi * Math.exp(xi)) - 1;
    let fXU = (xu * Math.exp(xu)) - 1;

    //aplicar la formula de regla falsa
    let xr = xu - (((xi - xu) * fXU) / (fXI - fXU));

    //xa = xr;
    porcentualError = Math.abs(((xr - xa) / xr) * 100);
    xa = xr;

    let fXR = (xr * Math.exp(xr)) - 1;

    if (fXR < 0) {
        xi = xa;
    } else {
        xu = xr;
    }

    //EVALUAR NUEVO INTERVALO PARA IMPRIMIRLO
    let nuevoIntervalo = 0;
    if (Math.sign(fXI) === -1 && Math.sign(fXR) === 1) {
      nuevoIntervalo = `[${xi}, ${xr}]`;
    }
    if (Math.sign(fXR) === -1 && Math.sign(fXU) === 1) {
      nuevoIntervalo = `[${xr}, ${xu}]`;
    }

    result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><b>Error = </b>${porcentualError}%<br><br><b>Fxi(${xi}) = </b>${fXI}<br><b>Fxr(${xr}) = </b>${fXR}<br><b>Fxu(${xu}) = </b>${fXU}<br><br><b>Siguiente Intervalo = </b>${nuevoIntervalo}</p><br>`;
  } while (porcentualError >= error);
//}

}