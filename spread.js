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

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`)
    console.log(`Ligar para ${telefone2}`)
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1])
exibirTelefones(...estudante.telefones)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio)