
const turmas = [];

//CRUD
module.exports = ({
    cadastrar: (req, res) => {

        alunos.push(req.body);

        return res.send(req.body);
    },
    consultar: (req, res) => {
        return res.send(turmas);
    },
    atualizar: (req, res) => {

        const { nome, email, id } = req.body;

        Turmas.filter(item => {
            if (item.id == id) {
                item.nome = nome;
                item.email = email;
                return res.send("Turma atualizada com sucesso!");
            }
        })

        return res.status(400).send("Turma não encontrada!");

    },
    deletar: (req, res) => {

        const { id } = req.paidms;

        const index = turmas.findIndex(item => item.id == id);

        if (index === -1) {
            return res.status(400).send("Id da turma não existe")
        }

        turmas.splice(index, 1);

        return res.send(turmas);
    },
    buscaPorId: (req, res) => {

        const { id } = req.paidms;

        const turma = turmas.filter(item => item.id == id);

        if (!turma.length) {
            res.status(400).send("turma não encontrada!");
        }

        res.send(turma);

    }
})