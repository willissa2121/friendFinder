use test_db;
DROP TABLE users;

CREATE TABLE users(
  id INTEGER(10) not null auto_increment,
  name VARCHAR(20) NOT NULL,
  scores INTEGER(10) NOT NULL,
  primary key (id)
);

SELECT * FROM users;