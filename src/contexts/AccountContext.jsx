import React, { createContext, useState } from "react";

export const AccountContext = createContext();

const AccountProvider = ({children}) => {
    const apiUrl = 'https://localhost:7166/api/';
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem("accessToken"));
    const [responseMessage, setResponseMessage] = useState();

    const handleSignUp = async (data) => {

      const res = await fetch(apiUrl + 'accounts/register', {
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

        const res = await fetch(apiUrl + 'accounts/signin', {
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

            return true;
        }
        else {
            setResponseMessage(res.text())
            return false;
        }        
    }

    const handleSignOut = async () => {
        const res = await fetch(apiUrl + 'accounts/signout', {
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
        console.log("AccessToken in validateToken:", token);

        const res = await fetch(apiUrl + 'accounts/validate', {
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
    <AccountContext.Provider value={{ handleSignUp, handleSignIn, responseMessage, validateToken, handleSignOut }}>
        {children}
    </AccountContext.Provider>
    )
}

export default AccountProvider