import React, { useState, useEffect } from "react";
import SharePlaylistInputBox from "../SharePlaylistInputBox";
import Header from "../Header";
import Playlists from "../Playlists";
import RecommendationPageLink from "../RecommendationPageLink";
import { Auth } from "../../utils/Auth";


function MainScreen() {
  const [playlists, setPlaylists] = useState(null);
  const token = Auth.getToken()
  useEffect(() => {
    const payload = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}}`,
      },
    };

    fetch("https://api.spotify.com/v1/me/playlists", payload)
      .then((response) => response.json())
      .then((data) => {
        setPlaylists(data);
      });
  }, [token]);

  return (
    <div className=" bg-black text-white">
      <div className="filter">
        <Header />
        <RecommendationPageLink />
      </div>
      <SharePlaylistInputBox />
      {playlists && <Playlists playlists={playlists}/>}
      
    </div>
  );
}

export default MainScreen;
