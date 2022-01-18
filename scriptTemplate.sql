-- This is the script for working with databases in mysql


-- 1. Create the database
drop database if exists employeedb;
create database employeedb;
use employeedb;

-- 2. Create a table inside that database
create table employee(
    employeeId integer not null primary key, --nwe need this field, hence, not null
    firstname varchar(20) not null, --varchar(20) indicates that it takes 20 characteres
    lastname varchar(20) not null,
    department varchar(15),
    salary decimal(6,2) -- 6 is the amount of integers allowed, 2 the amount of decimals.
);

-- 3. Insert values into the given table
insert into employee values(1,'Matt','River','ict',5000);
insert into employee values(2,'Abel','Parada','admin',6000);

-- 3.1 if I want to drop the user
drop user if exists 'zeke'@'localhost';
create user 'zeke'@'localhost' identified by 'secret'; -- the word secret would be the password
grant all privileges on employeedb.* to 'zeke'@'localhost';