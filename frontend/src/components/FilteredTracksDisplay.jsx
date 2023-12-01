import React, { useState, useEffect } from "react";

function formatDuration(durationInMilliseconds) {
    const minutes = Math.floor(durationInMilliseconds / 60000);
    const seconds = ((durationInMilliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
const FilteredTracksDisplay = ({filteredTracks})=>{

    const [playTracks, setPlayTracks] = useState(false);
  const [uri, setUri] = useState("");
  const [urlTrack, setUrlTrack] = useState();

  useEffect(() => {
    console.log(uri);
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
    console.log(urlTrack);
    setPlayTracks(true);
  };

  if (!filteredTracks) {
    return <div>Loading...</div>; 
  }

    return(
        <div className=" mx-10">
            <div className="grid grid-cols-1 gap-10 my-14 md:grid-cols-2 lg:grid-cols-4 md:gap-10 text-xl md:text-3xl md:mx-6">
            {playTracks && (
            <div id="embed-iframe">
                <iframe
                src={`https://open.spotify.com/embed/track/${urlTrack}`}
                width="280"
                height="100"
                ></iframe>
                <button
                style={{ position: "relative" }}
                onClick={() => setPlayTracks(false)}
                >
                ❌
                </button>
            </div>
           )}
           {filteredTracks &&
            filteredTracks.map((track,index)=>
            <div key={index} className="grid grid-cols-2 
            md:gap-5
            text-xl
            md:text-3xl">
            {track.track.album.images.length > 0 && (
                <img
                  key={index}
                  src={track.track.album.images[0].url}
                  alt={`Album Cover for ${track.track.name}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePlay(track.track.uri, track.track.id)}
                />  
            )}
            <div className="ml-6 sm:m-0 flex-rows">
              <p className=" font-medium text-blue-400">{track.track.name}</p>
              <p className=" text-gray-400 text-2xl">
                {formatDuration(track.track.duration_ms)}
              </p>
            </div>
            </div>  
            )}
            </div>
            
        </div>
    )
}
export default FilteredTracksDisplay;