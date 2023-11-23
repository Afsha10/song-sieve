import React, { useState } from "react";

import PlaylistTracksFilterModal from "../dialogs/PlaylistTracksFilterModal";

function PlaylistTracksScreen() {
  let [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = ((open) => {
    if (open) {
      setIsOpen(true)
    }
    else {
      setIsOpen(false)
    }
  })
    
  return (
    <div className=" bg-orange-200 grow">
      <h2>PlaylistTracksScreen</h2>
      <button onClick={() => handleModalOpen(true)}>Filter by</button>
      <PlaylistTracksFilterModal isOpen={isOpen} handleModalOpen={handleModalOpen} />
    </div>
  );
}

export default PlaylistTracksScreen;
