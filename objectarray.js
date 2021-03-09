//PARTE 1 DESAFIO
const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
}
//Acesso a propriedade do objeto com ponto
console.log("Nome: " + user.nome)
console.log("Rua: " + user.endereco.rua)
console.log("Projeto: " + user.projetos[1])

//Acesso a propriedade do objeto com colchete
console.log("Nome: " + user['nome'])
console.log("Rua: " + user['endereco']['rua'])
console.log("Projeto: " + user['projetos']['1'])
//Utilizando variaveis para os nomes das propriedades
let Endrua = user['endereco']['rua']
console.log(Endrua)

//PARTE 2 DESAFIO

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]
//parte 1 
students.forEach((nomes) => {
    console.log(nomes['name'])
})

students.forEach

//parte 2
students.forEach((idades) => {
    if (idades['age'] > 20)
        console.log(idades['name'])
})

//parte 3
let arraybolsa = []
students.forEach((bolsista) => {
    if (bolsista['scholarship'] == true)
        arraybolsa.push(bolsista)

})
console.log(arraybolsa)