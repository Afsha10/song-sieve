export const Auth={
    login:()=>{

    },
    logout:()=>{
          localStorage.removeItem("access_token")
    },
    isLoggedIn:()=>{
          const token = localStorage.getItem("access_token")
          return !!token//returning boolean
    },
    getToken:()=>{
     return localStorage.getItem("access_token")
    }
}

