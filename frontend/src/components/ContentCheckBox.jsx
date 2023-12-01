import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentCheckbox = ({ playlistData }) => {
  const navigate = useNavigate();
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);
    
  console.log(playlistData)

  // const applyButtonHandler = (e) => {
  //   e.preventDefault();
  //   console.log(filteredTracks)
  //   setFilteredTracks(filteredTracks)
  //   navigate(`/app/Playlists/${filteredTracks}`);
  // };
  const applyButtonHandler = (e) => {
    e.preventDefault();
    console.log(filteredTracks)
    setFilteredTracks(filteredTracks)
    navigate('/app/filteredPlaylist',{state:{filteredTracks}});
  };
  

  function yesClickHandler() {
    const selectedTracks = playlistData.filter(
      (track) => track.track.explicit === true
    );
    console.log(selectedTracks)
    setFilteredTracks(selectedTracks);
    setNoChecked(false);
    setYesChecked(true);
  }
  
  function noClickHandler() {
    const selectedTracks = playlistData.filter(
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
      <div>
      <button
       onClick={(e)=>applyButtonHandler(e)}
      >Apply to playlist
      </button>
      </div>
      
    </div>
  );
};

export default ContentCheckbox;
