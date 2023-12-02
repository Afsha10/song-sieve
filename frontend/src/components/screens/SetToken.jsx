import React, { useState, useEffect } from "react";
import { redirectUri } from "../../config";
import { useNavigate } from "react-router-dom";

const clientId = "719d232ba04d433d98b3605bf4b316e1";

const url = "https://accounts.spotify.com/api/token";

function SetToken() {
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    function getToken() {
      const urlParams = new URLSearchParams(window.location.search);
      let code = urlParams.get("code");
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
          if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
            setAccessToken(data.access_token);
          }
        });
    }
    getToken();
  }, []);

useEffect(() => {
  if (accessToken) {
    navigate("/")
  }
}, [accessToken])

  return null
}

export default SetToken;
