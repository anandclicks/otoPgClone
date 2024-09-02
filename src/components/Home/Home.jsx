import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Prasence from './Prasence';
import HeroOne from './HeroOne';
import ShowCase from './ShowCase';
import Memory from './Memory';
import Feedback from './Feedback';
import SemiFooter from './SemiFooter';
import { UserContext } from '../../Context provider/UserContext';
import Footer from '../Footer/Footer';
import GetCallForm from './GetCallForm';
import SpacialOffter from './SpacialOffter';
import axios from 'axios';


const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',  // Add the email field here
    location: '',
    specificProperty: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLocationClick = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      location: location,
    }));
  };

  const handlePropertyClick = (property) => {
    setFormData((prevData) => ({
      ...prevData,
      specificProperty: property,
    }));
  };

  const handleSubmit = async (evt) => {
evt.preventDefault()
    const { name, number, email, location, specificProperty } = formData;
    if (!name || !number || !email || !location || !specificProperty) {
      alert('Please fill all the required fields before submitting.');
      return;
    }
    document.querySelector(".loadingDiv").style.display = "flex"
    setTimeout(e=> {
      document.querySelector(".loadingDiv").style.display = "none"
          },3000)
    await axios.post('https://backend-for-oto.onrender.com/intrestedInproperty', {formData})
    console.log(formData);
   
    // API call logic here
  };

  const { fromStatus, findPgFormHandler,handleSpacialOfferPopup } = useContext(UserContext);

  return (
    <>
    {/* loading  */}
    <div className='spacialOffer' onClick={handleSpacialOfferPopup}><i class="ri-gift-line"></i>Offter</div>
    <div className="loadingDiv">
      <img src="\reqest send\succesfull.gif" alt="" />
    </div>
      <SpacialOffter />
      <div className={`pgFinderForm ${fromStatus ? 'pgFinderFormVisible' : 'pgFinderFormInvisble'}`}>
        <i onClick={findPgFormHandler} className="fa-solid fa-xmark pgFindFormClose"></i>
        
        <h2 className='findpgformTitle'>Find your Oto, your way in <span>Locality</span></h2>

        <div className="colivingBTn">
          <i className="fa-solid fa-check coliving"></i>Coliving
        </div>

        <div className="inputBox">
          <h4 className='inputTitle'>Your Name</h4>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <div className="inputBox">
          <h4 className='inputTitle'>Your Contact Number</h4>
          <input 
            type="text" 
            name="number" 
            value={formData.number} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <div className="inputBox">
          <h4 className='inputTitle'>Your Email</h4>  {/* New email input field */}
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required
          />
        </div>

        <div className="inputBox">
          <h4 className='inputTitle'>Where would you like to stay?</h4>
          <input 
            type="text" 
            name="location" 
            value={formData.location} 
            readOnly
            required
          />
        </div>

        <div className="allLocations">
          {['Sector44', 'Sector45', 'Sector104', 'Ghaziabad', 'Noida', 'Gurugram', 'Greater Noida', 'Delhi'].map((location) => (
            <div 
              key={location} 
              className="lbtn" 
              onClick={() => handleLocationClick(location)}
            >
              {location}
            </div>
          ))}
        </div>

        <div className="inputBox">
          <h4 className='inputTitle'>Looking for a specific property?</h4>
          <input 
            type="text" 
            name="specificProperty" 
            value={formData.specificProperty} 
            readOnly
            required
          />
        </div>

        <div className="allProperties">
          {['OTO capital', 'OTO Royal town', 'OTO scout house', 'OTO bloom', 'OTO Omega', 'OTO crop town ','OTO Township ','OTO Coastal', 'OTO white house','OTO Royal win','OTO Royal win 2', 'OTO expo primium', 'OTO expressway'].map((property) => (
            <div 
              key={property} 
              className="lbtn" 
              onClick={() => handlePropertyClick(property)}
            >
              {property}
            </div>
          ))}
        </div>

        <div className="pgFindSubmitBtn" onClick={handleSubmit}>
          Submit
        </div>
      </div>

      <div className='container MainHome'>
        <Navbar />
        <GetCallForm />
        <div className="home">
          <div className="homeleft">
            <div className="box">
              <h1 className='homeTitle'>Welcome to your <span>second Home</span></h1>
              <p className='homeDips'>
                <img src="/svgs/flexible.svg" alt="" />
                bed Choose a shared space or pick a private room
              </p>
              <div onClick={findPgFormHandler} className="searchBox">
                <p className='placeholder'>Find a OTO stay near your place of Work/Study</p>
                <div className="searchIconAndBtn">
                  <i className="ri-search-line searchIconOfPlaceholderBox"></i>
                  <div className="btn">
                    <i className="ri-focus-3-line"></i>
                    <div className="span">Near Me</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="homeright">
            <img src="\Herosectiononeimages\HomeSectionImg.png" alt="" />
          </div>
        </div>
        <Prasence />
        <HeroOne />
        <ShowCase />
        <Memory />
        <Feedback />
        <SemiFooter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
