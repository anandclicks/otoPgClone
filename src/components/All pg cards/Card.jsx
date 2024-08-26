import React, {  useContext, useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context provider/UserContext'




const Card = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
// filtered and unfiltered data 
const {dataForMap} = useContext(UserContext)

// pg image handler
  const [imageNum, setimageNum] = useState(1)
  const pgCardPrevImg = ()=> {
    if(imageNum > 0) {
      setimageNum(prev => prev - 1)
    }
  }
  const pgCardNextImg = ()=> {
    if(imageNum < 10) {
      setimageNum(prev => prev + 1)
    }
  }
  return (
    <>
    {dataForMap.map(e=> (
      <Link key={e.id} to={e.pageUrl} className='PgCard'>
      {/* image  */}
      <div className="pgcardMainimg">
      
        <img src={`${e.imageUrl}${imageNum}.jpg`} alt="" />
      </div>
      {/* card title & type  */}
      <div className="cardTitle">
        <h4>{e.pgTitle}</h4>
        <p><span>UNISEX</span> PG in {e.city}</p>
      </div>
      {/* pg price  */}
      <div className="price-discount">
        <div className='price'>
          <div className="startsIn">Starts in</div>
          <p className='priceVal'>₹{e.doubleSharingPrice - 1} </p>
        </div>
        <div className="discount">
          <img src="/svgs/offer.svg" alt="" /> UPTO 20% OFF
        </div>
      </div>
    </Link>
    ))}
    
    
    </>
  )
}

export default Card
