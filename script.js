// =======================
// LOGIN COM SENHA
// =======================
const loginOverlay = document.getElementById('login-overlay');
const loginInput = document.getElementById('login-input');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    const password = loginInput.value.trim();
    if(password === "1234"){
        loginOverlay.style.display = 'none';
    } else {
        alert("Senha incorreta! Tente novamente.");
        loginInput.value = "";
    }
});

// Permitir pressionar Enter para logar
loginInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        loginButton.click();
    }
});

// =======================
// ABAS / TABS
// =======================
const tabs = document.querySelectorAll('nav ul li');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remover active de todos
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Adicionar active na aba clicada
        tab.classList.add('active');
        tabContents[index].classList.add('active');
    });
});

// =======================
// CHECKLIST INTERATIVO
// =======================
// (o próprio HTML já tem checkboxes, aqui só podemos adicionar persistência opcional)
const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');

// Salvar estado dos checkboxes no localStorage
checkboxes.forEach(cb => {
    // Carregar estado
    if(localStorage.getItem(cb.id) === "checked"){
        cb.checked = true;
    }

    // Atualizar estado ao clicar
    cb.addEventListener('change', () => {
        if(cb.checked){
            localStorage.setItem(cb.id, "checked");
        } else {
            localStorage.removeItem(cb.id);
        }
    });
});

// =======================
// ANIMAÇÕES SUAVES
// =======================
tabContents.forEach(content => {
    content.style.transition = "all 0.5s ease-in-out";
});

// =======================
// FUNÇÃO EXTRA: MOSTRAR ALERTAS (OPCIONAL)
// =======================
function showMessage(msg){
    const alertBox = document.createElement('div');
    alertBox.innerText = msg;
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.background = "rgba(0,0,0,0.7)";
    alertBox.style.color = "#fff";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "8px";
    alertBox.style.zIndex = "1000";
    alertBox.style.opacity = "0";
    alertBox.style.transition = "all 0.5s ease";
    document.body.appendChild(alertBox);
    setTimeout(() => {
        alertBox.style.opacity = "1";
    }, 100);
    setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 500);
    }, 2000);
}
