import { Link, useNavigate } from 'react-router-dom'
import './EventPackage.css'

function EventPackage({ p, eventId }) {
  

  return (
    
    <div className="event-package-card">
      <div>
        <p className='package-title'>{p.title}</p>
        <div className='flex-group'>
            <div className="position">
              <img src="/images/CheckCircle.svg" alt="" />
              <p>{p.position}</p>             
            </div>
            <div className="position">
              <img src="/images/CheckCircle.svg" alt="" />
              <p>{p.placement}</p>             
            </div>            
        </div>
      </div>
      <div className="package-price">
        <p>${p.price}</p>
      </div>
      <Link to={`/bookevent/${eventId}/${p.id}`} className="btn btn-primary">Buy</Link>
    </div>
  )
}
export default EventPackage