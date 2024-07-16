const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "123123123",
    turma: "Javascript",
    bolsista: true,
    telefones: ["+55 (11)94443-5232", "+55 (11)95552-8776"],
    enderecos: [{
        rua: "Rua Joseph Climber",
        numero: "45",
        complemento: "Apto 40"
    }, {
        rua: "Rua Dona Clotilde",
        numero: "71",
        complemento: ""
    }]
}

for (let chave in estudante) {
    console.log(estudante[chave]);
}



