import React, { useEffect, useState } from "react";


const genresUrl =
  "https://api.spotify.com/v1/recommendations/available-genre-seeds";

  function GenreFilter({playlistData}) {

  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [showFilteredTracks, setShowFilteredTracks] = useState(false)

  useEffect(() => {
    async function fetchGenres() {
      const accessToken = localStorage.getItem("access_token");

      try {
        const response = await fetch(genresUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    fetchGenres();
  }, []);

  const clickHandlerBtn = (e) => {
    e.preventDefault();
    console.log(selectedGenre)
    //console.log(playlistData.tracks.items[0].artists[0].genres);

    if (playlistData && playlistData.tracks && playlistData.tracks.items) {
      let filtered = playlistData.tracks.items.filter(track => {
        // Check if the track, artists, and genres are defined before accessing them
        return (
          track &&
          track.artists &&
          track.artists.length > 0 &&
          track.artists.every(artist => {
            return artist.genres && Array.isArray(artist.genres) && artist.genres.includes(selectedGenre);
          })
        );
      });

      setFilteredTracks(filtered);
      setShowFilteredTracks(true);
    }
  };

  return (
    <div>
      
      <h2>
        <strong>Filter Your Tracks</strong>
      </h2>
      <h4>
        <strong>Genre</strong>
      </h4>

      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">filter by</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <button
      onClick={(e)=>clickHandlerBtn(e)}
      >
        Click
      </button>
      {console.log(filteredTracks)}
      {showFilteredTracks &&
  (filteredTracks.length > 0 ? (
    filteredTracks.tracks.items.map((track, trackIndex) => (
      <div key={trackIndex}>
        <p>
          <strong>Track Name:</strong>
          {track.track.name}
        </p>
        {track.track.artists.map((artist, artistIndex) => (
          <p key={artistIndex}>
            <strong>Artist Name:</strong>
            {artist.name}
          </p>
        ))}
      </div>
    ))
  ) : (
    <p>There are no filtered tracks</p>
  ))}
    </div>
    
  );
}

export default GenreFilter;
