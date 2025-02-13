import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProfileDropdown = () => {
  const { user, logout } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>Profile</button>
      {open && (
        <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2">
          <li><a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a></li>
          <li><a href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</a></li>
          {user ? (
            <li>
              <button onClick={logout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <a href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</a>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
