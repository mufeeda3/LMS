# Library Management System
Build an Online Library Management System using .NET Core for backend development 
and API programming. The system should allow users to search for books, borrow and return books, 
and manage their library accounts

Any user can create an account, and it will give him role as a user in the system, only users who can browse the library books and borrow them. users with role admin can change the content of the system by adding and editing users and books information.

## Software Requirements

* Visual studio 2022
* Visual studio code
* MS Sql Server 2012 or later
* Sql Management Studio
* Node Version 16 or later

## Running application

First you need to create database (LMS) on management studio, then run the script "LMS\Online_LMS\SqlScripts\tables.sql" in the same database, after that go to the configuration file for the solution and change it to make it suitable with your sql server installation in file "LMS\Online_LMS\appsettings.Development.json". after that the back end will be ready to run, go to directory "LMS\Online_LMS" open the solution and run it.

For front end after install the node, go to direcory "LMS\Online_LMS.App" and run on command this "npm install" and after that run the command "ng serve" to execuate the front end.



