import React, { useState, useEffect } from "react";
import { decideRedirectUrl } from "../../decideRedirectUrl";
import { useNavigate } from "react-router-dom";

const clientId = "719d232ba04d433d98b3605bf4b316e1";

const url = "https://accounts.spotify.com/api/token";

function SetToken() {
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();
const redirectUri = decideRedirectUrl();
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
  }, [redirectUri]);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return null;
}

export default SetToken;
