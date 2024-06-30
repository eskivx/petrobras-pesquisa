CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) not NULL,
    senha VARCHAR(255)not NULL,
    cep VARCHAR(10)not NULL,
    respondeu BOOLEAN,
    cepvalido BOOLEAN,
    ehadmin BOOLEAN

);



create table questionario (
    id SERIAL primary key,
    q1 text,
    q2 text,
    q3 text,
    q4 text,
    q5 text,
    q6 text,
    q7 text,
    q8 text,
    q9 text,
    q10 text 
);

--select * from questionario;

SELECT q2 AS value, COUNT(*) AS frequency
FROM Questionario
GROUP BY q2
ORDER BY frequency DESC;



INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Muito','Não','Pouco','Neutro','Muito','Muito pouco','Não','Neutro','Muito','Neutro');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Muito', 'Não', 'Pouco', 'Neutro', 'Muito', 'Muito pouco', 'Não', 'Neutro', 'Muito', 'Neutro');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Pouco', 'Muito', 'Não', 'Muito pouco', 'Neutro', 'Muito', 'Neutro', 'Não', 'Pouco', 'Muito');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Neutro', 'Pouco', 'Muito', 'Não', 'Muito pouco', 'Pouco', 'Muito', 'Neutro', 'Não', 'Muito');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Não', 'Neutro', 'Muito pouco', 'Muito', 'Pouco', 'Neutro', 'Muito pouco', 'Muito', 'Não', 'Pouco');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Muito pouco', 'Não', 'Neutro', 'Pouco', 'Muito', 'Não', 'Pouco', 'Muito pouco', 'Neutro', 'Muito');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Muito', 'Muito pouco', 'Neutro', 'Muito', 'Não', 'Pouco', 'Neutro', 'Pouco', 'Muito', 'Não');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Pouco', 'Neutro', 'Muito', 'Pouco', 'Muito pouco', 'Neutro', 'Muito', 'Não', 'Pouco', 'Muito');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Não', 'Pouco', 'Muito', 'Muito pouco', 'Muito', 'Não', 'Neutro', 'Muito', 'Pouco', 'Neutro');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Neutro', 'Muito', 'Não', 'Pouco', 'Neutro', 'Muito pouco', 'Pouco', 'Muito', 'Não', 'Muito');
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ('Muito', 'Não', 'Pouco', 'Neutro', 'Muito pouco', 'Muito', 'Não', 'Pouco', 'Neutro', 'Muito');
