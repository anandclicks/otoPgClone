import React from 'react'
import { Link } from 'react-router-dom'

const SemiFooter = () => {
  return (
         <div className="semiFooter">
        <div className="linksWrapper">
            <Link to={'/noida'} className='linkTitle'>PG In Noida</Link>
          <ul className='list-unstyled flex flex-col gap-1 pt-2'>
            <p><Link to={'/noida'} className='footerLinks '>PG In Noida</Link></p>
            <p><Link to={'/noida'} className='footerLinks '>Hotels In Noida</Link></p>
            <p><Link to={'/noida'} className='footerLinks '>Room for Rent in Noida</Link></p>
            <p><Link to={'/noida'} className='footerLinks '>Coliving In Noida</Link></p>
          </ul>
        </div>
        <div className="linksWrapper">
            <p className='linkTitle'>PG In Delhi</p>
          <ul className='list-unstyled flex flex-col gap-2 pt-2 '>
            <li className='footerLinks '>PG In Delhi</li>
            <li className='footerLinks '>Hotels In Delhi</li>
            <li className='footerLinks '>Room for Rent in Delhi</li>
            <li className='footerLinks '>Coliving In Delhi</li>
          </ul>
        </div>
        <div className="linksWrapper">
            <p className='linkTitle'>PG In Gurugram</p>
          <ul className='list-unstyled flex flex-col gap-1 pt-2'>
          <li className='footerLinks '>PG In Gurugram</li>
            <li className='footerLinks '>Hotels In Gurugram</li>
            <li className='footerLinks '>Room for Rent in Gurugram</li>
            <li className='footerLinks '>Coliving In Gurugram</li>
          </ul>
        </div>
        <div className="linksWrapper">
            <p className='linkTitle'>PG In Ghaziabad</p>
          <ul className='list-unstyled flex flex-col gap-1 pt-2'>
            <li className='footerLinks '>PG In Ghaziabad</li>
            <li className='footerLinks '>Hotels In Ghaziabad</li>
            <li className='footerLinks '>Room for Rent in Ghaziabad</li>
            <li className='footerLinks '>Coliving In Ghaziabad</li>
          </ul>
        </div>
        <div className="linksWrapper">
            <p className='linkTitle '>PG In Greater Noida</p>
          <ul className='list-unstyled flex flex-col gap-1 pt-2'>
            <li className='footerLinks '>PG In Greater Noida</li>
            <li className='footerLinks '>Hotels In Greater Noida</li>
            <li className='footerLinks '>Room for Rent in Greater Noida</li>
            <li className='footerLinks '>Coliving In Greater Noida</li>
          </ul>
        </div>
      </div>

  )
}

export default SemiFooter
