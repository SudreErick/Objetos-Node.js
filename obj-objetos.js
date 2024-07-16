const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "123123123",
    turma: "Javascript",
    bolsista: true,
    telefones: ["+55 (11)94443-5232", "+55 (11)95552-8776"],
    endereco: [{
        rua: "Rua Joseph Climber",
        numero: "45",
        complemento: "Apto 40"
    }]
}

estudante.endereco.push({
    rua: "Rua Dona Clotilde",
    numero: "71",
    complemento: ""
})

const enderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)


console.log(estudante)
