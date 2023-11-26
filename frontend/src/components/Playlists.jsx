import React, { useEffect, useState } from "react";

import playlistPlaceholderImage from "./images/music-notes.svg";


function Playlists({playlists}) {

  function modifyImageUrl(playlist) {
    if (playlist.images.length <= 0) {
      return <img src={playlistPlaceholderImage} alt="" />;
    } else {
      return <img src={playlist.images[0]?.url} alt="" />;
    }
}

  return (
    <>
      <p className="text-2xl md:text-4xl lg:text-4xl mx-1 my-5 md:my-8 md:mx-6">
        Your Spotify Playlists
      </p>
      <div className="grid grid-cols-2 gap-5 m-2 md:grid-cols-3 lg:grid-cols-5 md:gap-10 text-xl md:text-3xl md:mx-6">
        {playlists !== null &&
          playlists.items.map((playlist, index) => (
            <div key={index}>
              <div className="2">{modifyImageUrl(playlist)}</div>
              <p>{playlist.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Playlists;
