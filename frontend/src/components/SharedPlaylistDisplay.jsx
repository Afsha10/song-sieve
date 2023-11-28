import React from "react";

function formatDuration(durationInMilliseconds) {
  const minutes = Math.floor(durationInMilliseconds / 60000);
  const seconds = ((durationInMilliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

const SharedPlaylistDisplay = ({ playlistData,filterExplicit }) => {
  if (!playlistData || !playlistData.tracks) {
    return null;
  }
  const filteredTracks = filterExplicit
    ? playlistData.tracks.items.filter((track) => track.track.explicit)
    : playlistData.tracks.items;

  
  return (
    <div className="mx-10">
      <div>
        <p className="text-2xl text-center md:text-4xl mx-1 my-1 md:my-2">
          {playlistData.name}
        </p>

        <p className="text-xl text-center md:text-3xl mx-1 my-2 md:my-6 text-gray-400">
          {playlistData.tracks.total} tracks
        </p>
        <div className=" w-72 md:w-80 mx-auto">
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
            className="grid grid-cols-2 
        md:gap-5
        text-xl
        md:text-3xl"
          >
            {track.track.album.images.length > 0 && (
              <img
                src={track.track.album.images[0].url}
                alt={`Album Cover for ${track.track.name}`}
              />
            )}
            <div className="flex-col m-2">
              <p className="font-bold text-blue-400">{track.track.name}</p>
              <p className=" text-gray-400">
                {formatDuration(track.track.duration_ms)}
              </p>
              <button className="m-2 rounded bg-brown-300 px-4 py-2 font-bold text-red-900 transition-colors duration-200 hover:bg-red-100 active:bg-red-500 sm:rounded-lg sm:px-2 sm:py-2">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="mt-0 mb-10 rounded bg-blue-100 px-4 py-2 font-bold text-blue-700 sm:text-xl lg:text-3xl transition-colors duration-200 hover:bg-blue-300 active:bg-blue-500 sm:rounded-lg sm:px-12 sm:py-6">
          Save playlist
        </button>
      </div>
    </div>
  );
};

export default SharedPlaylistDisplay;
