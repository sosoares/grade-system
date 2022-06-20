
function calculaMedia(nota1,nota2){

    var media = (Number(nota1)+ Number(nota2))/2;
    return media;
}

function statusNota(media) {

    if (media >= 6) {

        var status = "Approved";

    } else {
        status = "Failed"
    }
    return status;

}
var aluno = document.querySelectorAll(".aluno");

for(i=0; i<aluno.length; i++){
var dado = aluno [i];
console.log(dado);

var nota1 =dado.querySelector(".notaP1").textContent; 
var nota2 = dado.querySelector(".notaP2").textContent; 
var medium = calculaMedia(nota1, nota2);
var valor = dado.querySelector(".media");
valor.textContent=medium;


var feedback = dado.querySelector('.status');
feedback.textContent = statusNota(medium);




}
function adicionaFormulario() {

    var form = document.querySelector("#formadiciona");
    var nome = form.nome.value;
    var notaP1 = form.notaP1.value;
    var notaP2 = form.notaP2.value;
   
}

function criarAluno(){

    var alunoTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var notaP1Td =  document.createElement("td");
    var notaP2td = document.createElement("td");

    nomeTd.textContent = nome;
    notaP1Td.textContent = notaP1;
    notaP2td.textContent = notaP2; 

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaP1Td);
    alunoTr.appendChild(notaP2td);

    var table = document.querySelector("#alunos");
    table.appendChild(alunoTr);

}




