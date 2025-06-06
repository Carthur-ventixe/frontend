import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Nav.css'
import { useContext } from 'react';
import { AccountContext } from '../../contexts/AccountContext';

function Nav() {
  const { handleSignOut } = useContext(AccountContext);
  const navigate = useNavigate();

  const signOut = async () => {
    await handleSignOut();

    navigate("/")
  }

  return (
    <nav className='nav-wrapper'>
      <div className='nav-container'>
        <div className='nav-header'>
          <img src="/images/VentixeLogo.svg" alt="" />
          <h4 className='nav-title'>Ventixe</h4>
        </div>

        <div className='nav-links'>
          <NavLink to={"/"} className='nav-link'>
            <div className='img-container'>
              <img src="/images/EventsIcon.svg" />
            </div>
              <span className='link-title'>Events</span>
          </NavLink> 

          <NavLink to={"bookings"} className='nav-link'>
            <div className='img-container'>
              <img src="/images/BookingsIcon.svg" />
            </div>
            <span className='link-title'>Bookings</span>
          </NavLink>
        </div>

        <div className='signout-container'>            
          <button onClick={signOut} className="btn btn-signout">
            <img src="/images/Signout.svg" alt="" />
            Sign Out
          </button>
        </div>

      </div>
    </nav>
  )
}
export default Nav