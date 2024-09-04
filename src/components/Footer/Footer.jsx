import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context provider/UserContext';

const Footer = () => {
  const { handleGetAcALLState } = useContext(UserContext);
  return (
    <div className='footer'>
      <div className="firstPart footerParts">
        <div className="footerLogo">
          <img src="/logo/OtoStaysDarkLogo.png" alt="" />
          <p className='footerDips'>You know, when we go out of our home to the city in search of studies and jobs, we get everything very easily but we do not get a happy home.Follow us at</p>
          <div className="footericons">
          <i className="ri-instagram-line"></i>
          <i className="ri-facebook-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-linkedin-line"></i>
          </div>
        </div>
      </div>
      <div className="secondPart footerParts">
        <div className="footerLinkTitleAndLink">
          <h3>Useful links</h3>
          <ul>
            <Link to={'/'}><i className="ri-arrow-right-line"></i> Home</Link>
            <Link to={'/noida'}><i className="ri-arrow-right-line"></i> Go to Noida's PG</Link>
            <Link to={'/noida'}><i className="ri-arrow-right-line"></i> All PG for you</Link>
            <Link onClick={handleGetAcALLState}><i className="ri-arrow-right-line"></i> Book pg</Link>
          </ul>
        </div>
      </div>
      <div className="thirdPart footerParts">
      <div className="footerLinkTitleAndLink">
          <h3>Explore PG</h3>
          <ul>
            <Link to={'/noida'}><i className="ri-arrow-right-line"></i> PG in Noida</Link>
            <Link to={'/delhi'}><i className="ri-arrow-right-line"></i> PG in Delhi</Link>
            <Link to={'/gurugram'}><i className="ri-arrow-right-line"></i> PG in Gurugram</Link>
            <Link to={'/greater-noida'}><i className="ri-arrow-right-line"></i> PG in Greater Noida</Link>
            <Link to={'/ghaziabad'}><i className="ri-arrow-right-line"></i> PG in Ghaziabad</Link>
          </ul>
        </div>
      </div>
      <div className="forthPart footerParts">
      <div className="footerLinkTitleAndLink">
          <h3>Contact Information</h3>
          <div className='footerLastBox'>
          <i className="ri-focus-3-line"></i>
          <div className='footerLastScTitle'>
            <h4>Address</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          </div>
          <div className='footerLastBox'>
          <i className="fa-solid fa-phone"></i>
          <div className='footerLastScTitle'>
            <h4>Phone Number</h4>
            <p>+91 7415051778</p>
          </div>
          </div>
          <div className='footerLastBox'>
          <i className="ri-mail-line"></i>
          <div className='footerLastScTitle'>
            <h4>Email Address</h4>
            <p>info@otostays.com</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
