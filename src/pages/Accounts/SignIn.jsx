import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'
import './Signin.css'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../../contexts/AccountContext';


function SignIn() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [errorMessage, setMessage] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignIn, responseMessage } = useContext(AccountContext);

  const from = location.state?.from || "/";

  const onSubmit = async (data) => {
    var result = await handleSignIn(data)
    console.log("from:", from);         // Ska visa t.ex. "/bookevent/6/1"
    console.log("result:", result);  

      if (result) {
        navigate(from, { replace: true });
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