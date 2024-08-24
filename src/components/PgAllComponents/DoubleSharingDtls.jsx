import React from 'react'

const DoubleSharingDtls = (prop) => {
  return (
    <div>
       <div className="roomSharigDetails">
            <div className="roomQuilty">
              <input type="checkbox" /> Room Type 2
            </div>
            {/* .rent  */}
            <h3 className='rent'>
              {prop.doubleSharingPrice ? `₹${prop.doubleSharingPrice}/month` : 'Not Avalable'}
              </h3>
          </div>
    </div>
  )
}

export default DoubleSharingDtls
