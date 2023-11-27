import React, { useState, useEffect } from "react";

function formatDuration(durationInMilliseconds) {
  const minutes = Math.floor(durationInMilliseconds / 60000);
  const seconds = ((durationInMilliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

const SharedPlaylistDisplay = ({ playlistData }) => {
  const [playTracks, setPlayTracks] = useState(false);
  const [uri, setUri] = useState("");
  const [urlTrack, setUrlTrack] = useState()

  useEffect(() => {
    console.log(uri)
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById('embed-iframe');
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
  }, []);

  const handlePlay = (spotifyUri,spotifyUrl) => {
    setUri(spotifyUri);
    setUrlTrack(spotifyUrl)
    console.log(urlTrack)
    setPlayTracks(true);
  };

  if (!playlistData || !playlistData.tracks) {
    return <div>Loading...</div>; // You can replace this with your loading indicator or message
  }

  return (
    <div className=" mx-10">
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>

      <div className="playlists">
        <h2 className="text-2xl md:text-4xl mx-1 my-5 md:my-8 md:mx-6">
          {playlistData.name || "Playlist Name Not Available"}
        </h2>

        <p className="text-xl md:text-2xl mx-1 my-2 md:my-2 md:mx-6">
          Total Tracks: {playlistData.tracks.total}
        </p>
        <div className="h-72 md:w-96 md:h-96">
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
      
      {playlistData.tracks.items.map((track, trackIndex) => (
        <div
          key={trackIndex}
          className="grid grid-cols-2 
        mt-8
        gap-3
        md:grid-cols-3
        lg:grid-cols-5
        md:gap-5
        text-xl
        md:text-3xl
        md:mx-6"
        >
          {track.track.album.images.length > 0 && (
            <>
          <div style={{display:"flex"}}>
          
            <img
              key={trackIndex}
              src={track.track.album.images[0].url}
              alt={`Album Cover for ${track.track.name}`}
              style={{ cursor: "pointer" }}
              onClick={() => handlePlay(track.track.uri, track.track.id)}
            />
            <div className="iframeDiv">
         {playTracks && (
            <div id="embed-iframe">
              <iframe src={`https://open.spotify.com/embed/track/${urlTrack}`} width="280" height="100" ></iframe>
            </div>
            )}
        </div>
            </div>
            </>
          )}

          <div className="grid grid-rows">
            <p>
              <strong>Track Name: </strong>
              {track.track.name}
            </p>
            <p>
              <strong>Length:</strong> {formatDuration(track.track.duration_ms)}
            </p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default SharedPlaylistDisplay;
