import React, { useContext } from 'react'
import { UserContext } from '../../Context provider/UserContext'

const SpcialOfferBtnForMobile = () => {
  const {handleSpacialOfferPopup} =useContext(UserContext)
  return (
    <div onClick={handleSpacialOfferPopup} className='spacilaOFferbtnforMobile '>
     <i class="fa-solid fa-gift"></i> 
    </div>
  )
}

export default SpcialOfferBtnForMobile
