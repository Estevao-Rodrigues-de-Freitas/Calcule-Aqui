function calcular() {
    let cateto1 = document.getElementById("cateto1").value;
    let cateto2 = document.getElementById("cateto2").value;
    let hipotenusa = document.getElementById("hipotenusa").value;
    let calculoc = ""; // Inicia a variável para armazenar a explicação do cálculo

    // Verificar e transformar os valores em números
    cateto1 = cateto1 ? parseFloat(cateto1) : NaN;
    cateto2 = cateto2 ? parseFloat(cateto2) : NaN;
    hipotenusa = hipotenusa ? parseFloat(hipotenusa) : NaN;

    if (!isNaN(cateto1) && !isNaN(cateto2) && isNaN(hipotenusa)) {
        // Calculando a hipotenusa quando catetos são conhecidos
        hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2)).toFixed(2);
        calculoc = `Usando a Fórmula: c² = a² + b², onde a=${cateto1} e b=${cateto2}:\n\n` +
                    `c² = ${cateto1}² + ${cateto2}²\n` +
                    `c² = ${Math.pow(cateto1, 2)} + ${Math.pow(cateto2, 2)}\n` +
                    `c² = ${(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))}\n` +
                    `c = √${(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))}\n` +
                    `c = ${hipotenusa}`;
        
        document.getElementById("hipotenusa").value = hipotenusa;
        document.getElementById("resultado").innerText = `Hipotenusa: ${hipotenusa}`;
        document.getElementById("calculoc").innerText = calculoc; // Atualiza explicação do cálculo
    
    } else if (!isNaN(hipotenusa) && !isNaN(cateto1) && isNaN(cateto2)) {
        if (hipotenusa > cateto1) {
            // Calculando o cateto2 quando hipotenusa e cateto1 são conhecidos
            cateto2 = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2)).toFixed(2);
            calculoc = `Usando a Fórmula: b² = c² - a², onde c=${hipotenusa} e a=${cateto1}:\n\n` +
                       `b² = ${hipotenusa}² - ${cateto1}²\n` +
                       `b² = ${Math.pow(hipotenusa, 2)} - ${Math.pow(cateto1, 2)}\n` +
                       `b² = ${(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2))}\n` +
                       `b = √${(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2))}\n` +
                       `b = ${cateto2}`;
            
            document.getElementById("cateto2").value = cateto2;
            document.getElementById("resultado").innerText = `Cateto 2: ${cateto2}`;
            document.getElementById("calculoc").innerText = calculoc; // Atualiza explicação do cálculo
        } else {
            alert("A hipotenusa deve ser maior que os Catetos.");
        }
        
    } else if (!isNaN(hipotenusa) && !isNaN(cateto2) && isNaN(cateto1)) {
        if (hipotenusa > cateto2) {
            // Calculando o cateto1 quando hipotenusa e cateto2 são conhecidos
            cateto1 = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2)).toFixed(2);
            calculoc = `Usando a Fórmula: a² = c² - b², onde c=${hipotenusa} e b=${cateto2}:\n\n` +
                       `a² = ${hipotenusa}² - ${cateto2}²\n` + 
                       `a² = ${Math.pow(hipotenusa, 2)} - ${Math.pow(cateto2, 2)}\n` +
                       `a² = ${(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2))}\n` +
                       `a = √${(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2))}\n` +
                       `a = ${cateto1}`;    
            
            document.getElementById("cateto1").value = cateto1;
            document.getElementById("resultado").innerText = `Cateto 1: ${cateto1}`;
            document.getElementById("calculoc").innerText = calculoc; // Atualiza explicação do cálculo
        } else {
            alert("A Hipotenusa deve ser maior que os Catetos.");
        }
    } else {
        alert("Preencha dois Valores para Descobrir o Terceiro Valor.");
    }
}

function copiarResultado() {
    let resultado = document.getElementById("resultado").innerText;
    if (resultado) {
        let numero = resultado.split(": ")[1];
        navigator.clipboard.writeText(numero);
        alert("Resultado Copiado.");
    } else {
        alert("Nenhum Resultado para Copiar");
    }
}
