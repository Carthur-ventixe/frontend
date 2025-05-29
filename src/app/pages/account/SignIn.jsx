import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Signin.css'


function SignIn() {
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
          <input type="text"/>
          <span className='error-message'></span>
        </div>
        <button className='btn btn-primary'>Sign In</button>
      </form>
      <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
    </div>
  )
}
export default SignIn