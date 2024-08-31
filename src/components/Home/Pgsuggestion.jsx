import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pgsuggestionData from '../../AllPgData/Pgforsuggestion';

const Pgsuggestion = () => {
  const sceollTop = ()=> {
    window.scrollTo(0, 0);
  }
  const [pgForSuggetion, setPgForSuggetion] = useState([]);

  useEffect(() => {
    const pgData = pgsuggestionData();
    setPgForSuggetion(pgData); // Update state with the suggested PG data
    console.log(pgData); // Log the result to verify
    
  }, []); // Empty array to run the effect only once on mount

  return (
   <div className="suggestionWrapper">
     <div onClick={sceollTop} className='pgSuggesation'>
      {pgForSuggetion.map(e => (
        <Link key={e.id} to={e.pageUrl} className='PgCard'>
          {/* Image */}
          <div className="pgcardMainimg">
            <img src={`${e.imageUrl}1.jpg`} alt={e.pgTitle} />
          </div>
          {/* Card Title & Type */}
          <div className="cardTitle">
            <h4>{e.pgTitle}</h4>
            <p><span>UNISEX</span> PG in {e.city}</p>
          </div>
          {/* PG Price */}
          <div className="price-discount">
            <div className='price'>
              <div className="startsIn">Starts in</div>
              <p className='priceVal'>₹{e.doubleSharingPrice - 1}</p>
            </div>
            <div className="discount">
              <img src="/svgs/offer.svg" alt="Discount Offer" /> UPTO 20% OFF
            </div>
          </div>
        </Link>
      ))}
    </div>
   </div>
  );
}

export default Pgsuggestion;
