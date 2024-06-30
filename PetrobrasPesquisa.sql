CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) not NULL,
    senha VARCHAR(255)not NULL,
    cep VARCHAR(10)not NULL,
    respondeu BOOLEAN,
    cepvalido BOOLEAN,
    ehadmin BOOLEAN

);



CREATE TABLE questionario (
    id SERIAL PRIMARY key,
    q1 INT,
    q2 INT,
    q3 INT,
    q4 INT,
    q5 INT,
    q6 INT,
    q7 INT,
    q8 INT,
    q9 INT,
    q10 INT 
);

--select * from questionario;

--SELECT q2 AS value, COUNT(*) AS frequency
--FROM Questionario
--GROUP BY q2
--ORDER BY frequency DESC;

INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (1, 2, 3, 1, 4, 5, 1, 4, 1, 1);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (2, 3, 1, 5, 2, 4, 3, 1, 2, 3);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (3, 1, 4, 2, 3, 1, 2, 5, 4, 2);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (4, 5, 2, 3, 1, 2, 4, 3, 5, 4);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (5, 4, 5, 4, 2, 3, 5, 2, 3, 5);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (1, 3, 1, 5, 3, 4, 1, 5, 1, 2);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (2, 1, 2, 1, 4, 1, 3, 4, 2, 3);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (3, 2, 3, 2, 1, 2, 5, 3, 4, 4);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (4, 3, 4, 3, 2, 5, 4, 2, 5, 5);
INSERT INTO questionario(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (5, 5, 5, 4, 3, 1, 2, 1, 1, 1);
