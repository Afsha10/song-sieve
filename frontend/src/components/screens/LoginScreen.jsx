import React, { useEffect } from "react";
import { generateRandomString } from "../../utils/codeChallenge";
import { sha256 } from "../../utils/codeChallenge";
import { base64encode } from "../../utils/codeChallenge";
import { redirectToSpotify } from "../../utils/redirectToSpotify";
// import "dotenv/config";

function LoginScreen() {
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
        onClick={() =>
          redirectToSpotify(
            localStorage.getItem("codeVerifier"),
            localStorage.getItem("codeChallenge"),
            "user-read-private playlist-read-private user-read-email"
          )
        }
      >
        LoginScreen
      </button>
    </div>
  );
}

export default LoginScreen;
