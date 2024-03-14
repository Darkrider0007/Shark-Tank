import React from "react";
import { useDispatch } from "react-redux";
import authService from "@/app/appwrite/auth";
import { authlogout } from "@/app/GlobalRedux/Features/authSlice";

function Logout() {
  const dispatch = useDispatch();
  const setLogout = () => {
    authService.logout().then(() => {
      dispatch(authlogout());
    });
  };
  return (
    <button
      onClick={() => setLogout()}
      className="text-red-600 overflow-hidden uppercase"
    >
      Logout
    </button>
  );
}

export default Logout;