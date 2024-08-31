import React, { useContext, useEffect, useState } from 'react'
import SingleSharingRentDtls from './SingleSharingRentDtls'
import DoubleSharingDtls from './DoubleSharingDtls'
import TripleSharing from './TripleSharing'
import HeaderTwo from './HeaderTwo'
import { UserContext } from '../../Context provider/UserContext'
import GetCallForm from '../Home/GetCallForm'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Pgsuggestion from '../Home/Pgsuggestion'


const PgOne = (prop) => {
  const { spacialOffer, handleSpacialOfferPopup } = useContext(UserContext);
  // State to track the active offer's terms visibility
  const [activeOffer, setActiveOffer] = useState(null);

  // Handle terms condition visibility
  const handleTermsConditionToggle = (offerId) => {
    setActiveOffer(prev => (prev === offerId ? null : offerId));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  const [sharingStatus, setsharingStatus] = useState('single')
  const SinglSharing = ()=> {
    setsharingStatus('single')
  }
  const doubleSharing = ()=> {
    setsharingStatus('double')
  }
  const tripleSharing = ()=> {
    setsharingStatus('triple')
  }

  // form postion manage 
  const [isFixed, setisFixed] = useState(true)
  // get a call fuction handling 
  const {handleGetAcALLState} = useContext(UserContext)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition <= '1930') {
      
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
    <>
    <GetCallForm/>
    <HeaderTwo/>
    <div className='pgMain'>
      <div className="btnsForMobile">
        <Link to={'https://wa.me/7415051778'} className="Schedul">
        <i className="fa-brands fa-square-whatsapp whatsappIcon"></i> Schedule Visit
        </Link>
        <div onClick={handleGetAcALLState} className="selectRoom">
          Select Room
        </div>
      </div>
      {/* pg left  */}
      <div className="left">
        {/* pgHeader  */}
        {/* quick links  */}
        <div className='quickLinksFroSmallDevice'>
          <p className='linksContainer'><Link to={'/'} className='activeLink '>Home</Link><i className="activeLink fa-solid fa-chevron-right"></i><p className='activeLink '>Noida</p><i className="activeLink fa-solid fa-chevron-right"></i><p>{prop.pgTitle}</p></p>
        </div>
        <div className="pgHeader">
          <div className='pgHeaderLeft'>
          <h1 className='PgName'>{prop.pgTitle }<i className="fa-regular fa-heart"></i></h1>
          <p className='pgLocation'>{prop.pgLocation}</p>
          </div>
          <div className="pgHeaderRight">
            <a href={`${prop.mapUrl}`} className="locationBtn"><i className="fa-solid fa-location-dot"></i> View in map</a>
          </div>
        </div>
        {/* pg images  */}
        <div className="pgImageContainer">
          <img className='propertyImages' src={`${prop.imageUrl}${imageNum}.jpg`} alt="" />
          {/* image ctrl  */}
          <div className="imgCtrl">
          <i onClick={prevImage} className="fa-solid fa-angle-left prev"></i>
          <i onClick={nextIamge} className="fa-solid fa-chevron-right next"></i>
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
          {/* unisex logo  */}
          <div className="usisex">
            Unisex
          </div>
        </div>
        {/* quick links  */}
        <div className='quickLinksFroLargeDevice'>
          <p className='linksContainer'><p className='activeLink '>Home</p><i className="activeLink fa-solid fa-chevron-right"></i><p className='activeLink '>Noida</p><i className="activeLink fa-solid fa-chevron-right"></i><p>Oto Gem </p></p>
        </div>
        {/* about pg  */}
        <div className="aboutPg">
          <h2 className='aboutPgtTitle'>About the <span>Property</span></h2>
          <p className='AboutPgDips'>Oto Gem ,fully furnished rooms with benefits from its distinguished location as it offers good connectivity via bus and railway Station .Situated in a location which is conveniently close to hotels, markets and main IT parks additionally with specta</p>
        </div>
        {/* offers  */}
        <div className="offterBox">
        {/* Offer 1 */}
        <div className="offer">
          <div className="image">
            <img src="\Amenties Svg\offter1.svg" alt="" />
          </div>
          <div className="offterInfo">
            <div className="offertitle">
              <h3>Discount Upto 10%</h3>
            </div>
            <div className="offerdips">
              <p>"If a customer signs a 6-month agreement with us, we can offer a 10% discount. This would apply to double-sharing accommodations."</p>
            </div>
            <div onClick={handleGetAcALLState} className="offerApplay">
              Applay
            </div>
            <div onClick={() => handleTermsConditionToggle(1)} className={`termsCondition ${activeOffer === 1 ? 'termsConditionVisible' : ''}`}>
              <span>terms and conditions.</span>
              {activeOffer === 1 && (
                <ul>
                  <li>Minimum stay of 6 months required.</li>
                  <li>Payment: 2 months' rent + 1 month’s security deposit.</li>
                  <li>Early exit: ₹2,000 will be deducted from the security deposit, plus any additional charges.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* Offer 2 */}
        <div className="offer">
          <div className="image">
            <img src="\Amenties Svg\offter2.svg" alt="" />
          </div>
          <div className="offterInfo">
            <div className="offertitle">
              <h3>Discount Upto 50%</h3>
            </div>
            <div className="offerdips">
              <p>"Sign a 6-month double-sharing lease to get 50% off the first month’s rent. Pay 2 months' rent plus 1 month’s security deposit. No other discounts subject to terms and conditions."</p>
            </div>
            <div onClick={handleGetAcALLState} className="offerApplay">
              Applay
            </div>
            <div onClick={() => handleTermsConditionToggle(2)} className={`termsCondition ${activeOffer === 2 ? 'termsConditionVisible' : ''}`}>
              <span>terms and conditions.</span>
              {activeOffer === 2 && (
                <ul>
                  <li>You must have Double Sharing</li>
                  <li>Minimum stay of 6 months required.</li>
                  <li>Payment: 2 months' rent + 1 month’s security deposit.</li>
                  <li>Early exit: ₹2,000 will be deducted from the security deposit, plus any additional charges.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* Offer 3 */}
        <div className="offer">
          <div className="image">
            <img src="\Amenties Svg\offter3.svg" alt="" />
          </div>
          <div className="offterInfo">
            <div className="offertitle">
              <h3>Discount Upto 100%</h3>
            </div>
            <div className="offerdips">
              <p>"OTO Stays is offering a promotion where customers can fill in their details and participate in a lucky draw held on the 30th or 31st of each month. The draw will be based on the number of vacant beds in a property. The winner will receive a free stay for the first month, but some terms and conditions will apply."</p>
            </div>
            <div onClick={handleGetAcALLState} className="offerApplay">
              Applay
            </div>
            <div onClick={() => handleTermsConditionToggle(3)} className={`termsCondition ${activeOffer === 3 ? 'termsConditionVisible' : ''}`}>
              <span>terms and conditions.</span>
              {activeOffer === 3 && (
                <ul>
                  <li>Minimum stay of 6 months required.</li>
                  <li>Payment: 2 months' rent + 1 month’s security deposit.</li>
                  <li>Early exit: ₹2,000 will be deducted from the security deposit, plus any additional charges.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
        {/* rooms dtls  */}
        <div className="roomDtls">
          <h2 className='roomDtlsTitle'>Room <span>Details</span></h2>
          <p className='roomDtlsDips'>All room type have some variants that are larger in size or have extra Amenities.</p>
          <div className='roomRent'>
            <div className="roomRendWrapper">
            <div className="singleSharing">
              <h3 className='roomType'>Single Sharing</h3>
              <small className='startsFrom'>starting from</small>
              <p className='price'>₹{prop.singleSharingPrice}/<small className='month'>month</small></p>
            </div>
            <div className="doubleSharing">
            <h3 className='roomType'>Double Sharing </h3>
              <small className='startsFrom'>starting from</small>
              <p className='price'>₹{prop.doubleSharingPrice}/<small className='month'>month</small></p>
            </div>
            <div className="TripleSharing">
            <h3 className='roomType'>Triple Sharing</h3>
              <small className='startsFrom'>starting from</small>
              <p className='price'>₹{prop.tripleSharingPrice}/<small className='month'>month</small></p>
            </div>
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
        <iframe src={`${prop.liveLocationUrl}`}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* nearby location  */}
          <h2 className='nearByTitle'>Nearby <span>Location</span></h2>
          <p className='nearbyDips'>Oto Marydale is strategically placed nearby key office spaces and access roads</p>
        <div className="nearBy">
        <div className="locationWrapper">
          <div className="location">
            <p className='nearbyLandmark'>{prop.nearByLandmarkOne}</p>
            <h5 className='distnceFromLandmark'>{prop.distanceFromPgOne}</h5>
          </div>
          <div className="location">
          <p className='nearbyLandmark'>{prop.nearByLandmarkTwo}</p>
          <h5 className='distnceFromLandmark'>{prop.distanceFromPgTwo}</h5>
          </div>
          <div className="location">
          <p className='nearbyLandmark'>{prop.nearByLandmarkThree}</p>
          <h5 className='distnceFromLandmark'>{prop.distanceFromPgThree}</h5>
          </div>
          </div>
        </div>
      </div>
      {/* pg rigtht  */}
      <div className="right ">
        <div className={`bookignDtls ${isFixed ? 'fixed' : 'absolute'}`} >
          {/* upper part  */}
         <div className="formDetailsUpper">
         <h4 className='BookignDtlsTitlw'>Select Sharing Type</h4>
          {/* sharing btn  */}
          <div className="sharingOption">
            <div onClick={SinglSharing} className={`single ${sharingStatus == 'single' ? 'activeBtn' : ''}`}>Single Sharing</div>
            <div onClick={doubleSharing} className={`single ${sharingStatus == 'double' ? 'activeBtn' :''}`}>Double Sharing</div>
            <div onClick={tripleSharing} className={`single ${sharingStatus == 'triple' ? 'activeBtn' :''}`}>Triple Sharing
            </div>
          </div>
          {/* room sharing dtls  */}
         <div className="roomsharingdtls">
          <div className="policyTitle">
          <p className='policyTitle'>Select Room Type</p>
          <i className='lightAndItalic'>You can change your room type before onboarding.</i>
          </div>
          {/* room sharing and rent details  */}
          {sharingStatus === 'single' ? <SingleSharingRentDtls singleSharingPrice={prop.singleSharingPrice}/> : '' }
          {sharingStatus === 'double' ? <DoubleSharingDtls doubleSharingPrice={prop.doubleSharingPrice}/> : ''}
          {sharingStatus === 'triple' ? <TripleSharing tripleSharingPrice={prop.tripleSharingPrice}/> : ''}
          
         </div>
         </div>
         {/* lower part  */}
         <div className="lower">
          <div className="scheduleBtns">
            <div className="visit">SCHEDULE A VISIT</div>
            <div onClick={handleGetAcALLState} className="confirm">CONFIRM DETAILS</div>
          </div>
          <h5 className='formNum'>To book for a period less than 30 days, Contact +91 7415051778</h5>
         </div>
        </div>
      </div>
    </div>
    <Pgsuggestion/>
    <Footer/>
    </>
  )
}

export default PgOne
