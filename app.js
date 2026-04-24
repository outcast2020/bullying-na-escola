let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('slide-counter');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });

    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === slides.length - 1;
    counter.innerText = `${index + 1} / ${slides.length}`;
}

function changeSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
}

function registerVote(pollId, answer) {
    const currentSlide = slides[currentSlideIndex];
    const buttons = currentSlide.querySelectorAll('.poll-btn');
    
    buttons.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.innerText === answer) btn.classList.add('selected');
    });

    document.getElementById(`feedback-${pollId}`).innerText = "Voto computado com sucesso! ✔️";
}

showSlide(currentSlideIndex);
