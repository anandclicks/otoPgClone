import React, { useState } from 'react'

const Navbar = () => {
  const [menuStatus, setmenuStatus] = useState(false)
  const navController = ()=> {
    setmenuStatus(prev => !prev)
  }

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
   <button className="addProperty">List property <i className="text-white ri-add-circle-fill"></i></button>
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
        <li>Explore pg</li>
        <li>Your property</li>
        <li><i className="ri-phone-fill"></i> +91 7415051778</li>
        <li><i className="ri-mail-line"></i> info@otostays.com</li>
        <li className=' singinOfHomeNav'>Get a Call</li>
      </div>
    </div>
    </>
  )
}

export default Navbar
