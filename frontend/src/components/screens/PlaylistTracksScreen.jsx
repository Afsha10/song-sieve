import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SharedPlaylistDisplay from "../SharedPlaylistDisplay";
import Header from "../Header";
import PlaylistTracksFilterModal from "../dialogs/PlaylistTracksFilterModal";

function PlaylistTracksScreen() {
  const [playlistData, setPlaylistData] = useState(null);
  const { playlistId } = useParams();
  const [filteredPlaylistData, setFilteredPlaylistData] = useState(null); 


  useEffect(() => {
    const fetchData = async () => {
      const myAccessToken = localStorage.getItem("access_token");

      const playListParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myAccessToken}`,
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

  const handleModalOpen = (open) => {
    if (open) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="text-white bg-black grow">
      <Header />
      <div className="flex mx-8">
        <button
          className="m-1 rounded border-2 md:border-4 border-blue-600 px-3 py-2 text-sm md:text-xl font-bold text-white transition-colors duration-300  hover:bg-blue-700 sm:ml-3 sm:w-auto md:p-2 md:mx-4"
          onClick={() => handleModalOpen(true)}
        >
          Filter by
        </button>
      </div>

      <PlaylistTracksFilterModal
        setFilteredPlaylistData={setFilteredPlaylistData}
        playlistData={playlistData}
        setPlaylistData={setPlaylistData}
        isOpen={isOpen}
        handleModalOpen={handleModalOpen}
      />

      <SharedPlaylistDisplay playlistData={filteredPlaylistData?filteredPlaylistData:playlistData} />
      {/* <div><Player/></div> */}
    </div>
  );
}

export default PlaylistTracksScreen;
