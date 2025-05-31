    document.addEventListener('DOMContentLoaded', function () {
        const dataInput = document.getElementById('selecioneData');
        const enviarBtn = document.querySelector('.botao__enviar');
        const numeroProtocolo = document.getElementById('numeroProtocolo');
        const areaDesejada = document.getElementById('areaDesejada');
        const descricaoSintomas = document.getElementById('descricaoSintomas');

        // Bloqueia datas aos sábados e domingos
        dataInput.addEventListener('input', function () {
            const dataSelecionada = new Date(this.value);
            const diaSemana = dataSelecionada.getDay();
            if (diaSemana === 0 || diaSemana === 6) { // 0 = Domingo, 6 = Sábado
                alert('Não é possível agendar aos sábados e domingos. Por favor, selecione um dia útil.');
                this.value = '';
            }
        });

        enviarBtn.addEventListener('click', function () {
            const area = areaDesejada.value;
            const sintomas = descricaoSintomas.value.trim();
            const data = dataInput.value;

            if (area === 'selecione' || !sintomas || !data) {
                alert('Por favor, preencha todos os campos antes de enviar.');
                return;
            }

            // Gera um número de protocolo aleatório de 6 dígitos
            const protocolo = Math.floor(100000 + Math.random() * 900000);
            numeroProtocolo.textContent = protocolo;

            // Limpa os campos
            areaDesejada.value = 'selecione';
            descricaoSintomas.value = '';
            dataInput.value = '';

            alert('Agendamento realizado com sucesso! Seu número de protocolo é: ' + protocolo + 'Outras informações foram enviadas por e-mail');
        });
    });

