import { useContext, useState } from 'react'
import './Signin.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './SignUp.css'
import { AccountContext } from '../../contexts/AccountContext'


function SignUp() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    mode: 'onChange'
  });
  const { handleSignUp } = useContext(AccountContext);

  const password = watch("password");

  const onSubmit = async (data) => {
    const result = await handleSignUp(data);
    
    if (result) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      reset();
    }   
  }

  return (

    <div className='signin-form'>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" {...register('email', { required: 'Email is required', pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email"} })}/>
          <span className='error-message'>{errors.email && errors.email.message}</span>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type="password" {...register('password', { required: 'Password is required', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,message: 'Must be at least 8 chars, include a number, upper & lower case letter'}})} />
          <span className='error-message'>{errors.password && errors.password.message}</span>
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input type="password" {...register('confirmPassword', { required: 'Please confirm your password', validate: (value) => value === password || "Your password do not match" })} />
          <span className='error-message'>{errors.confirmPassword && errors.confirmPassword.message}</span>
        </div>
        <button type='submit' className='btn btn-primary'>Sign Up</button>
      </form>
      <p>Already have an account? <Link to={"/signin"}>Sign In</Link></p>
      <div className='success-message-container'>
        {submitted && (
        <div className="success-message">
          <span>Account created, please verify your emailaddress</span>        
        </div>
        )}
      </div>
      
    </div>

  )
}
export default SignUp