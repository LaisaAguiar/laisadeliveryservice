//Desafio JS - Aula 16 - Destructuring assignment

//Desafio 1 
//Utilizando o objeto user: nome do usuario, rua, projetos, segunda posição da prop. objetos

const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
}

const { nome } = user
console.log(nome)

const { endereco: { rua } } = user
console.log(rua)

const { projetos: [proj1, proj2] } = user
console.log(proj1, proj2)

const { projetos: [, project2] } = user
console.log(project2)

//Utilizando o array students: primeiro elemento do array, terceiro elemento do array, nome do segundo estudante do array

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]

const [elem, { name }, elem3] = students
console.log(elem)
console.log(elem3)
console.log(name)


//Desafio 2

//Parte 1: crie uma fç que recebe qualquer numero de parametros e imprime eles separadamente
const parametros = [0, 1, 3]

function any(add) {
    return add = [...parametros];
}
any()


//-----------------------

//Parte 2: crie uma fç que recebe um objeto como parâmetro, desestrtutura a prop. nome desse objeto e imprime no console (fazer a desestruturação nos próprios parâmetros)
const objeto = {
    nome: 'Laisa',
    profissão: 'geofísica',
    idade: 26
}
function desestru({ nome }) {
    return { nome }
}
desestru(objeto)

//-----------------------

//Parte 3: crie uma fç que recebe dois parametros e retorna um novo objeto que é a combinação desses dois objetos - ok

const obj1 = {
    Nome1: 'Maria',
    Livro1: 'Frankstein',
    Id1: 2
}
const obj2 = {
    Nome2: 'Marcos',
    Livro2: 'O Capital',
    Id2: 6
}
//combinação 
function combine(obj1, obj2) {
    return { ...obj1, ...obj2 }
}

combine(obj1, obj2)
//-----------------------

//Parte 4: crie uma fç que recebe dois array e retorna um novo array que é a concatenação desses dois array 

const array1 = [0, 2, 4, 6]
const array2 = [0, 1, 3, 5, 7]

function concate(array1, array2) {
    return [...array1, ...array2]
}
concate(array1, array2)
