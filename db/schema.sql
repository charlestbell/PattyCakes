### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	burger_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(50) NOT NULL,
    when_devoured DATETIME
);



