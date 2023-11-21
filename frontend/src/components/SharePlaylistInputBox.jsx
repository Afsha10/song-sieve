import { useState } from "react";
const SharePlaylistInputBox = () => {
    const [inputUrl, setInputUrl] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // extracting playlist_id from url
        const arrayOfString = inputUrl.split('/');
        const playListId = arrayOfString[arrayOfString.length - 1].split("?")[0];
        const myAccessToken = localStorage.getItem('access_token');
        const myTokenType = localStorage.getItem('token_type');
        const playListParameters = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${myTokenType}  ${myAccessToken}`
          }
        };
    
        try {
          const response = await fetch(`https://api.spotify.com/v1/playlists/${playListId}`, playListParameters);
          if (!response.ok) {
            console.log(response)
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
          
        } catch (error) {
          console.error('Error fetching playlist data:', error);
          // Handle error, e.g., set an error state
        }
      };
    
        
  return (
    <>
    <div className="form-countainer">
      <div className="UrlInput-countainer">
        <form>
          <h1>input your playlist Url</h1>
          <div className="inputButton-countainer">
          <input type="text" placeholder="Playlist Url" onChange={(e) => setInputUrl(e.target.value)} />
          <button type="submit" onClick={(e) => handleSubmit(e)}>ADD</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
export default SharePlaylistInputBox