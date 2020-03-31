
function conversor() {
    var valor = document.querySelector("#inputA").value;
    var selectA = document.getElementById("selectA").value;
    var selectB = document.getElementById("selectB").value;
    console.log(valor);
    console.log(selectB);
    console.log(selectA);
    var resultado;

    if ( selectA == selectB)
    resultado = valor;

    else if (selectA == "EUR"){
        if(selectB == "USD")
        resultado = 1.1 * valor;
        if(selectB == "BTC")
        resultado = 0.00017 * valor;
    }
    else if (selectA == "USD"){
        if(selectB == "EUR")
        resultado = 0.91 * valor;
        if(selectB == "BTC")
        resultado = 0.00016 * valor;
    }
    else if (selectA == "BTC"){
        if(selectB == "USD")
        resultado = 6447.70 * valor;
        if(selectB == "EUR")
        resultado = 5858.99 * valor;
    }
    document.getElementById("result").innerHTML = resultado;
    console.log(resultado);
};

