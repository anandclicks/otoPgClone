import React, { useEffect, useState } from 'react'
import SingleSharingRentDtls from './SingleSharingRentDtls'
import DoubleSharingDtls from './DoubleSharingDtls'


const PgOne = () => {
  // imges controller 
  const [imageNum, setimageNum] = useState(6)
  const prevImage = ()=> {
    if(imageNum > 1) {
      setimageNum(prev => prev - 1)
    }
  }
  const nextIamge = ()=> {
    if(imageNum < 10) {
      setimageNum(prev => prev +1)
    }
  }
  const [sharingStatus, setsharingStatus] = useState(true)
  const SinglSharing = ()=> {
    setsharingStatus(true)
  }
  const doubleSharing = ()=> {
    setsharingStatus(false)
  }

  // form postion manage 
  const [isFixed, setisFixed] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition <= 1830) {
        console.log(scrollPosition)
        setisFixed(true);
      } else {
        setisFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='pgMain'>
      <div className="btnsForMobile">
        <div className="Schedul">
          Schedule Visit
        </div>
        <div className="selectRoom">
          Select Room
        </div>
      </div>
      {/* pg left  */}
      <div className="left">
        {/* pgHeader  */}
        <div className="pgHeader">
          <div className='pgHeaderLeft'>
          <h1 className='PgName'>Oto Gem <i class="fa-regular fa-heart"></i></h1>
          <p className='pgLocation'>No.61/1, West jones Roads , West saidapet, Chennai-600015</p>
          </div>
          <div className="pgHeaderRight">
            <div className="locationBtn"><i class="fa-solid fa-location-dot"></i> View in map</div>
          </div>
        </div>
        {/* pg images  */}
        <div className="pgImageContainer">
          <img className='propertyImages' src={`/Allcitiesindividualpgs/otoomegatownshippicturevideo/${imageNum}.jpg`} alt="" />
          {/* image ctrl  */}
          <div className="imgCtrl">
          <i onClick={prevImage} class="fa-solid fa-angle-left prev"></i>
          <i onClick={nextIamge} class="fa-solid fa-chevron-right next"></i>
          </div>
          {/* pointer  */}
          <div className="imageCircle">
            <div className={`circle ${(imageNum == 1) ? 'active' : ''}`}></div>
            <div  className={`circle ${(imageNum == 2) ? 'active' : ''}`}></div>
            <div  className={`circle ${(imageNum == 3) ? 'active' : ''}`}></div>
            <div  className={`circle ${(imageNum == 4) ? 'active' : ''}`}></div>
            <div  className={`circle ${(imageNum == 5) ? 'active' : ''}`}></div>
            <div  className={`circle ${(imageNum == 6) ? 'active' : ''}`}></div>
            <div  className={`circle ${(imageNum == 7) ? 'active' : ''}`}></div>
            <div  className={`circle ${(imageNum == 8) ? 'active' : ''}`}></div>
            <div  className={`circle ${(imageNum == 9) ? 'active' : ''}`}></div>
          </div>
        </div>
        {/* quick links  */}
        <div>
          <p className='linksContainer'><p className='activeLink '>Home</p><i class="activeLink fa-solid fa-chevron-right"></i><p className='activeLink '>Noida</p><i class="activeLink fa-solid fa-chevron-right"></i><p>Oto Gem </p></p>
        </div>
        {/* about pg  */}
        <div className="aboutPg">
          <h2 className='aboutPgtTitle'>About the <span>Property</span></h2>
          <p className='AboutPgDips'>Oto Gem ,fully furnished rooms with benefits from its distinguished location as it offers good connectivity via bus and railway Station .Situated in a location which is conveniently close to hotels, markets and main IT parks additionally with specta</p>
        </div>
        {/* rooms dtls  */}
        <div className="roomDtls">
          <h2 className='roomDtlsTitle'>Room <span>Details</span></h2>
          <p className='roomDtlsDips'>All room type have some variants that are larger in size or have extra Amenities.</p>
          <div className='roomRent'>
            <div className="singleSharing">
              <h3 className='roomType'>Single Room</h3>
              <small className='startsFrom'>starting from</small>
              <p className='price'>₹18285/<small className='month'>month</small></p>
            </div>
            <div className="doubleSharing">
            <h3 className='roomType'>Single Room</h3>
              <small className='startsFrom'>starting from</small>
              <p className='price'>₹1113/<small className='month'>month</small></p>
            </div>
          </div>
        </div>
        {/* wallte  */}
        <div className='wallet'>
        <img src="https://visor.gumlet.io//public/assets/images/icons/wallet.svg?compress=true" alt="" />DEPOSIT IS THE SAME AS 1 MONTH RENT.
        </div>
        {/* food menu  */}
        <div className="foodMenu">
          <h2 className='foodMenuTitle'>Room <span>Details</span></h2>
          <p className='foodMenuSemiTile'>Food is not available in Oto Marydale</p>
          <p className='foodMenuDips'>This may be because of the varied reasons including supply issues <br /> or lower demand. However, rest assured, Oto Properties are located <br /> in areas which have plenty of options to order or Dine-In.</p>
          <p className='foodMenuDipsTwo'>In case food is eventually made available in the property, residents <br /> will be notified through the notice board.</p>
        </div>
        {/* amenties  */}
        <div className="Amenties">
          <h2 className='amentiesTitle'>Amazing <span>Amenties</span></h2>
          <div className="allAmenties">
            <div className="Facelity">
              <img className='AmentiImg' src="\Amenties Svg\parking_icon.svg" alt="" /> <p className='AmentiName'>Parking</p>
            </div>
            <div className="Facelity">
            <img className='AmentiImg' src="\Amenties Svg\tv_icon.svg" alt="" /> <p className='AmentiName'>TV</p>
            </div>
            <div className="Facelity">
            <img className='AmentiImg' src="\Amenties Svg\wifi_icon.svg" alt="" /> <p className='AmentiName'>Wifi</p>
            </div>
            <div className="Facelity">
            <img className='AmentiImg' src="\Amenties Svg\refrigerator_icon.svg" alt="" /> <p className='AmentiName'>Refrigerator</p>
            </div>
            <div className="Facelity">
            <img className='AmentiImg' src="\Amenties Svg\power backup_icon.svg" alt="" /> <p className='AmentiName'>Power Backup</p>
            </div>
            <div className="Facelity">
            <img className='AmentiImg' src="\Amenties Svg\almirah_icon.svg" alt="" /> <p className='AmentiName'>Almirah</p>
            </div>
            <div className="Facelity">
            <img className='AmentiImg' src="\Amenties Svg\bed sheet_icon.svg" alt="" /> <p className='AmentiName'>Bed Sheet</p>
            </div>
            <div className="Facelity">
               <img className='AmentiImg' src="\Amenties Svg\cctv_icon.svg" alt="" /> <p className='AmentiName'>CCTV</p>
            </div>
            <div className="Facelity">
               <img className='AmentiImg' src="\Amenties Svg\house keeping_icon.svg" alt="" /> <p className='AmentiName'>House Keeping</p>
            </div>
            <div className="Facelity">
               <img className='AmentiImg' src="\Amenties Svg\security_icon.svg" alt="" /> <p className='AmentiName'>Security</p>
            </div>
            <div className="Facelity">
               <img className='AmentiImg' src="\Amenties Svg\pillow_icon.svg" alt="" /> <p className='AmentiName'>Pillow</p>
            </div>
            <div className="Facelity">
               <img className='AmentiImg' src="\Amenties Svg\drinking water_icon.svg" alt="" /> <p className='AmentiName'>Drinking Water</p>
            </div>
            <div className="Facelity">
               <img className='AmentiImg' src="\Amenties Svg\bathroom_icon.svg" alt="" /> <p className='AmentiName'>Bathroom</p>
            </div>
            <div className="Facelity">
               <img className='AmentiImg' src="\Amenties Svg\wash_icon.svg" alt="" /> <p className='AmentiName'>Wash</p>
            </div>
          </div>
        </div>
        {/* map  */}
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7006.435479989718!2d77.343354!3d28.593244!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzM1LjciTiA3N8KwMjAnNDUuMyJF!5e0!3m2!1sen!2sin!4v1724254111623!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* nearby location  */}
        <div className="nearBy">
          <h2 className='nearByTitle'>Nearby <span>Location</span></h2>
          <p className='nearbyDips'>Oto Marydale is strategically placed nearby key office spaces and access roads</p>
        </div>
        <div className="locationWrapper">
          <div className="location"></div>
          <div className="location"></div>
          <div className="location"></div>
          <div className="location"></div>
          </div>
      </div>
      {/* pg rigtht  */}
      <div className="right d-none d-lg-block">
        <div className={`bookignDtls ${isFixed ? 'fixed' : 'absolute'}`} >
          {/* upper part  */}
         <div className="formDetailsUpper">
         <h4 className='BookignDtlsTitlw'>Select Sharing Type</h4>
          {/* sharing btn  */}
          <div className="sharingOption">
            <div onClick={SinglSharing} className={`single ${sharingStatus ? 'activeBtn' : ''}`}>Single Sharing</div>
            <div onClick={doubleSharing} className={`single ${sharingStatus ? '' : 'activeBtn'}`}>Double Sharing</div>
          </div>
          {/* room sharing dtls  */}
         <div className="roomsharingdtls">
          <div className="policyTitle">
          <p className='policyTitle'>Select Room Type</p>
          <i className='lightAndItalic'>You can change your room type before onboarding.</i>
          </div>
          {/* room sharing and rent details  */}
          {sharingStatus ? <SingleSharingRentDtls/> : <DoubleSharingDtls/> }
          
         </div>
         </div>
         {/* lower part  */}
         <div className="lower">
          <div className="scheduleBtns">
            <div className="visit">SCHEDULE A VISIT</div>
            <div className="confirm">CONFIRM DETAILS</div>
          </div>
          <h5 className='formNum'>To book for a period less than 30 days, Contact +910000000</h5>
         </div>
        </div>
      </div>
    </div>
  )
}

export default PgOne
