-- Active: 1707420669911@@127.0.0.1@3306@flight_search
show TabLes;
use flight_search;
desc cities;
select * from cities;
show TABLES;
desc airports;
select * from airports;
select * from Airports join Cities on Airports.cityId=Cities.id where Cities.id=10;
select * from airplanes;

select * from flights;

show DATABASEs;
use flight_search;
RENAME TABLE old_db.table TO new_db.table;