CREATE TABLE users(
    id serial PRIMARY KEY,
    user_full_name varchar(200) NOT null);

INSERT INTO users(user_full_name)
    VALUES 
    ('Afsha Rose'),
    ('Shadi Sunflower'),
    ('Junita Bluebells'),
    ('Alexey Orchid'),
   	('Alisha Jasmine'),
   	('Barath Lupine');

    