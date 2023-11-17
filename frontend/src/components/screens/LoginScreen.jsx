import React, { useEffect } from "react";
import { generateRandomString } from "../../utils/encodingUtils";
import { sha256 } from "../../utils/encodingUtils";
import { base64encode } from "../../utils/encodingUtils";
import { redirectToSpotify } from "../../utils/spotifyApiUtils";
import bg from "../images/hero.jpg";
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
    <div className="flex flex-col grow bg-yellow-100 justify-between m-8 text-justify font-sm md:font-semibold md:text-2xl lg:text-3xl text-gray-600">
      <p className="lg:mx-auto lg:w-3/5 mb-2 lg:mb-5">
        Hello sunshine !! This app will help you to bring a playlist and create
        your own playlist with the tracks you love. Sign up to save your
        playlist, then upload your customised playlist to your Spotify account.
      </p>
      <div>
        <img
          src={bg}
          alt="Spotify logo"
          className="flex items-center h-64 sm:mx-7 sm:h-20 md:mx-auto md:h-full"
        />
      </div>

      <div className="flex flex-col md:items-center">
        <button
          className=" bg-white text-blue-500 transition-colors duration-200 hover:bg-blue-100 active:bg-yellow-500 font-extrabold py-1 px-5 md:py-3 md:px-20 lg:py-5 lg:px-36 rounded-full mt-3 border-2 lg:border-4 border-blue-500"
          type="button"
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
  );
}

export default LoginScreen;
