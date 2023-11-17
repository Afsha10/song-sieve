import React, {useState, useEffect } from "react";
import Header from "./Header";

const clientId = "719d232ba04d433d98b3605bf4b316e1";
const redirectUri = "http://localhost:3000/app";
const url = "https://accounts.spotify.com/api/token";

function MainScreen() {
  const [inputUrl, setInputUrl] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [tokenType, setTokenType] = useState(null);
 //const [refreshToken, setRefreshToken] = useState(null);
const [data,setData] = useState(null)
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
          
          setData(data)
          // setRefreshToken(data.refresh_token)
           console.log(`access_token: ${data.access_token}`)
           console.log(`token_type: ${data.token_type}`)
           console.log("refreshToken",data.refresh_token)
          if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          setAccessToken(data.access_token);
          }
          if (data.token_type) {
            localStorage.setItem("token_type", data.token_type);
            setTokenType(data.token_type);
            }
        });
    }
    getToken();
  }, []);


// refresh an access token
const getRefreshToken = async () => {
  // refresh token that has been previously stored
  const refreshToken = localStorage.getItem('refresh_token');
  const url = "https://accounts.spotify.com/api/token";

   const payload = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     },
     body: new URLSearchParams({
       grant_type: 'refresh_token',
       refresh_token: refreshToken,
       client_id: clientId
     }),
   }
   const body = await fetch(url, payload);
   const response = await body.json();
   
   localStorage.setItem('access_token', response.accessToken);
   localStorage.setItem('refresh_token', response.refreshToken);
   console.log('refresh_token', response.refreshToken)
 }

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    // extracting playlist_id from url
    const arrayOfString = inputUrl.split('/');
    const playListId = arrayOfString[arrayOfString.length - 1].split("?")[0];
    console.log("submit button clicked")
    console.log(tokenType);
    let tokenType = localStorage.setItem("access_token", data.access_token);
    let accessToken =  localStorage.setItem("access_token", data.access_token);
    console.log(accessToken)
    const playListParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${tokenType}  ${accessToken}`
      }
    };
    try {
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playListId}`, playListParameters);
      if (!response.ok) {
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
    <Header userName={'shadi'}/>
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
