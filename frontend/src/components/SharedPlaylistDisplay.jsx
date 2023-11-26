import React from "react";

function formatDuration(durationInMilliseconds) {
  const minutes = Math.floor(durationInMilliseconds / 60000);
  const seconds = ((durationInMilliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

const SharedPlaylistDisplay = ({ playlistData }) => {
  if (!playlistData || !playlistData.tracks) {
    return null;
  }

  return (
    <div className=" mx-10">
      <div className="playlists">
        <h2 className="text-2xl md:text-4xl mx-1 my-5 md:my-8 md:mx-6">
          {playlistData.name}
        </h2>

        <p className="text-xl md:text-2xl mx-1 my-2 md:my-2 md:mx-6">
          Total Tracks: {playlistData.tracks.total}
        </p>
        <div className="h-72 md:w-96 md:h-96 m-4">
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
          className="grid grid-cols-2 
        mt-8
        mx-4
        gap-3
        md:grid-cols-3
        lg:grid-cols-5
        md:gap-5
        text-xl
        md:text-3xl
        md:mx-6"
        >
          {track.track.album.images.length > 0 && (
            <img
              src={track.track.album.images[0].url}
              alt={`Album Cover for ${track.track.name}`}
              
            />
          )}
          <div className="grid grid-rows">
            <p>
              <strong>Track Name: </strong>
              {track.track.name}
            </p>
            <p className=" text-gray-400">
              <strong>Length:</strong> {formatDuration(track.track.duration_ms)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SharedPlaylistDisplay;
