
var button = document.querySelector('#botao-handler');
button.addEventListener("click", botao);

var validacao = true;


function botao(evento) {

    evento.preventDefault();

    var form = document.querySelector("#formadiciona");

    var discente = adicionaForms(form);

    var alunoTr = montaTr(discente);

    var table = document.querySelector("#alunos");

    table.appendChild(alunoTr);




    form.reset();

}

function adicionaForms(form) {

    var discente = {
        nome: form.nome.value,
        notaP1: form.notaP1.value,
        notaP2: form.notaP2.value,
        media: calculaMedia(form.notaP1.value, form.notaP2.value)

    }
    return discente;


}


function montaTr(discente) {



    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add('nome');
    var notaP1Td = document.createElement("td");
    notaP1Td.classList.add('notaP1');
    var notaP2td = document.createElement("td");
    notaP2td.classList.add('notaP2');
    var mediatd = document.createElement("td");
    mediatd.classList.add('media');
    var statustd = document.createElement("td");
    statustd.classList.add('status');

    nomeTd.textContent = discente.nome;
    notaP1Td.textContent = discente.notaP1;
    notaP2td.textContent = discente.notaP2;
    mediatd.textContent = discente.media;
    statustd.textContent = statusNota(discente.media);



    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaP1Td);
    alunoTr.appendChild(notaP2td);
    alunoTr.appendChild(mediatd);
    alunoTr.appendChild(statustd);


    if (discente.notaP1 < 0 || discente.notaP2 > 10) {

        statustd.textContent = "Insert a valid number";
    }
    if (discente.notaP2 < 0 || discente.notaP2 > 10) {

        statustd.textContent = "Insert a valid number";
        console.log('ta indo');
    }


    return alunoTr;

}




