import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");

    window.location.href = "/login";
  };

  return (
    <button
      class="bg-blue-500 hover:bg-gray-400 text-white text-xs font-bold px-1"
      onClick={handleLogout}
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
