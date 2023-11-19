import React from 'react'
import authService from "../app/appwrite/auth";
import { authlogout } from "../app/GlobalRedux/Features/authSlice"
import { useDispatch } from 'react-redux';

function Logout() {
    const dispatch = useDispatch();
    const setLogout = () => {
        authService.logout().
            then(() => {
                dispatch(authlogout())
            });
    }
    return (
        <button
            onClick={() => setLogout()}
            className="hover:underline text-red-600"
        >
            Logout
        </button>
    )
}

export default Logout