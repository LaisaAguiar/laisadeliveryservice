const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]
//Desafio 1 - Métodos específicos (map, find, some, every e filter)

//Cria e imprime no console um array só com os nomes
//map cria um novo array com os elementos mapeados
const nomes = colaboradores.map((colab) => {
    return colab.name;
})
console.log(nomes)

//Cria e imprime no console um array com colaboradores que são front-end
//filter filtra o array original e a saida é um novo array com um subconjunto devido a uma condição
const frontend = colaboradores.filter((colab) => {
    return colab.cargo === 'front-end';
})
console.log(frontend)

//Imprima no console o primeiro colaborador maior de 23 anos
//find precisa de uma condição, a partir disso vai retornar o valor do primeiro elemento do array que satisfaça essa condição
const idadezinha = colaboradores.find((colab) => {
    return colab.idade > 23;
})
console.log(idadezinha)

//Imprima no console todos os colaboradores do array maiores de 18 anos
//every testa se todos os elementos do array passam pela condição implementado pela função fornecida (retorna true ou false)
const age = colaboradores.every((colab) => {
    return colab.idade > 18;
})
console.log(age)
//true, ou seja, todos os colaboradores são maiores de 18 anos.

//Imprima no console se existe algum colaborador estagiário
//some diz se existe algum elemento no array que satisfaz a condição, sem retornar o elemento em si.
const ocupacao = colaboradores.some((colab) => {
    return colab.cargo === 'estagiario';
})
console.log(ocupacao)
//true, ou seja, existe algum colaborador que é estagiário.

//Desafio 2 - Métodos específicos (reduce, sort)

//Desafio 2 - Métodos específicos (reduce, sort)
//Parte 1: colaboradores e reduce

//Imprima no console a soma da idade de todos os colaboradores
//reduce executa uma função reducer para cada elemento do array, resultando num único valor de retorno (não retorna array e sim valor); possui uma sintaxe diferente: dois argumentos obrigatorios - callback (acumulador,valor atual, index, array) e valor inicial. o acc recebe o valor inicial ou o valor do ultimo callback.
const somaidades = colaboradores.reduce((acc, idadecolab) => {
    return acc + idadecolab.idade

}, 0) //reduzindo o array a um numero (zero) ja que quero a soma das idades dos colaboradores. 
console.log("A soma das idades dos colaboradores é", + somaidades)

//TESTE LETRA B
//Crie e imprima um objeto que possui a quantidade de colaboradores em cada cargo
//utilizar reduce para retornar o array em um objeto contendo os cargos e a qtd de colaboradores em cada cargo
const quantidade = colaboradores.reduce((acc, ocupacao) => {
    console.log('Ocupação:', ocupacao.cargo)
    if (ocupacao.cargo === 'front-end') {
        return {
            frontend: acc.frontend + 1,
            backend: acc.backend,
            designer: acc.designer,
            estagiario: acc.estagiario
        }
    } if (ocupacao.cargo === 'back-end') {
        return {
            frontend: acc.frontend,
            backend: acc.backend + 1,
            designer: acc.designer,
            estagiario: acc.estagiario
        }
    } if (ocupacao.cargo === 'designer') {
        return {
            frontend: acc.frontend,
            backend: acc.backend,
            designer: acc.designer + 1,
            estagiario: acc.estagiario
        }
    } (ocupacao.cargo === 'estagiario'); {
        return {
            frontend: acc.frontend,
            backend: acc.backend,
            designer: acc.designer,
            estagiario: acc.estagiario + 1
        }
    }
}
    , {
        frontend: 0,
        backend: 0,
        designer: 0,
        estagiario: 0
    })
console.log(quantidade)
///////////////////////////////////////////////

//Parte 2 - colaboradores e sort

//letra a
const idadecres = colaboradores.slice().sort((a, b) => {
    if ((a.idade < b.idade))
        return -1;
})
console.log(idadecres)
//letra b (não consegui fazer do caminho mais longo usando o sort)
const decresc = idadecres.reverse()
console.log(decresc)

//letra c

//letra c 
//ordenar colaboradores por cargo (estagiario, front, back, designer) - transformando prop (string) em (number)
const posicao = { 'estagiario': 0, 'front-end': 1, 'back-end': 2, 'designer': 3 }
//console.log(cargos)

const priori = colaboradores.slice().sort((a, b) => {

    return posicao[a.cargo] - posicao[b.cargo]
})
console.log(priori)



