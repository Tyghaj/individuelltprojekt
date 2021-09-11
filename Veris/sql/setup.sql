--
-- Create datebase and user.
-- By Fritz Eriksson for course databas.
-- 2021-03-01
--

-- DROP DATABASE eshop;
-- Create database eshop
CREATE DATABASE IF NOT EXISTS veris;

-- Use eshop 
USE veris;

-- 
-- Create an alternate root user with backwards compatible login
DROP USER IF EXISTS 'user'@'%';

CREATE USER 'user'@'%'
	IDENTIFIED
	WITH mysql_native_password -- Only MySQL > 8.0.4
	BY 'pass'
;

-- Grant user all  privilages
GRANT ALL PRIVILEGES
ON *.*
TO 'user'@'%'
WITH GRANT OPTION
;
