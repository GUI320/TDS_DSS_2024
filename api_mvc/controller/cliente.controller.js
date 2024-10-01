const clientes = [{
    id: 1,
    nome: "Guilherme André",
    email: "guilherme.isotton@escola.pr.gov.br",
    senha: "123456"
}];

const cadastro = ("/cadastro", (req, res) => {
    const { id, nome, email, senha } = req.body;

    console.log(req.body);
    
    clientes.push({
        id, nome, email, senha
    })

    res.send(req.body);
    
})
const atualizar = (req, res) => {};
const deletar = (req, res) => {};
const consulta = (req, res) => {};
const consultaPorID = (req, res) => {};

module.exports = ({
    cadastro,
    atualizar,
    deletar,
    consulta,
    consultaPorID
});