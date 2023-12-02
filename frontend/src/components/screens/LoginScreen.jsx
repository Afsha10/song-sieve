import React, { useEffect } from "react";
import { generateRandomString } from "../../utils/encodingUtils";
import { sha256 } from "../../utils/encodingUtils";
import { base64encode } from "../../utils/encodingUtils";
import { redirectToSpotify } from "../../utils/spotifyApiUtils";
import HeaderLogin from "../HeaderLogin";
import { redirectUri } from "../../config";
//import bg from "../images/hero.jpg";

function LoginScreen() {
  console.log("redirectUri", redirectUri);
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
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/blogs/30322/2009/07/31495-12668.jpg?itok=31b-A7bj"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
