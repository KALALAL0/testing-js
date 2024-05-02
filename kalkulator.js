let output = document.getElementById('output');

function kalkulator(){
    let numA = document.getElementById('numA').value;
    let numB = document.getElementById('numB').value;
    console.log(numA);
    console.log(numB);
    let resultat = eval(Number(numA)) + Number(numB);
    console.log(resultat);
    output.innerHTML = resultat;


}