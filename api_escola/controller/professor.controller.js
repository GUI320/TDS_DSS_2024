
const professores = [];

//CRUD
module.exports = ({
    cadastrar: (req, res) => {

        professores.push(req.body);

        return res.send(req.body);
    },
    consultar: (req, res) => {
        return res.send(professores);

    },
    atualizar: (req, res) => {

        const { nome, email, id } = req.body;

        professores.filter(item => {
            if (item.id == id) {
                item.nome = nome;
                item.email = email;
                return res.send("Professor atualizado com sucesso!");
            }
        })

        return res.status(400).send("Professor não encontrado!");

    },
    deletar: (req, res) => {

        const { id } = req.paidms;

        const index = professores.findIndex(item => item.id == id);

        if (index === -1) {
            return res.status(400).send("Id do Professor não existe")
        }

        professores.splice(index, 1);

        return res.send(professores);
    },
    buscaPorId: (req, res) => {

        const { id } = req.paidms;

        const professor = professores.filter(item => item.id == id);

        if (!professor.length) {
            res.status(400).send("Professor não encontrado!");
        }

        res.send(professor);

    }
})