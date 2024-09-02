import React, { useContext, useEffect, useState } from 'react';

import Navbar from '../Home/Navbar';
import HeaderTwo from '../PgAllComponents/HeaderTwo';
import { Link } from 'react-router-dom';
import Card from './Card';
import { UserContext } from '../../Context provider/UserContext';
import GetCallForm from '../Home/GetCallForm';
import NopropertyFound from './NopropertyFound';

const Ghaziabad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [rangeValue, setRangeValue] = useState(4999);
  const [selectedSort, setSelectedSort] = useState(null);
  const [filterOptions, setFilterOptions] = useState(false);
  const [selectedSharing, setSelectedSharing] = useState(null);

  const handleFilterBtn = () => {
    setFilterOptions((prev) => !prev);
  };

  const handleRangeInput = (event) => {
    const value = event.target.value;
    setRangeValue(value);
    handleRange(value)
    // Additional logic to filter data based on the rangeValue can go here
  }
  

  const handleCheckboxChange = (value, handler) => {
    if (selectedSort === value) {
      setSelectedSort(null);
    } else {
      setSelectedSort(value);
      handler(); // Call the respective sorting function
    }
  };

  const handleSharingChange = (value) => {
    if (selectedSharing === value) {
      setSelectedSharing(null);
    } else {
      setSelectedSharing(value);
    }
  };

  const { hightToLOwDataHandle, LOwtoHighDataHandle, dataForMap, SingleSharingHandle,doubleSharingHandle,tripleSharingHandle, handleRange } = useContext(UserContext);

  return (
    <>
      <HeaderTwo activeLink={"Ghaziabad"} />
      <GetCallForm/>
      <div className='DelhiAllPgMain container'>
        {/* filter navbar title */}
        <div className={`filterSide ${filterOptions ? 'filterSideVisible' : 'filterSideinVisible'}`}>
          <div className="filterWrapper">
            <div className="filterNavbar">
              <h2 className='filterNavTitle'>Filters</h2>
              <i onClick={handleFilterBtn} className="ri-close-large-line closeFilter"></i>
            </div>
            {/* sort by filter */}
            <div className="sortBy filterBox">
              <h3 className='filterTypeTitle'>Sort By</h3>
              <div className="filterinputBoxe">
                <div className="inputWrapper">
                  <input 
                    onClick={hightToLOwDataHandle} 
                    // onChange={() => handleCheckboxChange('lowToHigh', hightToLOwDataHandle)} 
                    checked={selectedSort === 'lowToHigh'} 
                    type="checkbox" 
                  /> 
                  <p>Price : Low to High</p>
                </div>
                <div className="inputWrapper">
                  <input 
                    onClick={LOwtoHighDataHandle} 
                    // onChange={() => handleCheckboxChange('highToLow', LOwtoHighDataHandle)} 
                    checked={selectedSort === 'highToLow'} 
                    type="checkbox" 
                  /> 
                  <p>Price : High to Low</p>
                </div>
              </div>
            </div>
            {/* sharing type filter */}
            <div className="sharingType filterBox">
              <h3 className='filterTypeTitle'>Filter By</h3>
              <div className="filterinputBoxe">
                <div className="inputWrapper">
                  <input 
                    type="checkbox" 
                    // onChange={() => handleSharingChange('single')} 
                    onClick={SingleSharingHandle}
                    checked={selectedSharing === 'single'} 
                  /> 
                  <p>Single Sharing</p>
                </div>
                <div className="inputWrapper">
                  <input 
                    type="checkbox" 
                    // onChange={() => handleSharingChange('double')} 
                    onClick={doubleSharingHandle}
                    checked={selectedSharing === 'double'} 
                  /> 
                  <p>Double Sharing</p>
                </div>
                <div className="inputWrapper">
                  <input 
                    type="checkbox" 
                    // onChange={() => handleSharingChange('triple')} 
                    onClick={tripleSharingHandle}
                    checked={selectedSharing === 'triple'} 
                  /> 
                  <p>Triple Sharing</p>
                </div>
              </div>
            </div>
            {/* price range */}
            <div className="priceRange">
              <input 
                // onChange={handleRangeInput} 
                className='range' 
                step={1000}
                min={4999} 
                max={9999} 
                type="range" 
              />
              <div className="rangeValue">
                <div className="firstValue">Rs. ₹{rangeValue}</div>
                <div className="lasValue">Rs. ₹9900</div>
              </div>
            </div>
          </div>
        </div>
        {/* filter icon for mobile */}
        <div onClick={handleFilterBtn} className='filterIconBox'>
          <i className="ri-equalizer-line"></i> Filter/Sort
        </div>
        <div className="pgCardSide">
          <div className="pgsWrapper">
            {/* heading row */}
            <div className="headingRow">
              <div className="quickLinks">
                <Link to={'/'}><span>Home<i className="ri-arrow-drop-right-line"></i></span></Link>Ghaziabad
              </div>
              <h3 className="noidaAllPgHeading">
                Showing properties in <span>Ghaziabad</span>
              </h3>
            </div>
            {/* all cards */}
            {/* <div className="allPgCards">
              <img className='requestAcallBanner' src="\logo\callBackBnner.png" alt="" />
              
            </div> */}
            <NopropertyFound/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ghaziabad;
