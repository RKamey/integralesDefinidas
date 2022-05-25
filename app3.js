function refreshFormulaUno() {
    formularioU.reset();
}
function refreshFormulaDos() {
    formularioD.reset();
}
function refreshFormulaTres() {
    formularioT.reset();
}
  
function formula() {
    let FX0 = parseFloat(document.getElementById("x0").value);
    let FX1 = parseFloat(document.getElementById("x1").value);

    //intregral1
    //let paso1 = ((FX0**3)/ 3);
    //let paso2 = ((FX1**3)/ 3);
    //let paso3 = paso2 - paso1;

    //intregral2
    // let paso1 = (-((FX1**4)/ 2) - ((FX1**3)/3)- (FX1));
    // let paso2 = (-((FX0**4)/ 2) - ((FX0**3)/3)- (FX0));
    // let paso3 = paso2 - paso1;
  
    //integral3
    let paso1 = (FX1**3);
    let paso2 = (FX0**3);
    let paso3 = paso1 - paso2;
    
  
    let result = paso3;
  
    document.getElementById("resultado").value = result;
    return result;
}
  
