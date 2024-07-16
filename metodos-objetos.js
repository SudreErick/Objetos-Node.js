const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "123123123",
    turma: "Javascript",
    bolsista: true,
    telefones: ["+55 (11)94443-5232", "+55 (11)95552-8776"],
    //enderecos: [{
    //    rua: "Rua Joseph Climber",
    // numero: "45",
    //    complemento: "Apto 40"
    //}, {
    //rua: "Rua Dona Clotilde",
    //    numero: "71",
    //    complemento: ""
    //}]
}

const chavesObjeto = Object.keys(estudante)

console.log(chavesObjeto)

if (chavesObjeto.includes("enderecos")) {
    console.error("É necessário ter um endereço cadastrado")
}