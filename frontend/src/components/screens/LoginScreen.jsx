import React, { useEffect } from "react";
import { generateRandomString } from "../../utils/encodingUtils";
import { sha256 } from "../../utils/encodingUtils";
import { base64encode } from "../../utils/encodingUtils";
import { redirectToSpotify } from "../../utils/spotifyApiUtils";
// import "dotenv/config";

function LoginScreen({setChooseHeader}) {
  useEffect(() => {
    async function codeChallengeReturn() {
      const codeVerifier = generateRandomString(64);
      const hashed = await sha256(codeVerifier);
      const codeChallenge = base64encode(hashed);
      return { codeChallenge, codeVerifier };
    }
    // Use an async function inside useEffect
    async function fetchData() {
      const { codeChallenge, codeVerifier } = await codeChallengeReturn();
      localStorage.setItem("codeVerifier", codeVerifier);
      localStorage.setItem("codeChallenge", codeChallenge);
    }

    fetchData();
  }, []);

  return (
    <div>
      <button
        onClick={() =>{
          redirectToSpotify(
            localStorage.getItem("codeVerifier"),
            localStorage.getItem("codeChallenge"),
            "user-read-private playlist-read-private user-read-email"
          )
          console.log("sign innnnnn")
          setChooseHeader(true)
        }}  
      >
        LoginScreen
      </button>
    </div>
  );
}

export default LoginScreen;
