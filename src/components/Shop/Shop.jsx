import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  return (
    <>
      <div className='shop'>
        <p className=' shop-message '>
          At the moment, our store operates solely online. To view our range of
          products, you can visit our profiles on&nbsp;
          <a className='shop-inf ' href='https://t.me/exc4l1bxxxr'>
            Telegram
          </a>
          ,&nbsp;
          <a
            className='shop-inf '
            href='https://www.instagram.com/armure.exquise/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='>
            Instagram
          </a>
          , or explore our website. Orders are accepted and shipped via "Nova
          Poshta" within Ukraine🚚.
        </p>
        <li>
          <Link to='/' className='shop-house'>
            Back to home &nbsp;
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
      </div>
    </>
  )
}

export default Shop
