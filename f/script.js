document.getElementById('calcular').addEventListener('click', function() {
    var base = parseFloat(document.getElementById('base').value);
    var expoente = parseInt(document.getElementById('expoente').value);
    var resultado = 1;
    var fator = base;

    if (expoente === 0) {
        resultado = 1;
    } else if (expoente > 0) {
        while (expoente > 0) {
            resultado *= fator;
            expoente--;
        }
    } else {
        while (expoente < 0) {
            resultado /= fator;
            expoente++;
        }
    }

    document.getElementById('resultado').textContent = "O resultado de " + base + " elevado a " + expoente + " é " + resultado;
});