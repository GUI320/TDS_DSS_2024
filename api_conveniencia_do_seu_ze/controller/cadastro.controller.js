const conn = require("../mysql-connection");
const { deletar } = require("./desconto.controller");

// CRUD 
module.exports = {
    cadastro: async (req, res) => {
        const { cadastrar_id_produto, cadastrar_id_cliente } = req.body;

        if (!cadastrar_id_produto) {
            return res.status(309).send({ msg: "O campo cadastrar_id_produto é necessário! "});
        }
        
        if (!cadastrar_id_cliente) {
            return res.status(309).send({ msg: "O campo cadastrar_id_cliente é obrigatório! "});
        }


        try {
            const cadastro = await conn("cadastro").insert({ cadastrar_id_produto, cadastrar_id_cliente });

            return res.status(200).send({
                id: [0], 
                cadastrar_id_produto,
                cadastrar_id_cliente,
                status: 1 
            });

        }catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar o preco do produto!" });
        }

    },
    consultar: async (req, res) => {
        try{
            const data = await conn.select().from("cadastro");
            return res.status(200).send(data);
        }catch (error){
            console.log(error);
            return res.status(500).send({ msg: "Erro ao consultar o cadastro!" });
        }
    },
    atualizar: async (req, res) => {
        const { cadastrar, organizar_preco, status } = req.body;
        const { id } = req.params;

        try {
            const cadastro = await conn.select().from("cadastro").where({ id });

            if (cadastro.lenght <= 0) {
                return res.status(404).send({ msg: `O código ${id} não existe!` }) 
            }

            await conn("desconto").update({
                cadastrar_id_produto,
                cadastrar_id_cliente,
                status
            }).where({ id });

            // UPDATE CADASTRO SET (CADASTRAR_ID_PRODUTO, CADASTRAR_ID_CLIENTE, STATUS) VALUES("50,00,", 1, true);

            return res.status(200).send({
                id: cadastro[0].id,
                cadastrar_id_produto, 
                cadastrar_id_cliente,
                status
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao atualizar o cadastro" });
        }

    },
    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            await conn("cadastro").where({ id }).del();
            return res.status(200).send({ msg: "Cadastro excluido com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Erro ao deletar o cadastro!" });
        }
    },
    buscaPorId: async (req, res) => {
        const { id } = req.params;

        try {
            const cadastro = await conn.select().from("cadastro").where({ id });
            return res.status(200).send(cadastro);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar cadastro!" });
        }
    }
}