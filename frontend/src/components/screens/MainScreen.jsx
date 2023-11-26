import React, { useState, useEffect } from "react";
import SharePlaylistInputBox from "../SharePlaylistInputBox";
import Header from "../Header";
import Playlists from "../Playlists";
import { config } from "../../config";

const clientId = "719d232ba04d433d98b3605bf4b316e1";
const redirectUri = config.redirectUri;

const url = "https://accounts.spotify.com/api/token";

function MainScreen() {
  const [accessToken, setAccessToken] = useState(null);
  console.log("redirect Uri", redirectUri);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    function getToken() {
      const urlParams = new URLSearchParams(window.location.search);
      let code = urlParams.get("code");
      // stored in the previous step
      let codeVerifier = localStorage.getItem("codeVerifier");

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: clientId,
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
          code_verifier: codeVerifier,
        }),
      };

      fetch(url, payload)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
            setAccessToken(data.access_token);
          }
        });
    }
    getToken();
  }, []);

  useEffect(() => {
    const payload = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    };

    fetch("https://api.spotify.com/v1/me/playlists", payload)
      .then((response) => response.json())
      .then((data) => {
       setPlaylists(data);
      });
  }, []);

  return (
    <div className=" bg-black text-white">
      <div className="filter">
        <Header />
      </div>
      <SharePlaylistInputBox />
      {playlists && <Playlists playlists={playlists}/>}
      
    </div>
  );
}

export default MainScreen;
