function numeros(numb1, numb2){
    if(!numb1 || !numb2) return`Defina dois números!`
    const primeiraFrase = criaPrimeiraFrase(numb1, numb2);
    const segundaFrase = criaSegundaFrase(numb1 - numb2);

    return`${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(numb1, numb2){
    let saoIguais = '';

    if(numb1 !== numb2){
        saoIguais = 'não';
    }

    return `Os números ${numb1} e ${numb2} ${saoIguais} são iguais.`
};

function criaSegundaFrase (numb1, numb2){
    const subtracao = numb1 - numb2;

    let menorQue10 = 'menor';
    let menorQue20 = 'menor';
    const compara10 = subtracao > 10;
    const compara20 = subtracao > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }

    return`Sua subtração é ${subtracao}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(numeros(5, 20))