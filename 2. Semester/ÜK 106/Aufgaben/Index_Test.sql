--Aufgabe 5.3: Indizes erstellen und testen
DROP TABLE IF EXISTS babyname;
CREATE DATABASE IF NOT EXISTS INDEX_TEST;
USE INDEX_TEST;
CREATE TABLE babyname (
  year INT(4),
  name VARCHAR(11),
  percent FLOAT,
  gender VARCHAR(5)
);

LOAD DATA INFILE 'C:/Program Files/MariaDB 10.6/bin/baby-names.csv' INTO TABLE babyname FIELDS TERMINATED BY ','; 
SELECT * FROM babyname;
