// Seleciona os elementos
const inputNome = document.querySelectorAll('input')[0];
const inputSenha = document.querySelectorAll('input')[1];
const btnValidar = document.querySelector('button');

// Cria um elemento para exibir as mensagens
const mensagem = document.createElement('p');
document.body.appendChild(mensagem);

btnValidar.onclick = function() {
    const nome = inputNome.value.trim();
    const senha = inputSenha.value;

    // 1. Verificar se o nome está vazio
    if (nome === "") {
        mensagem.textContent = "Nome obrigatório";
        mensagem.style.color = "black";
        return;
    }

    // 3 e 4. Verificar tamanho da senha e alterar cores
    const total = senha.length;

    if (total < 5) {
        mensagem.textContent = "Senha fraca";
        mensagem.style.color = "red";
    } 
    else if (total >= 5 && total <= 7) {
        mensagem.textContent = "Senha média";
        mensagem.style.color = "orange"; // Amarelo fica ruim de ler no branco, usei orange
    } 
    else {
        mensagem.textContent = "Senha forte";
        mensagem.style.color = "green";
    }
};
