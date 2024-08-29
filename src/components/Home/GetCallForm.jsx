import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context provider/UserContext';
import axios from 'axios';

const GetCallForm = () => {
  // Setting form data
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    roomType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form state handling
  const { getACallState, handleGetAcALLState } = useContext(UserContext);

  // API calling
  const getAcallBackApi = async (e) => {
    document.querySelector(".loadingDiv").style.display = "flex"
    setTimeout(e=> {
document.querySelector(".loadingDiv").style.display = "none"
    },3000)
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-for-oto.onrender.com/getAcall', formData);
      console.log('API Response:', response.data);
      setFormData({
        name: '',
        mobileNumber: '',
        email: '',
        roomType: '',
      })
      // Handle success (e.g., close the form, show a success message, etc.)
    } catch (error) {
      console.error('API Error:', error);
      
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
    {/* loading  */}
    <div className="loadingDiv">
      <img src="\reqest send\succesfull.gif" alt="" />
    </div>
    <div className={`getAcALL ${getACallState ? 'getAcALLVisible' : 'getAcALLInVisible'}`}>
      <h3 className='getAcallTitle'>Get A <span>Call</span></h3>
      <i onClick={handleGetAcALLState} className="ri-close-large-line getCallFormCloseIcon"></i>
      <form onSubmit={getAcallBackApi}>
        <div>
          <p className='inputTitle'>Your name</p>
          <input 
            onChange={handleChange} 
            type="text" 
            value={formData.name} 
            name="name" 
            id="" 
            required
          />
        </div>
        <div>
          <p className='inputTitle'>Mobile Number</p>
          <input 
            onChange={handleChange} 
            type="number" 
            value={formData.mobileNumber} 
            name="mobileNumber" 
            id="" 
            required
          />
        </div>
        <div>
          <p className='inputTitle'>Email Address</p>
          <input 
            onChange={handleChange} 
            type="email" 
            name="email" 
            value={formData.email} 
            required
          />
        </div>
        <div>
          <p className='inputTitle'>Select Room Type</p>
          <select 
            onChange={handleChange} 
            name="roomType" 
            id="" 
            value={formData.roomType} 
            required
          >
            <option value="" disabled></option>
            <option value="Single Sharing">Single Sharing</option>
            <option value="Double Sharing">Double Sharing</option>
            <option value="Triple Sharing">Triple Sharing</option>
          </select>
        </div>
        <button type="submit" className='getcallsubmitbtn'>Submit</button>
      </form>
    </div>
    </>
  );
};

export default GetCallForm;
