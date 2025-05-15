import './Events.css'
import EventCard from './EventCard'

function Events() {
  return (
    <div className="event-wrapper">
      <div className='events-container'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}
export default Events