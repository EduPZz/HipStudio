USE estudioMusical;

SELECT * FROM cliente WHERE genero_musical = 'Pop';

SELECT * FROM cliente WHERE nome LIKE '%Travis%';

SELECT COUNT(*) FROM cliente;

SELECT AVG(duracao_semestres) FROM contrato;

SELECT SUM(duracao_semestres) FROM contrato;

SELECT * FROM contrato WHERE data_contrato BETWEEN '2023-01-01' AND '2023-12-31';

SELECT * FROM cliente WHERE genero_musical = 'Pop' AND (email LIKE '%gmail.com' OR email LIKE '%@email.com') AND NOT nome = 'Travis Scott';

SELECT * FROM cliente ORDER BY nome ASC;

SELECT genero_musical, COUNT(*) FROM cliente GROUP BY genero_musical;

SELECT contrato.ID_contrato, cliente.nome, contrato.data_contrato
FROM contrato
JOIN cliente ON contrato.fk_Cliente = cliente.ID_cliente;
