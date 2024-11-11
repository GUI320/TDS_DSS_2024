-- COMANDOS DLL ESTRUTURA DO BANCO DE DADOS LOJA --
CREATE DATABASE conveniencia do seu zé;

CREATE TABLE conveniencia do seu zé.produto(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(9, 2),
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE conveniencia do seu zé.cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(25),
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE conveniencia do seu zé.cadastro(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES cliente(id),
    id_produto INT NOT NULL,
    FOREIGN KEY(id_produto) REFERENCES produto(id),
    quantidade INT,
    total DECIMAL(9,2)
);

CREATE TABLE conveniencia do seu zé.desconto(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    FOREIGN KEY(descontar) REFERENCES cliente(id),
    id_produto INT NOT NULL,
    FOREIGN KEY(diminuir_preco) REFERENCES produto(id),
    total DECIMAL(9,2)
);

-- CRUD

INSERT INTO conveniencia do seu zé.cliente(nome, telefone)
VALUES("Guilherme André", "46999200491");

SELECT * FROM clientes;

UPDATE conveniencia do seu zé.cliente SET nome = "Guilherme André Isotton" WHERE id = 1;

DELETE FROM conveniencia do seu zé.cliente WHERE id = 1;