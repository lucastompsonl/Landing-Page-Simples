document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        showMessage('Please fill in all fields.');
    } else if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.');
    } else {
        showMessage('Thank you for signing up, ' + name + '!');
        // Aqui você pode adicionar código para enviar os dados do formulário para o servidor
        // Ou qualquer outra ação desejada após o envio do formulário bem-sucedido
        document.getElementById('signup-form').reset();
    }
});

function isValidEmail(email) {
    // Esta é uma validação básica de email, você pode usar uma expressão regular mais complexa se desejar
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
}