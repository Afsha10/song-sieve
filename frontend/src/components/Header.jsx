import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogOut";

const Header = () => {
  const [userName, SetUserName] = useState(null);

  //accessing the username after log in
  useEffect(() => {
    const getUsername = async () => {
      const myAccessToken = localStorage.getItem("access_token");
      const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${myAccessToken}`,
        },
      });
      const data = await response.json();
      SetUserName(data.display_name);
    };
    getUsername();
  }, []);

  return (
    <div>
      <div className="header_container">
        <div>
          <Link to="/">
            <img
              className="spotifyImg"
              src="https://i.pinimg.com/736x/17/d2/5d/17d25d4df677597d4ed0db654a4179a6.jpg"
              alt="Spotify Logo"
            />
          </Link>
        </div>

        <div>
          <p>Spotify Playlist Sieve</p>
        </div>
        <div className="header_username">
          <p>Hello {userName}!</p>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};
export default Header;
