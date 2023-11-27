import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SharedPlaylistDisplay from "../SharedPlaylistDisplay";
import Header from "../Header"
import PlaylistTracksFilterModal from "../dialogs/PlaylistTracksFilterModal";
// import Player from "../Player";



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
// function PlaylistTracksScreen() {
  let [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = ((open) => {
    if (open) {
      setIsOpen(true)
    }
    else {
      setIsOpen(false)
    }
  })
    
  return (
    <div className="text-white bg-black grow">
      <Header />
      <button
        className=" ml-60 inline-flex justify-center rounded-md border-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
        onClick={() => handleModalOpen(true)}
      >
        Filter by
      </button>
      <PlaylistTracksFilterModal
        playlistData={playlistData}
        isOpen={isOpen}
        handleModalOpen={handleModalOpen}
      />

      <SharedPlaylistDisplay playlistData={playlistData}  />
      {/* <div><Player/></div> */}
    </div>
  );
}

export default PlaylistTracksScreen;
