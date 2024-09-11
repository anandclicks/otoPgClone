import React, { useContext } from 'react'
import { UserContext } from '../../Context provider/UserContext'

const SpcialOfferBtnForMobile = () => {
  const {handleSpacialOfferPopup,handleGetAcALLState} =useContext(UserContext)
  return (
    <div onClick={handleGetAcALLState} className='spacilaOFferbtnforMobile '>
     {/* <i class="fa-solid fa-gift"></i>  */}
     <i class="ri-customer-service-line"></i>
    </div>
  )
}

export default SpcialOfferBtnForMobile
