// Espera o DOM (a página) ser completamente carregado para executar o código
document.addEventListener('DOMContentLoaded', function() {

    // Pega as referências dos elementos do HTML que vamos usar
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Adiciona um "escutador de evento" ao formulário.
    // Ele vai disparar a função quando o formulário for enviado (pelo clique no botão)
    loginForm.addEventListener('submit', function(event) {
        
        // event.preventDefault() impede o comportamento padrão do formulário,
        // que é recarregar a página.
        event.preventDefault();

        // Pega os valores digitados pelo usuário e remove espaços em branco
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // --- LÓGICA DE VALIDAÇÃO (EXEMPLO) ---
        // Em um sistema real, isso seria enviado para um servidor.
        // Aqui, vamos apenas comparar com valores fixos.
        
        const emailCorreto = "usuario@exemplo.com";
        const senhaCorreta = "senha123";

        if (email === emailCorreto && password === senhaCorreta) {
            // Se o login estiver correto
            errorMessage.textContent = ""; // Limpa a mensagem de erro
            alert("Login bem-sucedido! Bem-vindo!");
            // Aqui você poderia redirecionar o usuário para outra página
            // window.location.href = "outra-pagina.html";
        } else {
            // Se o login estiver incorreto
            errorMessage.textContent = "Email ou senha incorretos. Tente novamente.";
        }
    });

});
