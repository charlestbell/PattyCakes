USE burger_db;
INSERT INTO burgers (burger_name, when_devoured) VALUES ('Mr Beast Burger', null),('Double Double With Grilled Onions', null),('Quarter Pounder With Cheese', null), ('5 Guys', '0000-00-00 00:00:00'), ('Heidleburger', '0000-00-00 00:00:00');


SELECT *
FROM burgers;

SELECT *
FROM burgers WHERE when_devoured IS NULL;