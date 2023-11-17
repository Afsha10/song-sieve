CREATE TABLE tracks (
    id serial PRIMARY KEY,
    track_name varchar(200) NOT null,
    artist_name varchar(200) NOT null,
    playlist_id integer NOT null,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id));

INSERT INTO tracks(track_name, artist_name, playlist_id)
VALUES
    ('Fly', 'Ludovico Einaudi', 1),
    ('Time Lapse', 'Ludovico Einaudi', 1),
    ('Nightbook', 'Ludovico Einaudi', 1),
    ('Silent Dusk', 'Olivia Belli', 1),
    ('Bluebird', 'Alexis Ffrench', 1),
    ('Be a Prelude', 'Riopy', 1),
    ('Reborn', 'Alexis Ffrench', 1),
    ('Jailhouse Rock', 'Elvis Presley', 4),
    ('Bailando - Spanish Version', 'Enrique Iglesias, Descemer Bueno, Gente De Zona', 4),
    ('Sway - Cha Cha / 30 BPM', 'Ross Mitchell, His Band & Singers', 4),
    ('Solos', 'Raul Paz', 4),
    ('Espana Cani - Pasodoble', 'Real Orquesta Sinfonica De Sevilla', 4),
    ('Made You Look', 'Meghan Trainor', 4);