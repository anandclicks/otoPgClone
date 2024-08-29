import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context provider/UserContext';

const SpacialOffter = () => {
  const { spacialOffer, handleSpacialOfferPopup,handleGetAcALLState } = useContext(UserContext);
  // State to track the active offer's terms visibility
  const [activeOffer, setActiveOffer] = useState(null);

  // Handle terms condition visibility
  const handleTermsConditionToggle = (offerId) => {
    setActiveOffer(prev => (prev === offerId ? null : offerId));
  };

  return (
    <div className={`spacialOfferWrapper ${spacialOffer ? 'spacialOfferWrapperVisible' : 'spacialOfferWrapperInVisible'}`}>
      <i onClick={handleSpacialOfferPopup} className="ri-close-line offterPopUpCloseBtn"></i>
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
    </div>
  );
};

export default SpacialOffter;
