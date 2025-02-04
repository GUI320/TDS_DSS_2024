const conn = require("../mysql-connection");

//CRUD
module.exports = ({
    cadastro: (req, res) => {
        const { nome, nacionalidade } = req.body;

        if (!nome) {
            return res.status(309).send({ msg: "O campo nome é obrigatorio no cadastro de autor!" });
        }

        var comando = ``;

        if (!nacionalidade) {
            comando = `INSERT INTO AUTOR(nome, 
            nacionalidade) VALUES('${nome}',null)`
        } else {
            comando = `INSERT INTO AUTOR(nome, 
            nacionalidade) VALUES('${nome}','${nacionalidade}')`
        }

        conn.raw(comando)
            .then((data) => {
                res.status(200).send({ msg: "Autor cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar um autor!");
            });

    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM AUTOR").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao consultar os autores!");
        });
    },
    atualizar: (req, res) => {
        const { id, nome, nacionalidade, status } = req.body;

        conn.raw(`UPDATE AUTOR SET nome='${nome}', 
            telefone='${nacionalidade}', 
            status=${status} WHERE id = ${id}`)
            .then((data) => {
                console.log(data);
                res.status(200).send({ msg: "Autor atualizado com sucesso!" })
            }).catch((error) => {
                console.log(error);
                res.status(500).send({ msg: "Erro ao atualizar o autor!" });
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        conn.raw(`DELETE FROM AUTOR WHERE ID = ${id}`).then((data) => {
            console.log(data[0].affectedRows);

            if (data[0].affectedRows == 0) {
                return res.status(404).send({ msg: "Nenhum autor encontrado com esse código!" });
            } else {
                return res.status(200).send({ msg: "autor deletado com sucesso!" });
            }

        }).catch((error) => {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o autor!" });
        });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        conn.raw(`SELECT * FROM AUTOR WHERE id = ${id}`).then((data) => {
            console.log(data);
            res.status(200).send(data[0]);
        }).catch((error) => {
            console.log(error);
            res.status(500).send("Erro ao consultar o autor!");
        });

    }
})