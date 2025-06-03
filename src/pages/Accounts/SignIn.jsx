import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './SignIn.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignIn() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [errorMessage, setMessage] = useState();
  const navigate = useNavigate();

  const onSubmit = async (data) => {

      const res = await fetch('https://localhost:7166/api/accounts/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const responseMessage = await res.text();

        if (res.ok) {
            navigate("/");

        }
        else {
          setMessage(responseMessage);
        }
        
    }

  return (
    <div className='signin-form'>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" {...register('email', { required: 'Email is required'})} />
          <span className='error-message'>{errors.email && errors.email.message}</span>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type="password" {...register('password',{ required: 'Please enter a valid password'})}/>
          <span className='error-message'>{errorMessage}{errors.password && errors.password.message}</span>
        </div>
        <button type='submit' className='btn btn-primary'>Sign In</button>
      </form>
      <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
    </div>
  )
}
export default SignIn