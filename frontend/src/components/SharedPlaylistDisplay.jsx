import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
function formatDuration(durationInMilliseconds) {
  const minutes = Math.floor(durationInMilliseconds / 60000);
  const seconds = ((durationInMilliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

const SharedPlaylistDisplay = ({ playlistData }) => {
  const [uri, setUri] = useState("");
  const [urlTrack, setUrlTrack] = useState();

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById("embed-iframe");
      const options = {
        uri: uri,
      };
      const callback = (EmbedController) => {};
      IFrameAPI.createController(element, options, callback);
    };

    // Clean up on component unmount
    return () => {
      delete window.onSpotifyIframeApiReady;
    };
  }, [uri]);

  const handlePlay = (spotifyUri, spotifyUrl) => {
    setUri(spotifyUri);
    setUrlTrack(spotifyUrl);
  };

  if (!playlistData?.tracks) {
    return <div>Loading...</div>; // You can replace this with your loading indicator or message
  }

  return (
    <div className=" mx-10">
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>

      <div className="playlists">
        <p className="text-2xl text-center md:text-4xl mx-1 my-1 md:my-2">
          {playlistData.name || "Playlist Name Not Available"}
        </p>

        <p className="text-xl text-center md:text-3xl mx-1 my-2 md:my-6 text-gray-400">
          {playlistData.tracks.items.length} tracks
        </p>
        <div className="w-72 md:w-80 mx-auto">
          <img

            src={
              playlistData.images.length > 0
                ? playlistData.images[0].url
                : "https://res.cloudinary.com/teepublic/image/private/s--n4uagiOn--/c_crop,x_10,y_10/c_fit,h_799/c_crop,g_north_west,h_1051,w_1051,x_-171,y_-121/l_upload:v1507037314:production:blanks:gbajnunp66ec7xftnpq1/fl_layer_apply,g_north_west,x_-276,y_-220/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1539384919/production/designs/3309274_0.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 my-14 md:grid-cols-2 lg:grid-cols-4 md:gap-10 text-xl md:text-3xl md:mx-6">
        {playlistData.tracks.items.map((track, trackIndex) => (
          <div
            key={trackIndex}
            id="tracksDivInFilterTrackScreen"
            className="grid grid-cols-2 
              md:gap-5
              text-xl
              md:text-3xl"
          >
            {track.track.album.images.length > 0 && (
              <img
                key={trackIndex}
                src={track.track.album.images[0].url}
                alt={`Album Cover for ${track.track.name}`}
                style={{ cursor: "pointer",borderRadius:"5px",marginLeft:"2px",marginTop:"2px" }}
                onClick={() => handlePlay(track.track.uri, track.track.id)}
              />
            )}
            <div className="ml-6 sm:m-0 flex-rows">
              <p style={{fontSize:"large",color:"rgb(31, 81, 255, 0.7)"}}>{track.track.name}</p>
              <p className=" text-gray-400 text-xl">
                {formatDuration(track.track.duration_ms)}
              </p>
            </div>
            {track.track.id === urlTrack && (
              <div className="absolute z-10 visible p-4 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-300" role="tooltip"id="embed-iframe">
                <iframe
                  src={`https://open.spotify.com/embed/track/${urlTrack}`}
                  width="280"
                  height="80"
                  title="music player"
                ></iframe>
                <button className="ml-2"
                  onClick={() => setUrlTrack(null)}
                >
                  ❌
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedPlaylistDisplay;
