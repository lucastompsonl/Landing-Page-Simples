document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        showMessage('Por favor, preencha todos os campos.');
    } else if (!isValidEmail(email)) {
        showMessage('Por favor, insira um email válido.');
    } else {
        showMessage('Obrigado por inscrever-se, ' + name + '!');
        // código para enviar os dados do formulário para o servidor
        // Ou outra ação após o envio do formulário bem-sucedido
        document.getElementById('signup-form').reset();
    }
});

function isValidEmail(email) {
    // validação básica de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
}