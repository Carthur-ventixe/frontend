import React, { createContext, useState } from "react";

export const AccountContext = createContext();

const AccountProvider = ({children}) => {
    const apiUrl = 'https://localhost:7166/api/';

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
    return (
    <AccountContext.Provider value={{ handleSignUp }}>
        {children}
    </AccountContext.Provider>
    )
}

export default AccountProvider