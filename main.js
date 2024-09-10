const form = document.getElementById('form-info-aluno');
var alunoInfo = [];
var alunoNaoEntrou;
var alunoFaltou;
var alunoVeio;
var alunoRemarcou;
var alunoConfirmar;

$('#button-vendedor').click(function (e) { 
    e.preventDefault();

    $('.animate-form').slideToggle();
});

$('form').on('submit', function (e) { 
    e.preventDefault();
    
    fillArray();
    generateNotifications();
    atualizaNotificacoes();
    $('.animate-shortcuts').slideDown();
});


function fillArray(){
    alunoInfo = $('#textarea-info').val().split('\n');
};

function generateNotifications(){
    var textoBase = `${alunoInfo[0]}\n${alunoInfo[1]}\n${alunoInfo[2]}\n${alunoInfo[3]}\n${alunoInfo[4]}`;
    
    alunoNaoEntrou = `🟡${textoBase}\nAluno não entrou🟡`;

    alunoVeio = `✅${textoBase}\nEncerrada✅`;

    alunoFaltou = `❌${textoBase}\nFalta❌`;

    alunoRemarcou = `📅${textoBase}\nReagendamento📅`;

    alunoConfirmar = `⚠️${textoBase}\nConfirmar link⚠️`;
};

function atualizaNotificacoes(){

    $('#notificacao-entrada').html(alunoNaoEntrou.replaceAll("\n", "<br/>"));

    $('#notificacao-veio').html(alunoVeio.replaceAll("\n", "<br/>"));

    $('#notificacao-faltou').html(alunoFaltou.replaceAll("\n", "<br/>"));

    $('#notificacao-reagendou').html(alunoRemarcou.replaceAll("\n", "<br/>"));

    $('#notificacao-confirmar').html(alunoConfirmar.replaceAll("\n", "<br/>"));
};