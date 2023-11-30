CREATE TABLE cyf_playlist (
    id serial PRIMARY KEY,
    playlist_name varchar(200) NOT null);

INSERT INTO cyf_playlist (playlist_name)
    VALUES
    ('CYF favourites');


CREATE TABLE cyf_tracks (
    id serial PRIMARY KEY,
    recommender_name varchar(100) NOT null,
    track_name varchar(200) NOT null,
    artist_name varchar(200) NOT null,
    track_id varchar(200) NOT null,
    playlist_id integer NOT null,
   	FOREIGN KEY (playlist_id) REFERENCES cyf_playlists(id));
   

INSERT INTO cyf_tracks (recommender_name, track_name, artist_name, track_id, playlist_id)
    VALUES 
    ('Barath V.', 'I''ve been Dazed', 'Michael Kiwanuka', '7o0Wmu96vJWVW0KqTowxD3', 1),
   	('Shubee V.', 'Hedwig''s Theme from Harry Potter', 'Patrik Pietschmann', '3CkhZ0roo6cHLWXar2JGKi', 1),
   	('Afsha H', 'Petite fleur', 'Henri Salvador', '3mZV5PnvEJz6vrHkK76Rno', 1),
   	('Malkit Benning', 'Mehbooba Mehbooba - From Sholay', 'R.D. Burman', '6966cgOPA1kF13BIoNXp24', 1);