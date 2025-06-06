import React, { createContext, useState } from "react";

export const AccountContext = createContext();

const AccountProvider = ({children}) => {
    const apiUrl = 'https://ca-accountservice-gcdrf8erbwg2fecj.swedencentral-01.azurewebsites.net';
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem("accessToken"));

    const handleSignUp = async (data) => {

      const res = await fetch(apiUrl + '/api/accounts/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (res.ok) {
            return true
        }
        else {
            return false
        }
    }

    const handleSignIn = async (data) => {

        const res = await fetch(apiUrl + '/api/accounts/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (res.ok) {
            const data = await res.json();

            localStorage.setItem("accessToken", data.accessToken)
            setAccessToken(data.accessToken)

            return { success: true };
        }
        else {
            return { success: false, message: data.message || "Invalid email or password." };
        }        
    }

    const handleSignOut = async () => {
        const res = await fetch(apiUrl + '/api/accounts/signout', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })

        localStorage.removeItem("accessToken");
        setAccessToken(null);
    }

    const validateToken = async () => {
        const token = localStorage.getItem("accessToken");

        const res = await fetch(apiUrl + '/api/accounts/validate', {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        if (res.ok){
            return true;
        }
        else {
            return false;
        }
    }

    return (
    <AccountContext.Provider value={{ handleSignUp, handleSignIn, validateToken, handleSignOut }}>
        {children}
    </AccountContext.Provider>
    )
}

export default AccountProvider