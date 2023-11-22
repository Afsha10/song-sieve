import{ useEffect } from "react";
import SharePlaylistInputBox from "../SharePlaylistInputBox";
import Header from "../Header";

import GenreFilter from "../DynamicGenres";

const clientId = "719d232ba04d433d98b3605bf4b316e1";
const redirectUri = "http://localhost:3000/app";
const url = "https://accounts.spotify.com/api/token";

function MainScreen() {
  
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

  return (
    <div>
      <h1>MainScreen</h1>
      <GenreFilter />
      <Header/>
      <SharePlaylistInputBox/>
    </div>
  );
}


  
export default MainScreen;
