import { Dialog } from "@headlessui/react";

function PlaylistTracksFilterModal({ isOpen, handleModalOpen }) {

  return (
    <Dialog
      className="absolute w-screen h-screen top-0 bg-black"
      open={isOpen}
      onClose={() => handleModalOpen(false)}
    >
      <Dialog.Panel className="absolute top-1/2  left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 bg-orange-400 z-10 p-6">
        <Dialog.Title className="text-2xl m-3">Filter by tracks</Dialog.Title>
        <div className="m-3 text-lg">
          <Dialog.Description className="text-lg">Genre</Dialog.Description>

          <p>Filter by genre</p>
        </div>

        <div className="m-3 text-lg">
          <Dialog.Description className="text-lg">Length</Dialog.Description>

          <p>Filter by length</p>
        </div>

        <div className="m-3 text-lg">
          <Dialog.Description className="text-lg">Content</Dialog.Description>

          <p>Filter by content</p>
        </div>

        <div className="flex flex-row justify-center m-auto my-4">
          <button
            className="ml-3 inline-flex justify-center rounded-md border-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
            onClick={() => handleModalOpen(false)}
          >
            Clean
          </button>
          <button
            className="ml-3 inline-flex justify-center rounded-md bg-light-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
            onClick={() => handleModalOpen(false)}
          >
            Apply to playlist
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default PlaylistTracksFilterModal;
