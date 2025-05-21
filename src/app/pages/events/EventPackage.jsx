import './EventPackage.css'

function EventPackage() {
  return (
    
    <div className="event-package-card">
      <div>
        <p className='package-title'>General Admission Package</p>
        <div className='flex-group'>
            <div className="position">
              <img src="/images/CheckCircle.svg" alt="" />
              <p>Seating</p>             
            </div>
            <div className="position">
              <img src="/images/CheckCircle.svg" alt="" />
              <p>Near Stage</p>             
            </div>            
        </div>
      </div>
      <div className="package-price">
        <p>$50</p>
      </div>
      <button className='buy-ticket'>Buy</button>
    </div>
  )
}
export default EventPackage