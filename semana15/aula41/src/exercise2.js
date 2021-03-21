var obterEstatisticas = function (numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return a - b; } //numbers
    );
    var soma = 0; //number
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num; //number
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length // number
    };
    return estatisticas; //object
};
var amostra1 = {
    numeros: [1, 33, 55, 2, 45, 66, 55],
    obterEstatisticas: obterEstatisticas
};
