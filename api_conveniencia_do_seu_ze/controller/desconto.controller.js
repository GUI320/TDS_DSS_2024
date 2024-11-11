const conn = require("../mysql-connection");

// CRUD 
module.exports = {
    desconto: async (req, res) => {
        const { descontar, diminuir_preco } = req.body;

        if (!descontar) {
            return res.status(309).send({ msg: "O campo descontar é necessário! "});
        }
        
        if (!diminuir_preco) {
            return res.status(309).send({ msg: "O campo diminuir preco é obrigatório! "});
        }


        try {
            const desconto = await conn("produto").insert({ descontar, diminuir_preco });

            return res.status(200).send({
                id: [0], 
                desconto,
                diminuir_preco,
                status
            });

        }catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao descontar o preco do produto!" });
        }


    },
    consultar: async (req, res) => {
        try{
            const data = await conn.select().from("desconto");
            return res.status(200).send(data);
        }catch (error){
            console.log(error);
            return res.status(500).send({ msg: "Erro ao consultar desconto!" });
        }
    },
    atualizar: async (req, res) => {
        const { descontar, diminuir_preco, status } = req.body;
        const { id } = req.params;

        try {
            const desconto = await conn.select().from("desconto").where({ id });

            if (produto.lenght <= 0) {
                return res.status(404).send({ msg: `O código ${id} não existe!` }) 
            }

            await conn("desconto").update({
                descontar: 50,
                diminuir_preco: 1000,
                status: 500
            }).where({ id });

            // UPDATE DESCONTO SET (DESCONTAR, DIMINUIR_PRECO, STATUS) VALUES("CHINELO,", 1, true);

            return res.status(200).send({
                id: desconto[0].id,
                descontar: 45,
                diminuir_preco: 80,
                status: 36
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao atualizar o desconto" });
        }
        
    },
    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            await conn("produto").where({ id }).del();
            return res.status(200).send({ msg: "Desconto excluido com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Erro ao deletar o preco diminuido!" });
        }
    },
    buscaPorId: async (req, res) => {
        const { id } = req.params;

        try {
            const desconto = await conn.select().from("desconto").where({ id });
            return res.status(200).send(desconto);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar desconto!" });
        }
    }
}