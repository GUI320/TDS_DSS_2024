const conn = require("../mysql-connection");

// CRUD
module.exports = {
    cadastro: async (req, res) => {
        const { titulo, id_autor, genero } = req.body;

        if (!titulo) {
            return res.status(309).send({ msg: "O campo titulo é obrigatorio!" });
        }

        if (!id_autor) {
            return res.status(309).send({ msg: "O campo id_autor é obrigatorio!" });
        }

        if (!genero) {
            return res.status(309).send({ msg: "O campo genero é obrigatorio!" });
        }


        try {
            const livro = await conn("livro").insert({ titulo, id_autor, genero });

            return res.status(200).send({
                msg : "Livro cadastrado com sucesso!"
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar o livro!" });
        }


    },
    consultar: async (req, res) => {
        try {
            const data = await conn.select().from("livro");
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao consultar livros!" });
        }
    },
    atualizar: async (req, res) => {
        const { titulo , id_autor, cadastro, status } = req.body;
        const { id } = req.params;

        try {
            const livro = await conn.select().from("livro").where({ id });
            
            if (livro.length <= 0) {
                return res.status(404).send({ msg: `O código ${id} não existe!` })
            }

            await conn("livro").update({
                titulo,
                id_autor,
                cadastro,
                status
            }).where({ id });

            // UPDATE LIVRO SET (TITULO, ID_AUTOR, CADASTRO, STATUS) VALUES("LIVRO", 1, true);

            return res.status(200).send({ msg: "livro atualizado com sucesso!"});

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao atualizar o livro!" });
        }

    },
    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            await conn("livro").where({ id }).del();
            return res.status(200).send({ msg: "livro excluido com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Erro ao deletar o livro!" });
        }
    },
    buscaPorId: async (req, res) => {
        const { id } = req.params;

        try {
            const livro = await conn.select().from("livro").where({ id });
            return res.status(200).send(livro);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar livro!" });
        }
    }
}