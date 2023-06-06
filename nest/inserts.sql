USE estudioMusical;

INSERT INTO cliente (telefone, email, senha, nome, genero_musical)
VALUES ('123456789', 'assesoriaTravis@email.com', 'senha123', 'Travis', 'Rap');

INSERT INTO cliente (telefone, email, senha, nome, genero_musical)
VALUES ('987654321', 'assesoriaAlicia@email.com', 'senha456', 'Alicia Keys', 'Pop');

INSERT INTO tipocontrato (nome, can_music, can_shows, can_albun, can_letra)
VALUES ('Gravações', 1, 0, 1, 1);

INSERT INTO tipocontrato (nome, can_music, can_shows, can_albun, can_letra)
VALUES ('Completo', 1, 1, 1, 1);

INSERT INTO contrato (data_contrato, duracao_semestres, fk_TipoContrato, fk_Cliente)
VALUES ('2023-01-01', 2, 2, 1);

INSERT INTO contrato (data_contrato, duracao_semestres, fk_TipoContrato, fk_Cliente)
VALUES ('2023-02-01', 4, 1, 2);

INSERT INTO distribuidora (nome, plataforma)
VALUES ('Distribuidora 1', 'Spotify');

INSERT INTO distribuidora (nome, plataforma, fk_TipoContrato)
VALUES ('Distribuidora 2', 'Apple Music', 2);

INSERT INTO distribuicao (fk_distribuidora, fk_tipoContrato)
VALUES (1, 1);

INSERT INTO distribuicao (fk_distribuidora, fk_tipoContrato)
VALUES (2, 2);

INSERT INTO letra (conteudo, titulo, fk_TipoContrato, fk_Cliente)
VALUES ('Custom the things, custom the wings \nI had to custom the vibes, custom the link up...', ' MAFIA', 2, 1);

INSERT INTO shows (horario, data_show, cidade_endereco, CEP_endereco, rua_endereco, numero_endereco, titulo, fk_TipoContrato, fk_Cliente)
VALUES ('20:00', '2023-03-01', 'Cidade 1', '12345', 'Rua 1', '123', 'Show 1', 1, 1);

INSERT INTO album (nome, capa, produtor, fk_TipoContrato, fk_Cliente)
VALUES ('Astroworld', 'URL', '30 Roc', 1, 1);

INSERT INTO album (nome, capa, produtor, fk_TipoContrato, fk_Cliente)
VALUES ('Alicia', 'URL', 'Alicia Keys', 2, 2);

INSERT INTO musica (nome, feats, fk_album, letra, fk_TipoContrato, fk_Cliente)
VALUES ('Sicko Mode', null, 1, 'Sun is down, freezin cold \nThats how we already know winters here...', 1, 1);

INSERT INTO musica (nome, feats, fk_album, letra, fk_TipoContrato, fk_Cliente)
VALUES ('Cityof Gods', 'Fivio Foreign|Ye', 2, 'New York City, please go easy on me tonight \nNew York City, please go easy on this heart of mine (what?)', 2, 2);

UPDATE cliente
SET nome = 'Travis Scott'
WHERE ID_cliente = 1;

SELECT * FROM cliente;

DELETE FROM letra
WHERE ID_letra = 2;

