import './Signin.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function SignUp() {
  return (

    <div className='signin-form'>
      <h3>Sign In</h3>
      <form>
        <div className='form-group'>
          <label>Email</label>
          <input type="text" />
          <span className='error-message'></span>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type="text" />
          <span className='error-message'></span>
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input type="text" />
          <span className='error-message'></span>
        </div>
        <button className='btn btn-primary'>Sign Up</button>
      </form>
      <p>Already have an account? <Link to={"/signin"}>Sign In</Link></p>
    </div>

  )
}
export default SignUp