let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('slide-counter');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    // Atualiza botões de navegação
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
    
    // Atualiza contador
    counter.innerText = `${index + 1} / ${slides.length}`;
}

function changeSlide(step) {
    const newIndex = currentSlideIndex + step;
    if (newIndex >= 0 && newIndex < slides.length) {
        currentSlideIndex = newIndex;
        showSlide(currentSlideIndex);
    }
}

// Função para gerenciar os votos das pesquisas
function registerVote(pollId, answer) {
    // Aqui no futuro você fará a chamada (fetch) para o backend/planilha
    console.log(`Resposta registrada para ${pollId}: ${answer}`);
    
    // Atualiza o visual dos botões no slide atual
    const currentSlide = slides[currentSlideIndex];
    const buttons = currentSlide.querySelectorAll('.poll-btn');
    
    buttons.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.innerText === answer) {
            btn.classList.add('selected');
        }
        // Opcional: desabilitar botões após voto
        // btn.disabled = true; 
    });

    // Mensagem de feedback ao usuário
    const feedbackEl = document.getElementById(`feedback-${pollId}`);
    feedbackEl.innerText = "Resposta registrada! Obrigado pela participação.";
}

// Inicializa a apresentação
showSlide(currentSlideIndex);
