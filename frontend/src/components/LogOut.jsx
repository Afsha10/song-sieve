import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");

    window.location.href = "/login";
  };

  return (
    <button className="sign_out" onClick={handleLogout}>
      Sign Out
    </button>
  );
};

export default LogoutButton;
