// Função para mostrar a seção de idade após selecionar o gênero masculino
document.getElementById('male').addEventListener('click', function() {
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('age-selection').style.display = 'block';
    document.getElementById('progress-bar-container').style.display = 'block';
    advanceProgressBar(25); // Barra de progresso avança para 25%
});

// Evento para as opções de idade que avançam para a próxima seção com progresso adicional
document.querySelectorAll('.age-options .option').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('age-selection').style.display = 'none';
        document.getElementById('success-story').style.display = 'block';
        advanceProgressBar(50); // Barra de progresso avança para 50%
    });
});

// Evento para o botão "Continuar" na seção de sucesso que avança para a quarta seção
document.getElementById('continue-to-results').addEventListener('click', function() {
    document.getElementById('success-story').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    advanceProgressBar(75); // Barra de progresso avança para 75%
});

// Evento para o botão "Continuar" na seção de resultados que avança para a quinta seção
document.getElementById('continue-final').addEventListener('click', function() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('reasons').style.display = 'block';
    advanceProgressBar(100); // Barra de progresso avança para 100%
});

// Função para avançar a barra de progresso
function advanceProgressBar(percent) {
    var progressBar = document.getElementById('progress-bar');
    var currentWidth = parseInt(progressBar.style.width);
    var interval = setInterval(function() {
        if (currentWidth < percent) {
            currentWidth++;
            progressBar.style.width = currentWidth + '%';
            createHeartEffect(); // Cria o efeito de corações enquanto a barra avança
        } else {
            clearInterval(interval);
        }
    }, 20); // A velocidade de avanço pode ser ajustada aqui
}

// Função para criar o efeito de corações
function createHeartEffect() {
    var heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    document.getElementById('progress-bar-container').appendChild(heart);
    setTimeout(function() {
        heart.remove();
    }, 1000); // Remove o coração após 1 segundo
}
