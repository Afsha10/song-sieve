import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");

    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout}>
      <img
        className="log_out"
        src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/power-off-icon.svg"
        alt="logout Logo"
      />
    </button>
  );
};

export default LogoutButton;
