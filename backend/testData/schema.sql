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
    image_url varchar(200) NOT null,
    iframe_url varchar(200) NOT null,
    playlist_id integer NOT null,
   	FOREIGN KEY (playlist_id) REFERENCES cyf_playlist(id));
   

INSERT INTO cyf_tracks (recommender_name, track_name, artist_name, track_id, image_url, iframe_url, playlist_id)
    VALUES 
    ('Barath V.', 'I''ve been Dazed', 'Michael Kiwanuka', '7o0Wmu96vJWVW0KqTowxD3', 'https://i.scdn.co/image/ab67616d0000b27360ada139840fb439d6750f27', 'https://open.spotify.com/embed/track/7o0Wmu96vJWVW0KqTowxD3', 1),
    ('Junita L.', 'Sarangi', 'Sushant KC', '0pYMa1j9R24qW50J4yc0X3', 'https://i.scdn.co/image/ab67616d0000b273ddf77408407aee1559197962', 'https://open.spotify.com/embed/track/0pYMa1j9R24qW50J4yc0X3', 1),
    ('Jan Softa', 'Still of the Night', 'Whitesnakes', '2Th42VycrWIKjhjIfur3xO', 'https://i.scdn.co/image/ab67616d0000b27312312cc77cd4c75b36b5b168', 'https://open.spotify.com/embed/track/2Th42VycrWIKjhjIfur3xO', 1),
   	('Shubee V.', 'Hedwig''s Theme from Harry Potter', 'Patrik Pietschmann', '3CkhZ0roo6cHLWXar2JGKi', 'https://i.scdn.co/image/ab67616d0000b273d4f7f86d6e35ab40d186a8c7', 'https://open.spotify.com/embed/track/3CkhZ0roo6cHLWXar2JGKi', 1),
   	('Afsha H.', 'Petite fleur', 'Henri Salvador', '3mZV5PnvEJz6vrHkK76Rno', 'https://i.scdn.co/image/ab67616d0000b273478af8593efb7dbb024ccece', 'https://open.spotify.com/embed/track/3mZV5PnvEJz6vrHkK76Rno', 1),
   	('Jan Softa', 'The Pretender', 'Foo Fighter', '7x8dCjCr0x6x2lXKujYD34', 'https://i.scdn.co/image/ab67616d0000b27383e260c313dc1ff1f17909cf', 'https://open.spotify.com/embed/track/7x8dCjCr0x6x2lXKujYD34', 1),
   	('Malkit Benning', 'Yeh Dosti Hum Nahin (Happy Version) - From Sholay', 'R.D. Burman', '1estdIIGiVlI7Z7u2Fi8om', 'https://i.scdn.co/image/ab67616d0000b273c0d1e2959153980d5a024a7e', 'https://open.spotify.com/embed/track/1estdIIGiVlI7Z7u2Fi8om', 1),
   	('Shadi Fakhri.', 'Ki Behtar Az To', 'Aref', '2TpEDKMTudDh57cWgFlDxY', 'https://i.scdn.co/image/ab67616d0000b273a5148624945a0436eee08dbc', 'https://open.spotify.com/embed/track/2TpEDKMTudDh57cWgFlDxY', 1),
   	('Jan Softa', 'Californicatoin', 'Red Hot Chilli Peppers', '48UPSzbZjgc449aqz8bxox', 'https://i.scdn.co/image/ab67616d0000b27394d08ab63e57b0cae74e8595', 'https://open.spotify.com/embed/track/48UPSzbZjgc449aqz8bxox', 1),
   	('Juinta L.', 'Hero', 'Mariah Carey', '5mgCMlxQW7fmHbrdJuowbB', 'https://i.scdn.co/image/ab67616d0000b27337100bc4938b7d7cc25bad17', 'https://open.spotify.com/embed/track/5mgCMlxQW7fmHbrdJuowbB', 1);

