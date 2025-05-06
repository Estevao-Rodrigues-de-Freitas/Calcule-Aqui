function calcularB(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    let delta = b * b - 4 * a * c;
    let resultado='';
    let calculobha = `\u0394 = (${b})² - 4 * (${a}) * (${c}) = ${delta}`;

    if(delta<0) {
        resultado = 'Não existem Raizes Reais';
    } else {
        let x1 = (-b + Math.sqrt(delta) / (2 * a));
        let x2 = (-b - Math.sqrt(delta) / (2 * a));
        resultado = `X1 = ${x1.toFixed(2)}, X2 = ${x2.toFixed(2)}`;
        calculobha += `\n x₁ = (-(${b}) + √${delta}) / (2 * ${a}) = ${x1.toFixed(2)}`;
        calculobha += `\n x₂ = (-(${b}) - √${delta}) / (2 * ${a}) = ${x2.toFixed(2)}`;
    }

    document.getElementById('resultado').innerText = resultado;
    document.getElementById('calculobha').innerText = calculobha;
}

function copiarResultado(){
    let resultado = document.getElementById('resultado').innerText;
    let calculobha = document.getElementById('calculobha').innerText;
    if(resultado){
        navigator.clipboard.writeText(resultado).then(() => {
            alert('Resultado Copiado');
        });
    }
}