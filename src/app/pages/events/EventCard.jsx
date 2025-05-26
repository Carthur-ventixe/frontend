import './EventCard.css'
import { Link } from 'react-router-dom'

function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`}>
      <div className='event-card'>
          <div className='img-container'>
            <img src={event.image} alt="" />
          </div>
          <div className='event-info'>
            <p className='date'>{event.eventDate}</p>
            <p className='title'>{event.title}</p>
            <div className='location'>
              <img src="/images/MapPin.svg" alt="" />
              <p>{event.location}</p>
            </div>
            <p className='price'>${event.startPrice}</p>
          </div>
      </div>
    </Link>
    
  )
}
export default EventCard