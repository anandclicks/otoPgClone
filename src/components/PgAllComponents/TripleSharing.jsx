import React from 'react'

const TripleSharing = (prop) => {
  return (
    <div className="roomSharigDetails">
            <div className="roomQuilty">
              <input type="checkbox" /> Room Type 3
            </div>
            {/* .rent  */}
            <h3 className='rent'>
            {prop.tripleSharingPrice ? `₹${prop.tripleSharingPrice}/month` : 'Not Available'}
              </h3>
          </div>
  )
}

export default TripleSharing
