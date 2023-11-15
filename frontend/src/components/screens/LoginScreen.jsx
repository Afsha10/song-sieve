import React, { useEffect } from "react";
import { generateRandomString } from "../../utils/encodingUtils";
import { sha256 } from "../../utils/encodingUtils";
import { base64encode } from "../../utils/encodingUtils";
import { redirectToSpotify } from "../../utils/spotifyApiUtils";
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
      <div className="card">
        <div className="card-body">
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Hello sunshine !! This app will help you to bring a playlist and
            create your own playlist with the tracks you love. Sign up to save
            your playlist, then upload your customised playlist to your Spotify
            account.
          </p>
          <div className="text-center">
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                redirectToSpotify(
                  localStorage.getItem("codeVerifier"),
                  localStorage.getItem("codeChallenge"),
                  "user-read-private playlist-read-private user-read-email"
                )
              }
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
