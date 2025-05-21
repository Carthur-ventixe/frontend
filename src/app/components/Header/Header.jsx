import './Header.css'
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom"

function Header() {
  const location = useLocation();
  const {id} = useParams();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Events';
      case `/events/${id}`:
        return 'Event Details';
      case '/bookings':
        return 'Bookings';
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

      </div>
    </header>
  )
}
export default Header