import React, { useState } from "react";
import PlaylistInfo from "./PlaylistInfo"; // Update the path accordingly

const SharePlaylistInputBox = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [playlistData, setPlaylistData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const arrayOfString = inputUrl.split("/");
    const playListId = arrayOfString[arrayOfString.length - 1].split("?")[0];

    const myAccessToken = localStorage.getItem("access_token");
    const myTokenType = localStorage.getItem("token_type");

    const playListParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${myTokenType} ${myAccessToken}`,
      },
    };

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playListId}`,
        playListParameters
      );

      if (!response.ok) {
        throw new Error("Failed to fetch playlist data");
      }

      const data = await response.json();
      setPlaylistData(data);
    } catch (error) {
      console.error("Error fetching playlist data:", error);
      setError("Failed to fetch playlist data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="UrlInput-container">
          <form>
            <h1>Input your playlist URL</h1>
            <div className="inputButton-container">
              <input
                type="text"
                placeholder="Playlist URL"
                onChange={(e) => setInputUrl(e.target.value)}
              />
              <button type="submit" onClick={(e) => handleSubmit(e)}>
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}
      <PlaylistInfo playlistData={playlistData} />
    </>
  );
};

export default SharePlaylistInputBox;
