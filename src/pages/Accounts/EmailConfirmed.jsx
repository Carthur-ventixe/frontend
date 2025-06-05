import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import './EmailConfirmed.css';

function EmailConfirmed() {

    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        confirm()
    },[email, token])

    const confirm = async () => {
       
        const res = await fetch('https://ca-accountservice-gcdrf8erbwg2fecj.swedencentral-01.azurewebsites.net/api/accounts/confirm', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, token })
        })
        console.log(res)
        if (res.ok) {
        setSubmitted(true);
        }
    }
        
    if (submitted) {
        return (
         <div className="verification">
            <h1>Email confirmed!</h1>
            <p>You can now sign in to your account.</p>
            <Link to={"/signin"} className="btn btn-primary">Sign In</Link>
          </div>
        )
    }
    else {
        return (
         <div className="verification">
            <h1>Email not confirmed!</h1>
          </div>
        )
    }
}
export default EmailConfirmed