import './Header.css'
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Events';
      case '/bookings':
        return 'Bookings';
      case '/kontakt':
        return 'Kontakt';
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