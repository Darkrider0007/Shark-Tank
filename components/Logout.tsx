import React from 'react'
import authService from "../app/appwrite/auth";
import { logout as authLogout } from "../app/GlobalRedux/Features/authSlice"
import { useDispatch } from 'react-redux';

function Logout() {
    const dispatch = useDispatch();
    const setLogout = () => {
        authService.logout().
            then(() => {
                dispatch(authLogout())
            });
    }
    return (
        <button
            onClick={() => setLogout()}
            className="hover:underline"
        >
            Logout
        </button>
    )
}

export default Logout