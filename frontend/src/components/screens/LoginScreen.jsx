import React, { useEffect } from "react";
import { generateRandomString } from "../../utils/encodingUtils";
import { sha256 } from "../../utils/encodingUtils";
import { base64encode } from "../../utils/encodingUtils";
import { redirectToSpotify } from "../../utils/spotifyApiUtils";
import HeaderLogin from "../HeaderLogin";

//import bg from "../images/hero.jpg";

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
