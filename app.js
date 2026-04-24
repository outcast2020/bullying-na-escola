const slides = [
    {
        title: "Pesquisa Inicial",
        content: "Você já viu, cometeu ou sofreu bullying?",
        type: "poll"
    },
    {
        title: "O que é Bullying?",
        content: "Comportamento agressivo, repetitivo e intencional, sem motivação óbvia, exercido por um ou mais indivíduos contra outro.",
        type: "text"
    },
    {
        title: "Tipos Comuns",
        content: "Físico (bater), Verbal (insultos), Social (exclusão) e Psicológico (chantagem).",
        type: "text"
    },
    {
        title: "Sua Experiência Digital",
        content: "Você já viu, cometeu ou sofreu Cyberbullying?",
        type: "poll"
    },
    {
        title: "Cyberbullying",
        content: "O bullying no ambiente digital. Atinge a vítima em qualquer lugar, 24h por dia, com alto poder de disseminação.",
        type: "text"
    },
    {
        title: "Como Agir?",
        content: "Não silencie. Busque ajuda, guarde provas (prints) e acolha quem precisa. Empatia é o melhor antídoto.",
        type: "text"
    }
];

let currentSlide = 0;

function renderSlide() {
    const app = document.getElementById('app');
    const slideData = slides[currentSlide];
    
    let html = `<div class="slide">
                    <h2>${slideData.title}</h2>
                    <p>${slideData.content}</p>`;
    
    if (slideData.type === 'poll') {
        html += `
            <div class="poll-options">
                <button class="poll-btn" onclick="submitVote('Sim')">Sim</button>
                <button class="poll-btn" onclick="submitVote('Não')">Não</button>
                <button class="poll-btn" onclick="submitVote('Não tenho certeza')">Não tenho certeza</button>
            </div>`;
    }
    
    html += `</div>`;
    app.innerHTML = html;
    document.getElementById('progress').innerText = `${currentSlide + 1} / ${slides.length}`;
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= slides.length) currentSlide = slides.length - 1;
    renderSlide();
}

function submitVote(option) {
    alert(`Voto registrado: ${option}. (Aqui você conectará ao seu backend futuramente!)`);
    changeSlide(1);
}

// Inicializa
renderSlide();
