-- Active: 1707420669911@@127.0.0.1@3306@flight_search
show TabLes;
desc cities;
select * from cities;

show TABLES;;
desc airports;
select * from airports;
select * from Airports join Cities on Airports.cityId=Cities.id where Cities.id=10;
select * from airplanes;
