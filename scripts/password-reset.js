function recuperarSenha() {
            const cpf = document.getElementById('cpf').value.trim();
            const email = document.getElementById('email').value.trim();
            const novaSenha = document.getElementById('novaSenha').value;
            const confirmarSenha = document.getElementById('confirmarSenha').value;
            const check = document.getElementById('check').checked;

            // Validação dos campos
            if (!cpf || !email || !novaSenha || !confirmarSenha) {
                alert("Por favor, preencha todos os campos.");
                return false;
            }

            if (novaSenha.length < 6) {
                alert("A senha deve ter no mínimo 6 caracteres.");

                return false;
            }

            if (novaSenha !== confirmarSenha) {
                alert("As senhas não coincidem.");
                return false;
            }

            if (!check) {
                alert("Você deve aceitar os Termos e Política.");
                return false;
            }

            // Simulação de envio para servidor
            alert("Senha redefinida com sucesso! Verifique seu e-mail para confirmação.");
            
            window.location.href = "login.html";

            return false; // Impede o envio real do formulário (substituir por back-end depois)
        }