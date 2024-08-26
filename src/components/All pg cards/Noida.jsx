import React, { useContext, useEffect, useState } from 'react'

import Navbar from '../Home/Navbar'
import HeaderTwo from '../PgAllComponents/HeaderTwo'
import { Link } from 'react-router-dom'
import Card from './Card'
import { UserContext } from '../../Context provider/UserContext'

const Noida = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [rangeValue, setragneValue] = useState(1000)
  const [selectedSort, setSelectedSort] = useState(null);
  const [filterOptions, setfilterOptions] = useState(false)
  const handleFilterBtn = ()=> {
    setfilterOptions(prev => !prev)
  }
  const handleRnageInput = (evt)=> {
    setragneValue(evt.target.value)
    console.log(event.target.value)
  }
  const handleCheckboxChange = (value, handler) => {
    if (selectedSort === value) {
      setSelectedSort(null);
    } else {
      setSelectedSort(value);
      handler(); // Call the respective sorting function
    }
  };
  // gettign low to high and high to low function 
  const {hightToLOwDataHandle, LOwtoHighDataHandle, dataForMap} = useContext(UserContext)
  return (
    <>
      <HeaderTwo/>
    <div className='NoidaAllPgMain container'>
      {/* filter bavbar tiele  */}
      <div className={`filterSide ${filterOptions ? 'filterSideVisible' : 'filterSideinVisible'}`}>
        <div className="filterWrapper">
          <div className="filterNavbar">
            <h2 className='filterNavTitle'>Filters</h2>
            <i onClick={handleFilterBtn} class="ri-close-large-line closeFilter"></i>
            {/* <div className="ClearfilterBtn">Clear Filters</div> */}
          </div>
           {/* sort by filter  */}
      <div className="sortBy filterBox">
        <h3 className='filterTypeTitle'>Sort By</h3>
        <div className="filterinputBoxe">
         <div className="inputWrapper">
         <input onClick={hightToLOwDataHandle}  onChange={() => handleCheckboxChange('lowToHigh', hightToLOwDataHandle)}   checked={selectedSort === 'lowToHigh'} type="checkbox" /> <p>Price : Low to Hign</p>
         </div>
         <div className="inputWrapper">
         <input onClick={LOwtoHighDataHandle}    onChange={() => handleCheckboxChange('highToLow', LOwtoHighDataHandle)} checked={selectedSort === 'highToLow'}  type="checkbox" /> <p>Price : High to Low</p>
         </div>
        </div>
      </div>
      {/* sharing type filter  */}
      <div className="sharingType filterBox">
        <h3 className='filterTypeTitle'>Filter By</h3>
        <div className="filterinputBoxe">
         <div className="inputWrapper">
         <input type="checkbox" /> <p>Single Sharing</p>
         </div>
         <div className="inputWrapper">
         <input type="checkbox" /> <p>Double Shairng</p>
         </div>
         <div className="inputWrapper">
         <input type="checkbox" /> <p>Triple Shairng</p>
         </div>
        </div>
      </div>
      {/* price range  */}
      <div className="priceRange ">
      <input onChange={handleRnageInput} className='range' min={1000} max={20000} type="range" />
        <div className="rangeValue">
          <div className="firstValue">Rs. ₹{rangeValue}</div>
          <div className="lasValue">Rs. ₹20000</div>
        </div>
       
      </div>
        </div>
      </div>
      {/* filter icon for mibile  */}
      <div onClick={handleFilterBtn} className='filterIconBox'>
      <i class="ri-equalizer-line "></i>  Filter/Sort </div>
      <div className="pgCardSide">
      <div className="pgsWrapper">
        {/* heading row  */}
      <div className="headingRow">
        <div className="quickLinks">
          <Link to={'/'}><span>Home<i class="ri-arrow-drop-right-line"></i></span></Link>Noida
        </div>
      <h3 className="noidaAllPgHeading">Showing {dataForMap.length} properties in <span>Noida</span></h3>
      </div>
      {/* all cards  */}
      <div className="allPgCards">
      <Card/>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Noida
