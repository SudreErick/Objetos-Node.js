const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "123123123",
    turma: "Javascript"
}

estudante.nome

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, "nome"));
console.log(exibeInfoEstudante(estudante, "idade"));
console.log(exibeInfoEstudante(estudante, "cpf"));