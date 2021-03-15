//Desafio JS - Aula 15 - Promises, fç assíncronas e erros

//Parte 1 
// usar função timeout, criar 3 promises, 2 de sucesso e uma que rejeita; e retornar uma string 

const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("desafio p1 feito com sucesso"));
        }, 3000);
    }

    )
}

const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("desafio p2 feito com sucesso"));
        }, 2000);
    }
    )
}

const p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("desafio p3 falhou");
        }, 4000);
    }
    )
}
//async function func() {
//  const exibicoes = await Promise.all([p1(), p2(), p3()]);
//console.log(exibicoes);
//}
async function func() {
    try {
        const exibicoes = await Promise.all([p1(), p2(), p3()]);
        console.log(exibicoes)
    } catch (error) {
        console.log(error)
    }

}

//func()
//uncaught (in promise) - erro - com o catch foi corrigido

//parte 3

async function pt3() {
    try {
        const exibi = await Promise.all([p1(), p2()]);
        console.log(exibi)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Fim da execução")
    }

}

pt3()
//no console: [undefined,undefined]. que array é esse? pq?
