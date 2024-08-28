document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        genderSelection: document.getElementById('gender-selection'),
        ageSelection: document.getElementById('age-selection'),
        successStory: document.getElementById('success-story'),
        results: document.getElementById('results'),
        reasons: document.getElementById('reasons'),
        relationshipProfile: document.getElementById('relationship-profile'),
        relationshipImprovements: document.getElementById('relationship-improvements'),
        previousAttempts: document.getElementById('previous-attempts'),
        recurringThoughts: document.getElementById('recurring-thoughts'),
        negativeEnergies: document.getElementById('negative-energies'),
        futureDesired: document.getElementById('future-desired')
    };

    const progressBar = document.getElementById('progress-bar');
    let progress = 0;

    function advanceProgressBar(percent) {
        var currentWidth = parseFloat(progressBar.style.width) || 0;
        var targetPercent = currentWidth + (percent || 10); // Usa o parâmetro ou avança 10% por padrão
        var increment = 1; // Ajuste o incremento conforme necessário
        var interval = setInterval(function() {
            if (currentWidth < targetPercent) {
                currentWidth += increment;
                progressBar.style.width = currentWidth + '%';
            } else {
                clearInterval(interval);
            }
        }, 10); // Ajuste o intervalo conforme necessário para a velocidade do avanço
    }

    function showSection(currentSection, nextSection, incrementProgress) {
        currentSection.style.display = 'none';
        nextSection.style.display = 'block';

        if (incrementProgress) {
            advanceProgressBar(); // Avança a barra de progresso
        }
    }

    document.getElementById('male').addEventListener('click', () => {
        showSection(sections.genderSelection, sections.ageSelection, true);
    });

    document.getElementById('female').addEventListener('click', () => {
        showSection(sections.genderSelection, sections.ageSelection, true);
    });

    document.querySelectorAll('.age-options .option').forEach(option => {
        option.addEventListener('click', () => {
            showSection(sections.ageSelection, sections.successStory, true);
        });
    });

    document.getElementById('continue-to-results').addEventListener('click', () => {
        showSection(sections.successStory, sections.results, true);
    });

    document.getElementById('continue-final').addEventListener('click', () => {
        showSection(sections.results, sections.reasons, true);
    });

    document.querySelectorAll('#reasons .option-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(sections.reasons, sections.relationshipProfile, true);
        });
    });

    document.querySelectorAll('#relationship-profile .option-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(sections.relationshipProfile, sections.relationshipImprovements, true);
        });
    });

    document.querySelectorAll('#relationship-improvements .option-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(sections.relationshipImprovements, sections.previousAttempts, true);
        });
    });

    document.querySelectorAll('#previous-attempts .option-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(sections.previousAttempts, sections.recurringThoughts, true);
        });
    });

    document.querySelectorAll('#recurring-thoughts .option-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(sections.recurringThoughts, sections.negativeEnergies, true);
        });
    });

    document.querySelectorAll('#negative-energies .option-button').forEach(button => {
        button.addEventListener('click', () => {
            showSection(sections.negativeEnergies, sections.futureDesired, true);
            advanceProgressBar(5); // Avança 5% da barra ao final
        });
    });

    // Função para resetar o quiz e reiniciar o progresso
    function resetQuiz() {
        sections.genderSelection.style.display = 'block';
        sections.ageSelection.style.display = 'none';
        sections.successStory.style.display = 'none';
        sections.results.style.display = 'none';
        sections.reasons.style.display = 'none';
        sections.relationshipProfile.style.display = 'none';
        sections.relationshipImprovements.style.display = 'none';
        sections.previousAttempts.style.display = 'none';
        sections.recurringThoughts.style.display = 'none';
        sections.negativeEnergies.style.display = 'none';
        sections.futureDesired.style.display = 'none';

        progress = 0;
        progressBar.style.width = `${progress}%`;
    }

    document.getElementById('reset-button')?.addEventListener('click', resetQuiz);
});
