import playlistPlaceholderImage from "./images/music-notes.svg";
import { Link } from "react-router-dom";


function Playlists({playlists}) {

  function modifyImageUrl(playlist) {
    if (playlist.images.length <= 0) {
      return <img src={playlistPlaceholderImage} alt="" style={{ borderRadius: '5px' }}/>;
    } else {
      return <img src={playlist.images[0]?.url} alt="" style={{ borderRadius: '5px' }}/>;
    }
}

  return (
    <>
      <p className="text-2xl md:text-4xl lg:text-4xl mx-8 my-5 md:my-8 md:mx-6">
        Your Spotify Playlists
      </p>
      <div className="grid grid-cols-2 gap-10 m-8 md:grid-cols-3 lg:grid-cols-5 md:gap-10 text-xl md:text-3xl md:mx-6">
        {playlists !== null &&
          playlists.items !== undefined &&
          playlists.items.map((playlist, index) => (
            <div key={index} className="playlistDivInMainScreen">
              <Link to={`/app/playlist/${playlist.id}`}>
                <div>{modifyImageUrl(playlist)}</div>
                <p style={{fontSize:"large", color:"rgb(255,255,255)"}}>{playlist.name}</p>
                <p style={{fontSize:"large", color:"rgb(255,255, 255)"}}>{playlist.tracks.total} tracks</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Playlists;
