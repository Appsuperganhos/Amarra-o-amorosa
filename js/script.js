function advanceProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';

            if (width % 10 === 0) { // A cada 10% de avanço, solta os corações
                releaseHearts(progressBar);
            }
        }
    }, 100); // Aumenta 1% a cada 100ms
}

function releaseHearts(progressBar) {
    for (let i = 0; i < 5; i++) { // Gera 5 corações por vez
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${progressBar.offsetWidth + (Math.random() * 20 - 10)}px`;
        progressBar.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // Remove o coração após a animação
        }, 2000);
    }
}

// Função para mostrar a seção de idade após selecionar o gênero masculino
document.getElementById('male').addEventListener('click', function() {
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('age-selection').style.display = 'block';
    document.getElementById('progress-bar-container').style.display = 'block';
    advanceProgressBar(); // Avança a barra de progresso
});

// Evento para as opções de idade que avançam para a próxima seção com progresso adicional
document.querySelectorAll('.age-options .option').forEach(function(option) {
    option.addEventListener('click', function() {
        document.getElementById('age-selection').style.display = 'none';
        document.getElementById('success-story').style.display = 'block';
        advanceProgressBar(); // Avança a barra de progresso
    });
});

// Evento para o botão "Continuar" na seção de sucesso que avança para a quarta seção
document.getElementById('continue-to-results').addEventListener('click', function() {
    document.getElementById('success-story').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    advanceProgressBar(); // Avança a barra de progresso
});

// Evento para o botão "Continuar" na seção de resultados que avança para a quinta seção
document.getElementById('continue-final').addEventListener('click', function() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('reasons').style.display = 'block';
    advanceProgressBar(); // Avança a barra de progresso
});
