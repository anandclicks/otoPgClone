import React, { useState } from 'react';

const NopropertyFound = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector(".loadingDiv").style.display = "flex"
    setTimeout(e=> {
document.querySelector(".loadingDiv").style.display = "none"
    },3000)
    try {
      const response = await fetch('https://backend-for-oto.onrender.com/getSupport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, number }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        // Handle success (e.g., show a success message, clear the form)
      } else {
        console.error('Error:', response.statusText);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network error (e.g., show a network error message)
    }
  };

  return (
    <div className='propertyNotFountMain'>
      <div className="notFountImg">
        <img src="\logo\no-stays-found.png" alt="No stays found" />
      </div>
      {/* form  */}
      <div className="notFoundForm">
        <h2><span>Sorry</span> No Stays Found!</h2>
        <p className='dipsOFnOfoundForm'>
          Please enter the Name and Mobile Number. <br /> 
          We will get in touch with you super soon!
        </p>
        <form onSubmit={handleSubmit}>
          <p className='placeholderOFform'>Name</p>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <p className='placeholderOFform'>Number</p>
          <input 
            type="text" 
            value={number} 
            onChange={(e) => setNumber(e.target.value)} 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NopropertyFound;
