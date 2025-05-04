document.addEventListener("DOMContentLoaded", function () {
    // Defina o conteúdo HTML do menu dentro do JS
    const menuHTML = `
        <h1 class ="menu_nome">CALCULA AQUI</h3>
        <div class="assistentezero"><a href="https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/index.html"><img src="https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Desing/animado/0-assistente.gif" alt="assistzero" onmouseover="trocarimagem(this,'https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Desing/animado/0-assistente-selecionado.gif')" onmouseout="restaurarimagem(this,'https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Desing/animado/0-assistente.gif')"></a></div>
        <div class="body-um" id="bodyum">
            <input type="text" id="search" placeholder="Pesquisar..." onfocus="showMenu()" onkeyup="filterButtons()">
                <div class="menu-container" id="menuContainer">
                    <div class="button-container" id="buttonContainer">
                        <a href="https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Calculadora%20Basica/basecalculo.html" class="btnzz">Operações Básicas</a>
                        <a href="https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Media/basemedia.html" class="btnzz">Calcular Média</a>
                        <a href="https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Mediana/basemediana.html" class="btnzz">Calcular Mediana</a>
                        <a href="https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Moda/basemoda.html" class="btnzz">Calcular Moda</a>
                        <a href="https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Teorema%20de%20Pitagoras/basepitagoras.html" class="btnzz" class="btnzz">Teorema de Pitagoras</a>
                        <a href="https://estevao-rodrigues-de-freitas.github.io/Calcule-Aqui/Bhaskara/basebhaskara.html" class="btnzz">Calcular Bhaskara</a>
                    </div>
                </div>    
        </div>
    `;

    // Inserir o menu no elemento com o ID 'menuContainer'
    const menucomum = document.getElementById('menucomum');
    if (menucomum) {
        menucomum.innerHTML = menuHTML; // Aqui você insere o conteúdo do menu no container
    }
});

function showMenu() {
    let menu = document.getElementById("menuContainer");
    menu.style.display = "block";
    setTimeout(() => {
        menu.style.opacity = "1";
    }, 10);
}

function hideMenu() {
    let menu = document.getElementById("menuContainer");
    menu.style.opacity = "0";
    setTimeout(() => {
        menu.style.display = "none";
    }, 300);
}

function filterButtons() {
    let input = document.getElementById("search").value.toLowerCase();
    let buttons = document.querySelectorAll(".button-container a");

    let foundButtons = Array.from(buttons).filter(button => 
        button.textContent.toLowerCase().includes(input)
    );

    let exactMatch = foundButtons.find(button => button.textContent.toLowerCase() === input);
    if (exactMatch) {
        foundButtons = [exactMatch];
    }

    buttons.forEach(button => button.style.display = "none");
    foundButtons.forEach(button => button.style.display = "block");
}

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

document.addEventListener("click", function(event) {
    let searchInput = document.getElementById("search");
    let menuContainer = document.getElementById("menuContainer");

    if (!searchInput.contains(event.target) && !menuContainer.contains(event.target)) {
        hideMenu();
    }

});