function fazerLogout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "/index.html";
}

function verificarLogin() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    // Se estiver em uma página protegida e não estiver logado, redireciona:
    if (!usuarioLogado && window.location.pathname.includes("agendamento")) {
        localStorage.setItem("rotaDeRetorno", window.location.pathname);
        window.location.href = "../sections/login.html";
    }

    // Atualiza o cabeçalho conforme login
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

function fazerLogin(event) {
      event.preventDefault();

      const cpf = document.getElementById("cpf").value;
      const senha = document.getElementById("senha").value;

      const cpfValido = "000.000.000-00";
      const senhaValida = "1234";

      if (cpf === cpfValido && senha === senhaValida) {
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