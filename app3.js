function refreshFormulaUno() {
    formularioU.reset();
}
function refreshFormulaDos() {
    formularioD.reset();
}
function refreshFormulaTres() {
    formularioT.reset();
}

//Intregral1
function formula() {
    let FX0 = parseFloat(document.getElementById("x0").value);
    let FX1 = parseFloat(document.getElementById("x1").value);

    let paso1 = ((FX0**3)/ 3);
    let paso2 = ((FX1**3)/ 3);
    let paso3 = paso2 - paso1;

    let resultado = paso3;

    document.getElementById("resultado").value = resultado;
    return result;
}

//Intregral2
function formulaDos() {
    let FX0 = parseFloat(document.getElementById("xx0").value);
    let FX1 = parseFloat(document.getElementById("xx1").value);

    let paso1 = (-((FX1**4)/ 2) - ((FX1**3)/3)- (FX1));
    let paso2 = (-((FX0**4)/ 2) - ((FX0**3)/3)- (FX0));
    let paso3 = paso2 - paso1;
    
    let resultadoDos = paso3;
    document.getElementById("resultadoDos").value = resultadoDos;
    return resultadoDos;
}

//Integral 3
function formulaTres() {
    let FX0 = parseFloat(document.getElementById("xx00").value);
    let FX1 = parseFloat(document.getElementById("xx11").value);
    
    let paso1 = (FX1**3);
    let paso2 = (FX0**3);
    let paso3 = paso1 - paso2;
    
    
    let resultadoTres = paso3;
    
    document.getElementById("resultadoTres").value = resultadoTres;
    return resultadoTres;
}