-- CLIENTE;
--CRUD
INSERT INTO CLIENTE(NOME, TELEFONE) VALUES ("","");
SELECT * FROM CLIENTE;
UPDATE CLIENTE SET NOME = "", TELEFONE = "", STATUS = true WHERE ID = 1;
DELETE FROM CLIENTE WHERE ID = 1;

-- PRODUTO;
--CRUD
INSERT INTO PRODUTO(NOME, PRECO) VALUES ("","");
SELECT * FROM PRODUTO;
UPDATE PRODUTO SET NOME = "", PRECO = 0.59 WHERE ID = 1;
DELETE FROM PRODUTO WHERE ID = 1;

-- CADASTRO;
--CRUD
INSERT INTO CADASTRO(ID_CLIENTE, ID_PRODUTO) 
VALUES ("","");
SELECT * FROM CADASTRO;
DELETE FROM CADASTRO WHERE ID = 1;

--  DESCONTO;
--CRUD 
INSERT INTO DESCONTO(ID_CLIENTE, ID_PRODUTO)
VALUES ("","");
SELECT * FROM DESCONTO;
DELETE FROM DESCONTO WHERE ID = 1;