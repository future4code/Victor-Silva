## Exercício 1

a) Uma chave utilizada para referenciar outra tabela de acordo com outra key

b)

```SQL
ALTER TABLE Movies DROP COLUMN rating

DESCRIBE Movies

CREATE TABLE IF NOT EXISTS Movies_Rating (
id INT NOT NULL AUTO_INCREMENT,
comment TEXT NOT NULL,
rating FLOAT NOT NULL CHECK (rating BETWEEN  0 AND 10),
movie_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (movie_id) REFERENCES Movies(id)
)

```


c)

```SQL
INSERT INTO Movies_Rating (rating, movie_id, comment)
VALUES(10, 30, "Um dos melhores filmes brasileiros, fez história.")
```

Ele reclama por não encontrar esse id para fazer o match com a Foreign Key

d)

```SQL
ALTER TABLE Movies DROP COLUMN rating
```


e) 
```SQL
DELETE FROM Movies WHERE id = 4
```

O erro aponta que existe uma foreing key atribuída a esta linha

## Exercício 2

a)

```SQL
CREATE TABLE IF NOT EXISTS Movie_Cast(
movie_id INT NOT NULL,
actor_id INT NOT NULL,
FOREIGN KEY (movie_id) REFERENCES Movies(id),
FOREIGN KEY (actor_id) REFERENCES Actors(id)
)
```

É uma tabela de elenco que possui relaciona o ator com o filme por meio do ID e apenas isso.

b) OK

## Exercício 3

a) Operador de comparação bem abrangente semelhanet ao USING ou WHERE

b)

```SQL
DELETE FROM Actor
WHERE salary>1000000 AND gender="male"
```

## Exercício 4

a)

```SQL
SELECT MAX(salary) FROM Actor
```

b)

```SQL
SELECT MIN(salary) FROM Actor WHERE gender = 'female'
```

C)

```SQL
SELECT COUNT(gender) FROM Actor WHERE gender = "female"
```

d)

```SQL
SELECT SUM(salary) FROM Actor
```

## Exercicio 5

a)

```SQL
SELECT COUNT(*) AS "Quantidade", gender
FROM Actor
GROUP BY gender
```

Conte todos os generos como quantidade da tabela Actor e agrupe por gênero

b)

```SQL
SELECT id, actor_name FROM Actor
ORDER BY actor_name DESC
```

c)

```SQL
SELECT salary, actor_name FROM Actor
ORDER BY salary
```

d)

```SQL
SELECT salary, actor_name FROM Actor
ORDER BY salary DESC
LIMIT 3
```

e)

```SQL
SELECT AVG(salary), gender FROM Actor
GROUP BY gender
```

## EXERCICIO 6

a)

```SQL
ALTER TABLE Movies ADD playing_limit_date DATE
```

b)

```SQL
ALTER TABLE Movies CHANGE rating rating FLOAT  NOT NULL CHECK(rating BETWEEN 0 AND 10)
```

c)

```SQL
SELECT * FROM Movies WHERE rating>7
```



