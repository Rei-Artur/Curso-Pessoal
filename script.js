function verificarSenha() {
    const senha = document.getElementById('senha').value;
    if(senha === '1234') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        document.getElementById('erro-senha').innerText = 'Senha incorreta!';
    }
}

function mostrarModulo(n) {
    const modulos = document.querySelectorAll('.modulo');
    modulos.forEach(m => m.classList.add('hidden'));
    document.getElementById(`modulo${n}`).classList.remove('hidden');
}

