# Aula 45

### Exercício 1

ALTER TABLE ACTOR ADD type VARCHAR(255) DEFAULT "NotDirector";

SELECT * FROM ACTOR;

#### a.
ALTER TABLE Actor DROP COLUMN salary;

Esta linha excluiria a coluna salary. 

#### b.
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Esta linha muda o nome da coluna gender por sexo.

#### c. 
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Esta linha muda a estrutura dos dados da coluna gender que agora tem capacidade até 255 caractéres.

#### d.
 Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

alter table ACTOR change gender gender VARCHAR(100);

SELECT * FROM ACTOR;
DESCRIBE ACTOR;

ALTER TABLE ACTOR CHANGE gender gender VARCHAR(100);
DESCRIBE ACTOR


### Exercício 2
#### a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*;

SELECT * FROM ACTOR;

update ACTOR
set name = "Dominguinhos", birth_date="1950/05/23"
where id = "003";

SELECT * FROM ACTOR;

#### b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.;

update ACTOR set name = "JULIANA PAES" where id = "004";

SELECT * FROM ACTOR;

### c. Escreva uma query que atualize todas as informações do ator com o id 005;

update ACTOR 
set name = "Seu Jorge", salary = 44440, birth_date="1960/04/01", gender ="male", type="Director" 
where id = "005";

SELECT * FROM ACTOR;


#### d*. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*
##### Não aparece erro. A linha de código é executada mas não motifica a tabela.

SELECT * FROM ACTOR;


update ACTOR 
set name = "Falabella", salary = 44440, birth_date="1960/04/01", gender ="male", type="Director" 
where id = "006";

SELECT * FROM ACTOR;


### 3
#### *a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
SET SQL_SAFE_UPDATES = 0;

delete from ACTOR where name = "Fernanda Montenegro";
SELECT * FROM ACTOR;

#### *b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

delete from ACTOR 
where gender = "male" and salary >= 1000000;

SELECT * FROM ACTOR;

### 4

SELECT COUNT(*) FROM ACTOR;
SELECT COUNT(*) FROM ACTOR WHERE gender = "female";
SELECT AVG(salary) FROM ACTOR;

#### *a. Escreva uma query que pegue o maior salário de todos os atores e atrizes*
SELECT max(salary) from ACTOR;

#### *b. Escreva uma query que pegue o menor salário das atrizes*
SELECT min(salary) from ACTOR WHERE gender = "female";

#### *c. Escreva uma query que pegue a quantidade de atrizes*
select count(*) from ACTOR where gender = "female";

#### *d. Escreva uma query que pegue a soma de todos os salários*
select sum(salary) from ACTOR;


### 5
SELECT * FROM ACTOR LIMIT 2;
SELECT * FROM ACTOR ORDER BY name ASC;
SELECT * FROM ACTOR ORDER BY name ASC LIMIT 4;
SELECT * FROM ACTOR
ORDER BY name ASC
LIMIT 4
WHERE gender = 'female';

#### *a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*
###### Esta query seleciona a tabela ACTOR e ordena por nome e mostra as 4 primeiras linhas com gênero female.

### b. *b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
select id, name from ACTOR order by name asc;
 
### *c. Faça uma query que retorne todos os atores ordenados pelo salário*
select name, salary from ACTOR order by salary;

### *d. Faça uma query que retorne os atores com os três maiores salarios*
select name, salary from ACTOR order by salary desc limit 3;

### *e. Faça uma query que retorne a média de salário por gênero*
select avg(salary) as "average salary", gender from ACTOR group by gender;


### 6
#### a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.*
SHOW TABLES;
describe FILMES;
alter table FILMES add playing_limit_date date;
select * from FILMES;

#### *b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
alter table FILMES 
change column evaluation evaluation float;
select * from FILMES;

#### *c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
update FILMES set playing_limit_date = "2021/04/30" where id = "001";
update FILMES set playing_limit_date = "2021/01/30" where id = "002";

select * from FILMES;

#### *d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*
delete from FILMES where id = "003";

select * from FILMES;

update FILMES set synopsis = "this is a test!" where id = "003";
select * from FILMES;
###### A linha de código deletar foi executada, mas nenhuma linha foi alterada.

### 7
#### a. Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
select count(*) from FILMES where evaluation >= 7.5;
select * from FILMES;

#### *b. Qual a média das avaliações dos filmes?*
select avg(evaluation) from FILMES;

####* c. Qual a quantidade de filmes em cartaz?*
select count(*) from FILMES where playing_limit_date >= "2021/03/24";

#### *d. Qual a quantidade de filmes que ainda irão lançar?*
select count(*) from FILMES where release_date >= "2021/03/24";

#### *e. Qual a maior nota dos filmes?*
select max(evaluation) from FILMES;

#### *f. Qual a menor nota dos filmes?*
select min(evaluation) from FILMES;

### 8
#### *a. Retorne todos os filmes em ordem alfabética*
select * from FILMES order by name asc;

#### *b. Retorne os 5 primerios filmes em ordem descrente alfabética*
select * from FILMES order by name asc LIMIT 5;

#### c. Retorne os 3 filmes mais recentes em cartaz*
select * from FILMES order by release_date desc LIMIT 3;

#### *d. Retorne os 3 filmes melhor avalidos*
select * from FILMES order by evaluation desc LIMIT 3;
