import './Header.css'
import { Link, useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom"

function Header() {
  const location = useLocation();
  const {id, eventId, packageId} = useParams();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Events';
      case `/events/${id}`:
        return 'Event Details';
      case '/bookings':
        return 'Bookings';
      case `/bookevent/${eventId}/${packageId}`:
        return 'Book Event';
      default:
        return 'Ventixe';
    }
  };

  return (
    <header className='header-wrapper' >

      <div className="header-container">
          <div className='headline'>
            <h4>{getPageTitle()}</h4>
          </div>
          <Link to={"signin"} className='sign-in'>
              <div className='signIn-circle'>
                <img src="/images/SignIn.svg" alt="" />
              </div>
          </Link>
      </div>
    </header>
  )
}
export default Header