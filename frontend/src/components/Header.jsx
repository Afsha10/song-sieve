import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

    const Header = () => {
    const [userName, SetUserName] = useState(null)

    //accessing the username after log in
    useEffect(()=>{
        const getUsername = async ()=>{
        const myAccessToken = localStorage.getItem('access_token');
        const response = await fetch('https://api.spotify.com/v1/me',{
       method: "GET",
       headers: {
        Authorization: `Bearer ${myAccessToken}`
      }
    })
    console.log(response)
       const data =await response.json()
       SetUserName(data.display_name)
        }
       getUsername()
    },[])
   
    return (
      <div>
        <div className="flex flex-row p-4 text-3xl sm:px-8 sm:pt-8 sm:text-4xl sm:font-bold sm:tracking-wider lg:text-6xl">
          <div>
            <Link to="/app">
              <img
                className="w-16 h-16 sm:mx-7 sm:h-24 sm:w-24 lg:h-24 lg:w-24"
                src="https://i.pinimg.com/736x/17/d2/5d/17d25d4df677597d4ed0db654a4179a6.jpg"
                alt="Spotify Logo"
              />
            </Link>
          </div>

          <div>
            <p className="flex flex-row p-1 text-xl sm:px-4 sm:pt-4 sm:text-4xl sm:font-bold sm:tracking-wider lg:text-6xl">
              Spotify Playlist Sieve
            </p>
          </div>
          <div>
            <p className="pb-2 pt-2 lg:pl-96 text-sm sm:px-2 sm:pt-2 sm:text-xl sm:font-bold sm:tracking-wider lg:text-2xl">
              Hello {userName}
            </p>
          </div>
        </div>
      </div>
    );
}
export default Header