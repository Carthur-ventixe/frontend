import './Events.css'
import EventCard from './EventCard'
import { useContext } from 'react'
import { EventContext } from '../../contexts/EventContext'

function Events() {

  const { events } = useContext(EventContext);

  return (
    <div className="events-wrapper">
      <div className='events-container'>
        {
          events.map(event => (<EventCard key={event.id} event={event}/>))
        }
      </div>
    </div>
  )
}
export default Events