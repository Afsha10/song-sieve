CREATE TABLE playlists (
id serial PRIMARY KEY,
playlist_name varchar(200) NOT null,
user_id integer NOT null,
FOREIGN KEY (user_id) REFERENCES users(id));

INSERT INTO playlists (playlist_name, user_id)
VALUES
('Classical', 1),
('Salsa', 2),
('Bachata', 3),
('Junita''s favourite tracks', 2),
('Shadi''s favourite tracks', 3),
('Gareth''s favourite tracks', 3),
('Oliver''s favourite tracks', 3),
('Latin Dance', 1);