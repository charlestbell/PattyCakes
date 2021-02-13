USE burger_db;
INSERT INTO burgers (burger_name, when_devoured) VALUES ('Whataburger', null),('Double Double With Grilled Onions', null),('Quarter Pounder With Cheese', null), ('Happy Meal', 11/12/2020);


SELECT *
FROM burgers;

SELECT *
FROM burgers WHERE when_devoured IS NULL;