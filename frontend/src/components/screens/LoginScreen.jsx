import React, { useEffect } from "react";
import { generateRandomString } from "../../utils/encodingUtils";
import { sha256 } from "../../utils/encodingUtils";
import { base64encode } from "../../utils/encodingUtils";
import { redirectToSpotify } from "../../utils/spotifyApiUtils";
import HeaderLogin from "../HeaderLogin";

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
    <div className="grow">
      <HeaderLogin />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="mainLoginDiv">
          <div className="firstLoginDiv">
            <p id="textLogin">
              Hello sunshine !! This app will help you to bring a playlist and
              create your own playlist with the tracks you love. Sign up to save
              your playlist, then upload your customised playlist to your
              Spotify account.
            </p>

            {/* testers login info */}
            <div
              class="bg-blue-950 border-t-4 border-green-500 rounded-b text-teal-900 px-4 py-3 shadow-md m-2 sm:mx-24 sm:my-3 lg:mx-22 lg:my-10 "
              role="alert"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    class="fill-current h-6 w-6 text-green-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm">
                    If you want to test our service using a Spotify account,
                    please use the following credentials:
                    <ul>
                      <li>
                        Email: <code>cyfqueens@gmail.com</code>
                      </li>
                      <li>
                        Password: <code>CodeYourDreams</code>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="divLoginBtn">
              <div>
                <button
                  onClick={() => {
                    // taking the current page URL and adding app route to it
                    const newRedirectUri = window.location.href + "app";
                    redirectToSpotify(
                      localStorage.getItem("codeVerifier"),
                      localStorage.getItem("codeChallenge"),
                      "user-read-private playlist-read-private user-read-email",
                      newRedirectUri
                    );
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
          <div className="secondLoginDiv">
            <img
              src="https://e0.pxfuel.com/wallpapers/373/433/desktop-wallpaper-light-headphones-music-headphones-girl-lines-dj-girls-colors.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
