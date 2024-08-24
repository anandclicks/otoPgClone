import React from 'react'

const SingleSharingRentDtls = (prop) => {
  return (
    <>
     <div className="roomSharigDetails">
            <div className="roomQuilty">
              <input type="checkbox" /> Room Type 1
            </div>
            {/* .rent  */}
            <h3 className='rent'>
              {prop.singleSharingPrice ? `₹${prop.singleSharingPrice}/month` : 'Not Avalable'}
              </h3>
          </div>
    </>
  ) 
}

export default SingleSharingRentDtls
