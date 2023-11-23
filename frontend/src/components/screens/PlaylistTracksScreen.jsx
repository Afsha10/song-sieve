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
    <div className="text-white bg-black grow">
      <h2>PlaylistTracksScreen</h2>
      <button
        className="ml-3 inline-flex justify-center rounded-md border-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
        onClick={() => handleModalOpen(true)}
      >
        Filter by
      </button>
      <PlaylistTracksFilterModal
        isOpen={isOpen}
        handleModalOpen={handleModalOpen}
      />
    </div>
  );
}

export default PlaylistTracksScreen;
