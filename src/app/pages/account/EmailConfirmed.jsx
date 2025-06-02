import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';

function EmailConfirmed() {

    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        confirm()
    },[email, token])

    const confirm = async () => {
       
        const res = await fetch('https://localhost:7166/api/accounts/confirm', {
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
        
    if (!submitted) {
        return (
        <div>Email Not Confirmed</div>
        )
    }

    return (
        <div>Email Confirmed</div>
        )
  
}
export default EmailConfirmed