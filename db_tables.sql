create database wrappi_db;
use wrappi_db;
create table categories(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    category VARCHAR(80) NOT NULL,
    difficulty VARCHAR(30) NOT NULL,
    max_tries INT DEFAULT 5
);
create table results(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    result INT NOT NULL DEFAULT 0,
    category VARCHAR(80) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
create table users(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    password VARCHAR(60) NOT NULL,
    username VARCHAR(30) UNIQUE NOT NULL,
    avatar VARCHAR(300) NOT NULL DEFAULT 'images/noimage.jpg',
    FOREIGN KEY (resultID) REFERENCES results(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
