function contar() {
    var inicio = parseInt(document.getElementById('txtinic').value);
    var fim = parseInt(document.getElementById('txtfim').value);
    var passo = parseInt(document.getElementById('txtpasso').value);
    var res = document.getElementById('res');
    var resultado = '';

    if (passo <= 0) {
        res.innerHTML = 'O passo precisa ser maior que zero.';
        return;
    }

    if (inicio <= fim) {
        for (var i = inicio; i <= fim; i += passo) {
            resultado += i + ' ';
        }
    } else {
        for (var i = inicio; i >= fim; i -= passo) {
            resultado += i + ' ';
        }
    }

    res.innerHTML = resultado
}
