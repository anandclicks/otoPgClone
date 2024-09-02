import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context provider/UserContext'



const HeaderTwo = (prop) => {
  const {handleGetAcALLState} = useContext(UserContext)
  return (
    <div className='headerTwo'>
      <Link to={'/'} className="headerTwoLogo">
        <img src="https://anandclicsk.netlify.app/logo/OtoStaysDarkLogo.png" alt="" />
      </Link>
      {/* hedaer two middel searchbox */}
      <div className='optionsAndSearchWrapper forLargeScreen'>
      <select className="CityListBtn">
        <option>{prop.activeLink}</option>
        <option><Link to={'/delhi'}>Delhi</Link></option>
        <option><Link to={'/gurugram'}>Gururgram</Link></option>
        <option><Link to={'greater-Noida'}>Greater Noida</Link></option>
        <option><Link to={'/ghaziabad'}>Ghaziabad</Link></option>
      </select>
      {/* this is for fc  */}
      <div className="searchbox forLargeScreen">
      <i className="fa-solid fa-magnifying-glass"></i> Search..
      </div>
      {/* this is forMobile  */}
      {/* this is signup btn  */}
      </div>
      <div className="searachBoxOnMobile">
      <div>
      <i className="fa-solid fa-location-dot findPgIcon"></i>Find your <span>PG</span>
      </div>
      <i className="fa-solid fa-magnifying-glass searchIconONmonile"></i>
      </div>
       {/* this is for fc  */}
     <div onClick={handleGetAcALLState} className="signInBtn"> 
      Get a Call
     </div>
     <div className="signUpIonOnMobile">
     {/* <i className="fa-solid fa-right-to-bracket"></i> */}
     <img className='headerTwoLoginIcon' src="/logo\login-screen.svg" alt="" />
     </div>

    </div>
  )
}

export default HeaderTwo
