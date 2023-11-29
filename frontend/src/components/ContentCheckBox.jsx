import React, { useState } from "react";

const ContentCheckbox = ({ playlistData }) => {
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);

  function yesClickHandler() {
    console.log(playlistData.tracks.items)
    console.log(playlistData.tracks.items[0].track.explicit)
    const selectedTracks = playlistData.tracks.items.filter(
      (track) => track.track.explicit === true
    );
    console.log(selectedTracks)
    setFilteredTracks(selectedTracks);
    setNoChecked(false);
    setYesChecked(true);
  }
  function noClickHandler() {
    console.log(playlistData.tracks.items);
    console.log(playlistData.tracks.items[0].track.explicit);
    const selectedTracks = playlistData.tracks.items.filter(
      (track) => track.track.explicit === false
    );
    console.log(selectedTracks);
    setFilteredTracks(selectedTracks);
    setYesChecked(false);
    setNoChecked(true);
  }

  return (
    <div>
      <label>
        Yes
        <input
          type="checkbox"
          checked={yesChecked}
          onChange={yesClickHandler}
        />
      </label>
      <label>
        No
        <input type="checkbox" checked={noChecked} onChange={noClickHandler} />
      </label>
    </div>
  );
};

export default ContentCheckbox;
