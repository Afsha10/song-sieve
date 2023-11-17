import { useState } from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import MainScreen from "./screens/MainScreen"


const Header = ({userName, setShowInputPlayList}) => {
     const [showHomePage, setShowHomePage] = useState(false)
    return(
        <div>
          <div className="header_container">
            <Router>
                <div>
                    <Link
                    to='./components/HomePage'
                    onClick={()=>{
                        setShowHomePage(true)
                        setShowInputPlayList(false)
                    }}
                    >
                    <img className="spotifyImg"
                    //  src={LogoSpotify} 
                    src="https://toppng.com/uploads/preview/spotify-icon-spotify-logo-black-and-white-11563065230ukmcxtnjge.png"
                     alt="Spotify Logo" />  
                </Link> 
                </div>
            </Router>
                <div>
                    <p>Spotifay Playlist Seive</p>
                </div>
                <div>
                    <p>Hi {userName}</p>
                </div>
          </div>
            {showHomePage && <MainScreen/>}   
        </div>
    )
}
export default Header