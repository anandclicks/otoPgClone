import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context provider/UserContext'
import GetCallForm from './GetCallForm'

const Navbar = () => {
  const [menuStatus, setmenuStatus] = useState(false)
  const navController = ()=> {
    setmenuStatus(prev => !prev)
  }
  // get a call function getting 
  const {handleGetAcALLState} = useContext(UserContext)

  return (
    <>
    <div className={`mobileMenu ${menuStatus ? 'navVisible' : 'notVisible'}`}>
    <h2><span className="highlight">Follow</span> us on</h2>
   <div className="icons">
     <a className="text-decoration-none text-white" href="https://www.facebook.com/OTOstays"><i className="fa-brands fa-facebook"></i></a>
     <a className="text-decoration-none text-white" href="https://www.instagram.com/otostays6"><i className="fa-brands fa-square-instagram"></i></a>
     <a className="text-decoration-none text-white" href="https://x.com/OtoStays"><i className="fa-brands fa-twitter"></i></a>
     <a className="text-decoration-none text-white" href="https://www.linkedin.com/company/otostays/"><i className="fa-brands fa-linkedin"></i></a>
 </div>
 <div className="btns">
   <a href="/noida" className="bgPrimery">See All PG's <i className="text-white ri-arrow-right-up-line"></i></a>
   <button onClick={handleGetAcALLState} className="addProperty">Get A call <i className="text-white ri-add-circle-fill"></i></button>
 </div>
</div>
    <div className='Navbar'>
      {/* logo  */}
      <div className="Navlogo">
      <i onClick={navController} className="ri-menu-4-line menuBtn"></i>
        <img className='logoImg' src="\logo\OtoStaysDarkLogo.png" alt="" />
        <i className="ri-user-line userIcon"></i>
      </div>
      {/* links  */}
      <div className="navLinks">
        <Link to={'/noida'}>Explore pg</Link>
        <Link>Your property</Link>
        <a href='tel:+917415051778'><i className="ri-phone-fill"></i> +91 7415051778</a>
        <a href='mailto: info@otostays.com'><i className="ri-mail-line"></i> info@otostays.com</a>
        <li onClick={handleGetAcALLState} className=' singinOfHomeNav'>Get a Call</li>
      </div>
    </div>
    </>
  )
}

export default Navbar
