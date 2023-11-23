import React, { useEffect } from "react";
import { generateRandomString } from "../../utils/encodingUtils";
import { sha256 } from "../../utils/encodingUtils";
import { base64encode } from "../../utils/encodingUtils";
import { redirectToSpotify } from "../../utils/spotifyApiUtils";
import HeaderLogin from "../HeaderLogin";
//import bg from "../images/hero.jpg";
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
    <div className="mainLoginDiv">
            <div className="firstLoginDiv">
                  <HeaderLogin/>
                  <p id="textLogin">
                    Hello sunshine !! This app will help you to bring a playlist and create
                    your own playlist with the tracks you love. Sign up to save your
                    playlist, then upload your customised playlist to your Spotify account.
                  </p>
                  <div className="divLoginBtn">
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
                          Sign in
                        </button>
                      </div>
                  </div>
            </div>
            <div className="secondLoginDiv" >
                    <img src="https://static6.depositphotos.com/1036464/601/i/450/depositphotos_6011415-stock-photo-beautiful-girl-is-listen-to.jpg"/>
            </div>
        
    </div>
    // <div className="flex flex-col grow bg-yellow-100 justify-between m-8 text-justify font-sm md:font-semibold md:text-2xl lg:text-3xl text-gray-600">
    //    <HeaderLogin/>
    //   <p className="lg:mx-auto lg:w-3/5 mb-2 lg:mb-5">
    //     Hello sunshine !! This app will help you to bring a playlist and create
    //     your own playlist with the tracks you love. Sign up to save your
    //     playlist, then upload your customised playlist to your Spotify account.
    //   </p>
    //   <div>
    //     <img
    //       src="https://cdn.pixabay.com/photo/2016/04/05/06/28/clef-1308793_640.jpg"
    //       alt="Spotify logo"
    //       className="flex items-center h-64 sm:mx-7 sm:h-20 md:mx-auto md:h-full"
    //     />
    //   </div>

      // <div className="flex flex-col md:items-center">
      //   <button
      //     className="signInButton "
          
      //     onClick={() =>
      //       redirectToSpotify(
      //         localStorage.getItem("codeVerifier"),
      //         localStorage.getItem("codeChallenge"),
      //         "user-read-private playlist-read-private user-read-email"
      //       )
      //     }
      //   >
      //     Sign in
      //   </button>
      // </div>
    // </div>
  );
}

export default LoginScreen;
