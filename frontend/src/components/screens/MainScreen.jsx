import React, { useEffect } from "react";
import Header from "../Header";

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
          console.log(data.access_token);
          if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
          }
        });
    }

    getToken();
  }, []);

  return (
    <div>
      <Header userName={"shadi"}/>
      <div>MainScreen</div>;
    </div>
  ) 
}

export default MainScreen;
