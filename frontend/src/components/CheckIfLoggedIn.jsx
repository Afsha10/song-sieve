  
import { useEffect, useState } from "react";
import { Auth } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

export const CheckIfLoggedIn = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if (Auth.isLoggedIn()) {
      navigate("/app");
    }
    setLoading(false)
  }, [navigate]);

  if(loading) return <p className="text-white">Loading...</p>

  return children;
};
