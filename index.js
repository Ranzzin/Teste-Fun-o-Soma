// Criar uma função que recebe um número inteiro positivo.
// Esta função retorna o somatório de todos os valores inteiros que são multiplos de 3 ou 5 que são inferiores ao número passado.


function somar(max){
    let multiploDe3 = 0;
    let multiploDe5 = 0;
    for (i = 0; i < max; i++){
        if(i % 3 === 0)
        multiploDe3 += i;
        if(i % 5 === 0)
        multiploDe5 += i;
    }
    console.log(divisivel3 + divisivel5);
}

somar(10);