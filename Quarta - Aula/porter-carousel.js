document.addEventListener('DOMContentLoaded', function() {
    const porterCarousel = document.querySelector('.porter-carousel');
    if (porterCarousel) {
        const slidesContainer = porterCarousel.querySelector('.porter-slides');
        const slides = porterCarousel.querySelectorAll('.porter-slide');
        const prevButton = porterCarousel.querySelector('.porter-prev-button');
        const nextButton = porterCarousel.querySelector('.porter-next-button');

        let currentIndex = 0;
        const slideCount = slides.length;

        if (prevButton) {
            prevButton.addEventListener('click', function() {
                console.log('Botão Anterior Clicado (Teste Básico)');
                currentIndex--;
                if (currentIndex < 0) currentIndex = slideCount - 1;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', function() {
                console.log('Botão Próximo Clicado (Teste Básico)');
                currentIndex++;
                if (currentIndex >= slideCount) currentIndex = 0;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        }
    }
});