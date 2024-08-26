import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'

import Prasence from './Prasence'
import HeroOne from './HeroOne'
import ShowCase from './ShowCase'
import Memory from './Memory'
import Feedback from './Feedback'
import SemiFooter from './SemiFooter'
import { UserContext } from '../../Context provider/UserContext'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [headerTwoStatus, setheaderTwoStatus] = useState(false)
  window.addEventListener("scroll",()=> {
    if(window.screenTop > 500) {
      setheaderTwoStatus(true)
    }
    else {
      setheaderTwoStatus(false)
    }
  })
  // form status getting 
  const {fromStatus, findPgFormHandler} = useContext(UserContext)
  
  return (
    <>
    <div className={`pgFinderForm ${fromStatus? 'pgFinderFormVisible' : 'pgFinderFormInvisble'}`}>
    <i onClick={findPgFormHandler} className="fa-solid fa-xmark pgFindFormClose"></i>
   {/* title  */}
   <h2 className='findpgformTitle'>Find your Oto, your way in <span>Locality</span></h2>
   {/* coliving btn  */}
   <div className="colivingBTn">
   <i className="fa-solid fa-check coliving"></i>Coliving
   </div>
   {/* .input box started  locaton */}
   <div className="inputBox">
    <h4 className='inputTitle'>Where would you like to stay?</h4>
    <input type="text" />
   </div>
   {/* all locations  */}
   <div className="allLocations">
    <div className="lbtn">Sector44</div>
    <div className="lbtn">Sector45</div>
    <div className="lbtn">Sector104</div>
    <div className="lbtn">Ghaziabad</div>
    <div className="lbtn">Noida</div>
    <div className="lbtn">Gurugram</div>
    <div className="lbtn">Greater Noida</div>
    <div className="lbtn">Delhi</div>
   </div>
   {/* 2nd input  */}
   <div className="inputBox">
    <h4 className='inputTitle'>Looking for a specific property?</h4>
    <input type="text" />
   </div>
   {/* 3rd input  */}
   <div className="inputBox">
    <h4 className='inputTitle'>Please share details below for us to help you better.</h4>
    <input type="text" />
    <input type="text" />
   </div>
   {/* submit btn  */}
   <div className="pgFindSubmitBtn">
    Submit
   </div>
   </div>
    <div className='container MainHome'>
      <Navbar/>
      {/* left and rihgt side  */}
      <div className="home">
        {/* left side  */}
        <div className="homeleft">
          <div className="box">
            <h1 className='homeTitle'>Welocme to your <span>second Home</span></h1>
            <p className='homeDips'><img src="/svgs\flexible.svg" alt="" />bed Choose a shared space or pick a private room</p>
            <div onClick={findPgFormHandler} className="searchBox">
              <p className='placeholder'>Find a OTO stay near your place of Work/Study</p>
             <div className="searchIconAndBtn">
             <i className="ri-search-line searchIconOfPlaceholderBox"></i>
             <div className="btn"><i className="ri-focus-3-line"></i><div className="span">Near Me</div></div>
             </div>
            </div>
          </div>
        </div>
        {/* rihgt side  */}
        <div className="homeright">
          <img src="\Herosectiononeimages\HomeSectionImg.png" alt="" />
        </div>
      </div>
      <Prasence/>
      <HeroOne/>
      <ShowCase/>
      <Memory/>
      <Feedback/>
      <SemiFooter/>
    </div>
    </>
  )
}

export default Home
