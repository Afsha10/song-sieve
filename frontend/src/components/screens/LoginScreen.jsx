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
    <div className="grow bg-red-200">
      <div className="m-8 text-justify font-sm md:font-semibold md:text-2xl lg:text-4xl text-gray-600">
        <p className="m-4">
          Hello sunshine !! This app will help you to bring a playlist and
          create your own playlist with the tracks you love. Sign up to save
          your playlist, then upload your customised playlist to your Spotify
          account.
        </p>
        <div>
          <img
            src={bg}
            alt="Spotify logo"
            className="flex items-center h-64 sm:mx-7 sm:h-20 md:mx-auto md:my-8 md:h-80 lg:h-96 lg:h-24"
          />
        </div>

        <div className="flex flex-col">
          <button
            className=" bg-white text-blue-500 font-extrabold py-1 px-4 rounded-full mt-3 md:mt-20 border"
            type="button"
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


