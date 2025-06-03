import { useParams } from "react-router-dom"
import './EventDetails.css'
import EventPackage from "./EventPackage";
import { useContext, useEffect } from "react";
import { EventContext } from '../../contexts/EventContext';

function EventDetails() {
    const {id} = useParams();
    const { event, getEvent } = useContext(EventContext);

    useEffect(() => {
      getEvent(id);
    },[id])

  return ( 
    <div className="event-wrapper">
      <div className="event-container">
        <div className="img-container">
          <img src={event.image} alt="" />
        </div>

        <div className="event-info-wrapper">
          <div className="info-container">
            <h4 className="event-title">{event.title}</h4>
            <div className="date">
              <img src="/images/Calendar.svg" alt="" />
              <p>{event.eventDate}</p>
            </div>
            <div className="location">
              <img src="/images/MapPin.svg" alt="" />
              <p>{event.location}</p>
            </div>
          </div>
          <div className="price-info">
            <p className="text">Starts from</p>
            <p className="price">${event.startPrice}</p>
          </div>
        </div>     
        <div className="divider"></div>

        <div className="about-container">
          <p className="about-title">About Event</p>
          <p className="about">{event.description}</p>
        </div>
      </div>
      <div className="package-container">
        <p className="headline">Packages</p>
        {
          event?.packages?.map(p => (<EventPackage key={p.id} p={p} eventId={id}/>))
        }
      </div>
    </div>
  )
}
export default EventDetails