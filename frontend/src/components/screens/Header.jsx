import { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import LogoSpotify from '../assets/LogoSpotify.png'
import MainScreen from './MainScreen'



const Header = ({userName}) => {
    const [showHomePage, setShowHomePage] = useState(false)
    return(
        <div>
          <div className="header_container">
            {/* <Router> */}
                <div>
                <img className="spotifyImg" src='https://cdn0.iconfinder.com/data/icons/logo-mini-free-1/64/spotify-logo-brand-512.png'/>
                
                    {/* <Link
                        to='./MainScreen'
                        onClick={()=>setShowHomePage(true)}>
                            
                         <img  className="spotifyImg" src={LogoSpotify} alt="Spotify Logo" /> 
                    </Link>  */}
                </div>
            {/* </Router> */}
                <div>
                <p>Spotify Playlist Sieve</p> 
                </div>
                <div>
                <p style={{fontSize:10}}>Hi {userName}</p>
                </div>
          </div>
          {/* {showHomePage && <MainScreen/>}    */}
        </div>
    )
}
export default Header;