CREATE TABLE EBAC(
AlunoId INTEGER PRIMARY KEY AUTOINCREMENT,
Nome VARCHAR(30),
Curso VARCHAR(20),
NOTA INTEGER(2)
);

SELECT * FROM EBAC

INSERT INTO EBAC (Nome,Curso,NOTA)
VALUES
("Fábio","QA",5),
("Jose Pedro", "Dev", 8),
("Mariana", "QA", 9),
("Aline", "QA", 6),
("Alice", "SQL", 7),
("João", "Dev",5),
("Alan", "QA", 8),
("Wesley", "SQL",4),
("Pedro", "UX", 3);

SELECT COUNT(*)
FROM EBAC

SELECT *
FROM EBAC 
Limit 10;

SELECT 
Nome,
Curso,
NOTA
FROM EBAC 
ORDER BY Nome

SELECT *
FROM EBAC
WHERE Curso is "QA"


SELECT *
FROM EBAC
WHERE NOTA >= 6

SELECT *
FROM EBAC
WHERE Nome is "Pedro"
