import { Auth } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

export const CheckAuthentication = ({ children }) => {
  console.log("hello");
  const navigate = useNavigate();

  if (!Auth.isLoggedIn()) {
    console.log("notLoggedIn");
    navigate("/");
  }

  return children;
};
