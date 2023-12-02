

export const decideRedirectUrl = () => {
    if(process.env.NODE_ENV==="production"){
        return "https://song-sieve-frontend.onrender.com/app"

    }
    return "http://localhost:3000/app"
}
