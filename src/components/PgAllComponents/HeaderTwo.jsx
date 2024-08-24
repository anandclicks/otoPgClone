import React from 'react'

const HeaderTwo = () => {
  return (
    <div className='headerTwo'>
      <div className="headerTwoLogo">
        <img src="https://anandclicsk.netlify.app/logo/OtoStaysDarkLogo.png" alt="" />
      </div>
      {/* hedaer two middel searchbox */}
      <div className='optionsAndSearchWrapper forLargeScreen'>
      <select className="CityListBtn">
        <option>Delhi</option>
        <option>Nodia</option>
        <option>Gururgram</option>
        <option>Greater Noida</option>
        <option>Ghaziabad</option>
      </select>
      {/* this is for fc  */}
      <div className="searchbox forLargeScreen">
      <i class="fa-solid fa-magnifying-glass"></i> Search..
      </div>
      {/* this is forMobile  */}
      {/* this is signup btn  */}
      </div>
      <div className="searachBoxOnMobile">
      <div>
      <i class="fa-solid fa-location-dot findPgIcon"></i>Find your <span>PG</span>
      </div>
      <i class="fa-solid fa-magnifying-glass searchIconONmonile"></i>
      </div>
       {/* this is for fc  */}
     <div className="signInBtn"> 
      Sign in
     </div>
     <div className="signUpIonOnMobile">
     <i class="fa-solid fa-right-to-bracket"></i>
     </div>

    </div>
  )
}

export default HeaderTwo
