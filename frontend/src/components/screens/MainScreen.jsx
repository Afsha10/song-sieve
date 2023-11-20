import React, {useState, useEffect } from "react";

const clientId = "719d232ba04d433d98b3605bf4b316e1";
const redirectUri = "http://localhost:3000/app";
const url = "https://accounts.spotify.com/api/token";

function MainScreen() {


  const [inputUrl, setInputUrl] = useState(null);
 
  useEffect(() => {
    async function getToken() {
      const urlParams = new URLSearchParams(window.location.search);
      let code = urlParams.get("code");
      console.log("code", code);
      // stored in the previous step
      let codeVerifier = localStorage.getItem("codeVerifier");

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: clientId,
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
          code_verifier: codeVerifier,
        }),
      };

      fetch(url, payload)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
         
           console.log(`access_token: ${data.access_token}`)
           console.log(`token_type: ${data.token_type}`)
           console.log("refreshToken",data.refresh_token)
          if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          
          }
          if (data.token_type) {
            localStorage.setItem("token_type", data.token_type);
            }
        });
    }
    getToken();
  }, []);

  const handleSubmit = async (e) => {
    console.log('handle')
    e.preventDefault();
    // extracting playlist_id from url
    const arrayOfString = inputUrl.split('/');
    const playListId = arrayOfString[arrayOfString.length - 1].split("?")[0];
    const myAccessToken = localStorage.getItem('access_token');
    const myTokenType = localStorage.getItem('token_type');

    console.log({
      myAccessToken,  
      myTokenType
    })

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
};


export default MainScreen;
