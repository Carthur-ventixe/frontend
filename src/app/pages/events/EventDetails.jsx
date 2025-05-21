import { useParams } from "react-router-dom"
import './EventDetails.css'
import EventPackage from "./EventPackage";

function EventDetails() {
    const {id} = useParams();

  return ( 
    <div className="event-wrapper">
      <div className="event-container">
        <div className="img-container">
          <img src="" alt="" />
        </div>

        <div className="event-info-wrapper">
          <div className="info-container">
            <h4 className="event-title">Echo Beats Festival</h4>
            <div className="date">
              <img src="/images/Calendar.svg" alt="" />
              <p>May 20, 2029 - 6:00 PM</p>
            </div>
            <div className="location">
              <img src="/images/MapPin.svg" alt="" />
              <p>Sunset Park, Los Angeles, CA</p>
            </div>       
          </div>
          <div className="price-info">
            <p className="text">Starts from</p>
            <p className="price">$60</p>
          </div>
        </div>     
        <div className="divider"></div>

        <div className="about-container">
          <p className="about-title">About Event</p>
          <p className="about">The Echo Beats Festival brings together a stellar lineup of artists across EDM, pop, and hip-hop genres. Prepare to experience a night of electrifying music, vibrant light shows, and unforgettable performances under the stars. Explore food trucks, art installations, and VIP lounges for an elevated experience.</p>
        </div>
      </div>
      <div className="package-container">
        <p className="headline">Packages</p>
        <EventPackage />
        <EventPackage />
        <EventPackage />
      </div>
    </div>
    
  )
}
export default EventDetails