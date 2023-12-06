import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CyfFavPlaylist = () => {
  const [favouritePlaylist, setFavouritePlaylist] = useState([]);

  useEffect(() => {
    fetch("https://song-sieve-server.onrender.com/playlist")
      .then((res) => res.json())
      .then((data) => {
        setFavouritePlaylist(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="cyf_playlist">
      <div>
        {favouritePlaylist.map((playlist) => (
          <li key={playlist.id}>
            <p style={{ color: "red", fontSize: "2em", textAlign: "center" }}>
              <strong></strong>
              {playlist.playlist_name}
            </p>
          </li>
        ))}
      </div>
      <motion.img
       animate={{scale:1}}
       transition={{delay:1}}
       initial={{scale:0}}
        className="cyf_img"
        src="https://www.developernation.net/static/6840ae72189692709fc83802ad7e58a5/1c880/blogpost_cover_15_may_20_.webp"
        alt="cyf pic"
      />
    </div>
  );
};

export default CyfFavPlaylist;
