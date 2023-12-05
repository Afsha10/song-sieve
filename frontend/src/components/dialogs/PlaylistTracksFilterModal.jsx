import { Dialog } from "@headlessui/react";
import GenreFilter from "../DynamicGenres";
import { useState } from "react";

function PlaylistTracksFilterModal({
  isOpen,
  handleModalOpen,
  playlistData,
  setFilteredPlaylistData,
}) {
  const [range, setRange] = useState(20);
  const [isExplicit, setIsExplicit] = useState(false)

  return (
    <Dialog
      className="absolute w-screen h-screen top-0 bg-black"
      open={isOpen}
      onClose={() => handleModalOpen(false)}
    >
      <Dialog.Panel className="absolute top-1/2  left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 bg-white z-10 p-6">
        <Dialog.Title className="text-2xl m-3">Filter by tracks</Dialog.Title>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            console.log("form data get", formData.get("isExplicit"));
            console.log("duration", formData.get("duration"));
            console.log("genre", formData.get("selectedGenre"));
            const isExplicit = formData.get("isExplicit") === "true";
            const duration = Number(formData.get("duration"));

            // playlistData.tracks.items[0].track.explicit;
            const filteredItems = playlistData.tracks.items.filter((item) => {
              return (
                item.track.explicit === isExplicit &&
                item.track.duration_ms <= duration * 60000
              );
            });
            setFilteredPlaylistData({
              ...playlistData,
              tracks: { ...playlistData.tracks, items: filteredItems },
            });
            handleModalOpen(false);
          }}
        >
          <div className="m-3 text-lg">
            <Dialog.Description className="text-lg">Genre</Dialog.Description>

            <p>Filter by genre</p>

            <GenreFilter playlistData={playlistData} />
          </div>

          <div className="m-3 text-lg">
            <Dialog.Description className="text-lg">Length</Dialog.Description>

            <p>Drag to select your length</p>

            <input
              type="range"
              name="duration"
              min="0"
              max="20"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
            <p style={{ textAlign: "center" }}>{range}min</p>
            {/* <DurationFilter playlistData={playlistData} /> */}
          </div>

          <div className="m-3 text-lg">
            <Dialog.Description className="text-lg">
              {" "}
              Is explicit
            </Dialog.Description>

            <input
              type="radio"
              id="isExplicitTrue"
              name="isExplicit"
              value="true"
              checked={isExplicit}
              onChange={() => setIsExplicit(true)}
            />
            <label htmlFor="isExplicitTrue">Yes</label>

            <input
              type="radio"
              id="isExplicitFalse"
              name="isExplicit"
              value="false"
              checked={!isExplicit}
              onChange={() => setIsExplicit(false)}
            />
            <label htmlFor="isExplicitFalse">No</label>
            {/* <ContentCheckbox playlistData={playlistData} /> */}
          </div>

          <div className="flex flex-row justify-center m-auto my-4">
            <button
              className="ml-3 inline-flex justify-center rounded-md border-2 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                setRange(20);
                setFilteredPlaylistData(playlistData);
                setIsExplicit(false)
              }}
            >
              Clean
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md bg-light-blue-700 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
              // onClick={() => handleModalOpen(false)}
            >
              Apply to playlist
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}

export default PlaylistTracksFilterModal;
