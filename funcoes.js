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
    }],
    mediaAluno: 7.5,
    estaAprovado: function (mediaBase) {
        return this.mediaAluno >= mediaBase ? true : false;
    }
}

console.log(estudante.estaAprovado(6))