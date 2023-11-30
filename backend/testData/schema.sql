DROP TABLE IF EXISTS cyf_playlists CASCADE;

CREATE TABLE cyf_playlists (
    id serial PRIMARY KEY,
    playlist_name varchar(200) NOT null,
    playlist_id varchar(200) NOT null);

INSERT INTO cyf_playlists (playlist_name, playlist_id)
    VALUES 
    ('Sholay', '6xxZQteQdPVEjGtKFzhARO'),
    ('I''ve been Dazed', '7o0Wmu96vJWVW0KqTowxD3'),
   	('Hedwig''s Theme from Harry Potter', '4d0ACXpKKJLteUZTV0KZJJ');

SELECT * FROM cyf_playlists;