function recuperarSenha() {
            const cpf = document.getElementById('cpf').value.trim();
            const email = document.getElementById('email').value.trim();
            const novaSenha = document.getElementById('novaSenha').value;
            const confirmarSenha = document.getElementById('confirmarSenha').value;
            const check = document.getElementById('check').checked;

            // Validação dos campos
            if (!cpf || !email || !novaSenha || !confirmarSenha) {
                //alert("Por favor, preencha todos os campos.");
                let texto = document.getElementById('textoTitulo');
                texto.innerText = 'Por favor, preencha todos os campos.';
                let textoParagrafo = document.getElementById('textoParagrafo');
                textoParagrafo.innerText = 'Não foi possível prosseguir, por favor verifique todos os campos e tente novamente!';
                return false;
            }

            if (novaSenha.length < 6) {
                //alert("A senha deve ter no mínimo 6 caracteres.");
                let texto = document.getElementById('textoTitulo');
                texto.innerText = 'A senha deve ter no mínimo 6 caracteres.';
                let textoParagrafo = document.getElementById('textoParagrafo');
                textoParagrafo.innerText = 'Tente novamente, recomendamos utilizar números e símbolos especias para uma senha forte!';
                return false;
            }

            if (novaSenha !== confirmarSenha) {
                //alert("As senhas não coincidem.");
                let texto = document.getElementById('textoTitulo');
                texto.innerText = 'As senhas não coincidem.';
                let textoParagrafo = document.getElementById('textoParagrafo');
                textoParagrafo.innerText = 'Quase la, verifique os campos de senha e tente novamente para podermos prosseguir!';
                return false;
            }

            if (!check) {
                //alert("Você deve aceitar os Termos e Política.");
                let texto = document.getElementById('textoTitulo');
                texto.innerText = 'Você deve aceitar os nossos Termos e Ploítica.';
                let textoParagrafo = document.getElementById('textoParagrafo');
                textoParagrafo.innerText = 'Para prosseguir com a redefinição você deve estar de acordo com nossos Termos e Plítica!';
                return false;
            }

            // Simulação de envio para servidor
            let texto = document.getElementById('textoTitulo');
                texto.innerText = 'Senha alterada com sucesso!';
            let textoParagrafo = document.getElementById('textoParagrafo');
                textoParagrafo.innerText = 'Você já pode fechar está página e voltar a area de log-in, é bom tê-lo de volta!';
            alert("Senha redefinida com sucesso! Verifique seu e-mail para confirmação.");
            
            // Aqui você poderia redirecionar ou limpar os campos
            // window.location.href = "login.html";

            return false; // Impede o envio real do formulário (substituir por back-end depois)
        }