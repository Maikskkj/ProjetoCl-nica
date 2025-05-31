
function gerarNumeroProtocolo() {
    const numero = Math.floor(100000 + Math.random() * 900000); 
    return numero;
}

function enviarRelatorio() {
    const areaDesejada = document.getElementById('areaDesejada').value;
    const descricaoSintomas = document.getElementById('descricaoSintomas').value.trim();
    const formulario = document.querySelector('.agendamento__form');

    
    if (areaDesejada === 'selecione') {
        alert('Por favor, selecione a área desejada.');
        return;
    }

    if (descricaoSintomas === '') {
        alert('Por favor, descreva brevemente seus sintomas.');
        return;
    }

 
    const numeroProtocolo = gerarNumeroProtocolo();
    document.getElementById('numeroProtocolo').textContent = numeroProtocolo;

    alert('Relatório enviado com sucesso!');

   
    formulario.reset();


    document.getElementById('areaDesejada').value = 'selecione';
}
 

document.querySelector('.botao__enviar').addEventListener('click', enviarRelatorio);
