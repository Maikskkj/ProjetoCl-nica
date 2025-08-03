// SEÇÃO DE REGISTRO
function valor(id) {
    return document.getElementById(id).value;
}

function verificarCamposObrigatorios() {
    const camposObrigatorios = [
        'cpf', 'nome', 'data', 'celular', 'email', 'confirmarEmail', 'senha', 'confirmarSenha', 'cep', 'endereco', 'bairro', 'uf', 'cidade'
    ];

    let camposVazios = [];

    camposObrigatorios.forEach((id) => {
        if (!valor(id) || valor(id).trim() === '') {
            camposVazios.push(id);
        }
    })

    const check = document.getElementById('check');
    if (!check.checked) {
        camposVazios.push('termos');
    }

    if (camposVazios.length > 0) {
        alert(`Preencha todos os campos obrigatórios: ${camposVazios.join(', ')}`);
        return;
    } 

    const email = valor('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Digite um e-mail válido.');
        return;
    }
    
    pegarDados(); 
    window.location.href = "login.html";
}


function pegarDados() {
    const dadosPessoais = {
        cpf: valor('cpf'),
        nome: valor('nome'),
        nascimento: valor('data'),
        telefone: valor('celular'),
        email: valor('email'),
        senha: valor('senha'),
        cep: valor('cep'),
        endereco: valor('endereco'),
        numero: valor('numero'),
        complemento: valor('complemento'),
        bairro: valor('bairro'),
        uf: valor('uf'),
        cidade: valor('cidade')
    };

    return localStorage.setItem('dadosPessoais', JSON.stringify(dadosPessoais));
}

const dadosSalvos = JSON.parse(localStorage.getItem('dadosPessoais'));

// SEÇÃO DE LOGIN
function fazerLogout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "/index.html";
}

function verificarLogin() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    const menuUsuario = document.getElementById('menuUsuario');

    if (menuUsuario) {
        if (usuarioLogado) {
            menuUsuario.innerHTML = `
                <div class="usuario-logado">
                    <span class="usuario-cpf">${usuarioLogado}</span>
                    <a class="botao-logout" onclick="fazerLogout()">
                        <img src="../img/logout.png" alt="Sair">
                    </a>
                </div>
            `;
        } else {
            menuUsuario.innerHTML = `
                <a class="menu__link" href="../sections/login.html">
                    <img class="icone__login" src="../img/PERFIL (1).svg" alt="Icone Log-in">
                    <span class="entrar__login">Entrar</span>
                </a>
            `;
        }
    }
}

function verificarAcessoAgendamento(event) {
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        event.preventDefault(); // impede a navegação padrão
        localStorage.setItem("rotaDeRetorno", "/sections/agendamento.html");
        window.location.href = "/sections/login.html";
    }
    // Se estiver logado, o link segue normalmente.
}

function fazerLogin(event) {
    event.preventDefault();

    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    //const cpfValido = "000.000.000-00";
    //const senhaValida = "1234";

    if (cpf === dadosSalvos.cpf && senha === dadosSalvos.senha) {
        localStorage.setItem("usuarioLogado", cpf);

        const rota = localStorage.getItem("rotaDeRetorno") || "../index.html";
        localStorage.removeItem("rotaDeRetorno");

        window.location.href = rota;
    } else {
        alert("CPF ou senha inválidos!");
    }
}

function mascaraCPF(input) {
    let valor = input.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    input.value = valor;
}
function mascaraTelefone(input) {
    let valor = input.value.replace(/\D/g, ""); 
    if (valor.length > 10) valor = valor.slice(0, 10); 
    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2"); 
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");    
    input.value = valor;
}