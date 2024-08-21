const form = document.getElementById('form-info-aluno');
var alunoInfo = [];
var alunoNaoEntrou;
var alunoFaltou;
var alunoVeio;
var alunoRemarcou;
var alunoConfirmar;

form.addEventListener('submit', function(e){
    e.preventDefault();

    fillArray();
    generateNotifications();
    atualizaNotificacoes();
    document.getElementById('articles').style.display = 'flex';
});

function fillArray(){
    const inputTextArea = document.getElementById('textarea-info');
    alunoInfo = inputTextArea.value.split("\n");
};

function generateNotifications(){
    var textoBase = `${alunoInfo[0]}\n${alunoInfo[1]}\n${alunoInfo[2]}\n${alunoInfo[3]}\n${alunoInfo[4]}`;
    
    alunoNaoEntrou = `🟡${textoBase}🟡\nAluno ainda não entrou na sala`;

    alunoVeio = `✅${textoBase}✅\nForms enviado`;

    alunoFaltou = `❌${textoBase}❌\nAluno faltou`;

    alunoRemarcou = `📅${textoBase}📅\nAluno pediu reagendamento`;

    alunoConfirmar = `⚠️${textoBase}⚠️\nConfirmar link`;
};

function atualizaNotificacoes(){
    document.getElementById('notificacao-entrada').innerHTML = alunoNaoEntrou.replaceAll("\n", "<br/>");

    document.getElementById('notificacao-veio').innerHTML = alunoVeio.replaceAll("\n", "<br/>");

    document.getElementById('notificacao-faltou').innerHTML = alunoFaltou.replaceAll("\n", "<br/>");

    document.getElementById('notificacao-reagendou').innerHTML = alunoRemarcou.replaceAll("\n", "<br/>");

    document.getElementById('notificacao-confirmar').innerHTML = alunoConfirmar.replaceAll("\n", "<br/>");
};