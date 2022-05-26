function refreshBiseccion() {
  let result = document.getElementById("Result");
  result.innerHTML = "";
  document.getElementById("resultados").style.display = "none";
  formularioBiseccion.reset();
}
/*
function allInputs() {
    let result = document.getElementById("Result");
    let fx = document.getElementById("Fx").value;
    let xi = document.getElementById("xi3").value;
    let xu = document.getElementById("xu3").value;
    let error = document.getElementById("error3").value;
  
    if (fx == "" || xi == "" || xu == "" || error == "") {
      result.innerHTML = `<h2>ERROR</h2><p>Ingrese todos los campos correctamente</p>`;
    }
  }
*/
function formula() {
    let fx = document.getElementById("Fx").value; // FUNCTION
    let xi = parseFloat(document.getElementById("xi3").value); //X INFERIOR
    let xu = parseFloat(document.getElementById("xu3").value); //X SUPERIOR
    let error = parseFloat(document.getElementById("error3").value); //TOLERANCIA DE ERROR PER ITERACION
    
    document.getElementById("resultados").style.display = "block";
    let result = document.getElementById("Result"); //ITERACION IMPRESA
    result.textContent = "";
    let xa=0;
    let porcentualError = 0;
    let iteracion = 0;
    fx = fx.replace("^", "**");
  if (fx.length == 0 || xi == '' || xu == '' || error == '') {
    result.innerHTML ="<h1>NO HAY DATOS</h1>";
  } else {
    do {
      iteracion++;
      xr = (xi + xu) / 2;
      
      porcentualError = Math.abs(((xr - xa) / xr) * 100);
      xa = xr;
      //EVALUAR F(xi) F(xr) F(xu);
      let fXI = eval(fx.replace(/x/g, xi));
      let fXR = eval(fx.replace(/x/g, xr));
      let fXU = eval(fx.replace(/x/g, xu));
      
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
  }
  
  }