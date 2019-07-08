use test_db;
DROP TABLE users;
drop table scores;

CREATE TABLE users(
  id INTEGER(10) not null auto_increment,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  primary key (id)
);

CREATE TABLE scores(
  id INTEGER NOT NULL auto_increment,
  q1 INTEGER NOT NULL,
  q2 INTEGER NOT NULL,
  q3 INTEGER NOT NULL,
  q4 INTEGER NOT NULL,
  q5 INTEGER NOT NULL,
  PRIMARY KEY (id)

);

SELECT * FROM users;