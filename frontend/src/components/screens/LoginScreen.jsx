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
    <div className="homepage">
      <div class="block rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <p class="mb-4 text-base to-blacktext-neutral-600 dark:text-neutral-200">
          Hello sunshine !! This app will help you to bring a playlist and
          create your own playlist with the tracks you love. Sign up to save
          your playlist, then upload your customised playlist to your Spotify
          account.
        </p>
        <div class="h-screen flex items-center justify-center">
          <button
            type="button"
            class="inline-block rounded border-3 border-primary px-56 pb-[10px] pt-2 text-m font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-800 focus:border-primary-600 focus:text-primary-800 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
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
  );
}

export default LoginScreen;
