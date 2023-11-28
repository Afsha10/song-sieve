import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const SharePlaylistInputBox = () => {
  const navigate = useNavigate();
  const [inputUrl, setInputUrl] = useState("");
  const [playlistData, setPlaylistData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showTracksScreen, setShowTracksScreen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const arrayOfString = inputUrl.split("/");
    const playListId = arrayOfString[arrayOfString.length - 1].split("?")[0];
    navigate(`/app/playlist/${playListId}`);
    setLoading(false);

    // const myAccessToken = localStorage.getItem("access_token");
    // const myTokenType = localStorage.getItem("token_type");

    //
  };

  return (
    <>
      <div className="grid gap-2 text-sm md:text-xl lg:text-3xl">
        <form className="flex flex-col m-auto md:mx-24 lg:mx-96 mx-">
          <p className="m-2">Add your Spotify playlist URL</p>

          <input
            type="text"
            placeholder="Playlist URL"
            className="h-8 w-full rounded bg bg-gray-600 p-2 pl-4 pr-4 lg:h-12 lg:m-2"
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button
            className="relative cursor-default rounded-md bg-blue-800 px-10 py-1 text-center self-center text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 my-3"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Import shared playlist
          </button>
        </form>
      </div>

      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default SharePlaylistInputBox;
