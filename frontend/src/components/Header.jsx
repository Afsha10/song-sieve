import { Link } from 'react-router-dom'

const Header = ({userName}) => {
    return(
        <div>
          <div className="header_container">
         
                <div>
                    <Link to='/app'>
                        <img className="spotifyImg"
                        src="https://toppng.com/uploads/preview/spotify-icon-spotify-logo-black-and-white-11563065230ukmcxtnjge.png"
                        alt="Spotify Logo" />  
                    </Link> 
                </div>
           
                <div>
                    <p>Spotifay Playlist Seive</p>
                </div>
                <div>
                    <p>Hi {userName}</p>
                </div>
          </div>
            {/* {showHomePage && <MainScreen/>}    */}
        </div>
    )
}
export default Header