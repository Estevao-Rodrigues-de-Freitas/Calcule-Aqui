document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const carrosel = document.getElementById("carrossel");
    const imagens = document.querySelectorAll(".imagemc");
    const totalImagens = imagens.length;
    const container = document.querySelector(".carrossel-setass");

    function getImagemWidth() {
        const imagem = imagens[0];
        const style = window.getComputedStyle(imagem);
        const gap = parseFloat(window.getComputedStyle(carrosel).gap) || 0;
        return imagem.offsetWidth + gap;
    }

    function getMaxIndex() {
        const imagemWidth = getImagemWidth();
        const containerWidth = container.offsetWidth;
        const imagensVisiveis = Math.floor(containerWidth / imagemWidth);
        return totalImagens - imagensVisiveis;
    }

    function updateCarrossel() {
        const imagemWidth = getImagemWidth();
        const maxIndex = getMaxIndex();

        index = Math.min(index, maxIndex);
        carrosel.style.transform = `translateX(${-index * imagemWidth}px)`;
    }

    window.moverEsquerda = function () {
        if (index > 0) {
            index--;
            updateCarrossel();
        }
    };

    window.moverDireita = function () {
        const maxIndex = getMaxIndex();
        
        if (index < maxIndex) {
            index++;
            updateCarrossel();
        }
    };

    window.addEventListener("resize", updateCarrossel);
    updateCarrossel();



    window.trocarimagem = function(element, novaSrc) {
        element.style.animation = 'none'; // Remove a animação ao passar o mouse
        element.src = novaSrc;
    }
    
    window.restaurarimagem = function(element, originalSrc) {
        element.src = originalSrc;
        
        // Verifica se o elemento pertence à classe imagemc antes de aplicar a animação
        if (element.closest('.imagemc')) {
            element.style.animation = 'imagemcdistorce 7s ease-in-out infinite';
        }
    };

});
