import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GenreFilter from "../DynamicGenres";
import SharedPlaylistDisplay from "../SharedPlaylistDisplay";
import Header from "../Header"

function PlaylistTracksScreen() {
  const [playlistData, setPlaylistData] = useState(null);
  const { playlistId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
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
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          playListParameters
        );

        if (!response.ok) {
          throw new Error("Failed to fetch playlist data");
        }

        const data = await response.json();
        setPlaylistData(data);
      } catch (error) {
        console.error("Error fetching playlist data:", error);
        // Handle the error (e.g., set an error state)
      }
    };

    fetchData();
  }, [playlistId]); // Re-fetch when playlistId changes

  return (
    <div className="bg-orange-200 grow">
      <Header/>
      <h2>PlaylistTracksScreen</h2>
      <GenreFilter playlistData={playlistData} />
      <SharedPlaylistDisplay playlistData={playlistData} />
    </div>
  );
}

export default PlaylistTracksScreen;
