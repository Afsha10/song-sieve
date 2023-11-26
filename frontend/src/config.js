const prod = {
  redirectUri: "https://song-sieve-frontend.onrender.com/app",
};
const dev = {
  redirectUri: "http://localhost:3000/app",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;

