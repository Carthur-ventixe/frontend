import './EventCard.css'

function EventCard() {
  return (
    <div className='event-card'>
          <div className='img-container'>
            <img src="" alt="" />
          </div>
          <div className='event-info'>
            <p className='date'>June 5, 2029 - 3:00 PM</p>
            <p className='title'>Adventure Gear Show</p>
            <div className='location'>
              <img src="/images/MapPin.svg" alt="" />
              <p>Rocky Ridge Exhibition Hall, Denver, CO</p>
            </div>
            <p className='price'>$40</p>
          </div>
    </div>
  )
}
export default EventCard