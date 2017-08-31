CREATE DATABASE debugger_db;
USE debugger_db;

CREATE TABLE users
(
id int NOT NULL AUTO_INCREMENT,
username varchar(255) NOT NULL,
password varchar(255) NOT NULL,
email varchar(255) NOT NULL,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
); 

CREATE TABLE scores
(
id int NOT NULL AUTO_INCREMENT,
points int NOT NULL,
PRIMARY KEY (id)
); 