import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBan } from '@fortawesome/free-solid-svg-icons'

import { useSelect } from '../../hooks/useSelect'
import { useFavorites } from '../../hooks/useFavorites'

const Favorites = () => {
  const { handleRemoveFromFavorites } = useFavorites()
  const { handleSelect } = useSelect()

  const favoriteItems = useSelector(state => state.favorites.favoriteItems)

  return (
    <div className='favorites'>
      <div className='favorites__container'>
        <div className='chapter'>Favorites</div>
        <div className='chapter__line'></div>
        <div className='favorites__body'>
          {favoriteItems.length === 0 ? (
            <p className='message'>
              Oops... you need to add here some nice stuff 💜
            </p>
          ) : (
            favoriteItems.map((item, index) => (
              <div key={index}>
                <picture>
                  <div className='image-wrapper'>
                    <span
                      className={`link image-icon icons heart `}
                      onClick={() => handleRemoveFromFavorites(item)}>
                      <FontAwesomeIcon icon={faBan} />
                    </span>
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => handleSelect(item)}>
                      <div
                        className='blur-load'
                        style={{ backgroundImage: `url(${item.blurImage})` }}>
                        <img
                          href={item.link}
                          className='products__image'
                          src={item.image}
                          alt={`Product ${index + 1}`}
                          loading='lazy'
                        />
                      </div>

                      <div className='products__info discounts'>
                        {item.discounts}
                      </div>
                      <div className='products__info limited'>
                        {' '}
                        {item.limited}
                      </div>
                    </Link>
                  </div>
                  <Link
                    to={`/product/${item.id}`}
                    onClick={() => handleSelect(item)}>
                    <div className='products__info label'>{item.name}</div>
                    <div className='products__info size'>{item.size}</div>
                    <div className='products__info price'>
                      {item.discounts ? (
                        <>
                          <span className={`products__info price-decrease`}>
                            {item.price} грн
                          </span>
                          <span className={`products__info price`}>
                            &nbsp; {item.discountedPrice} грн
                          </span>
                        </>
                      ) : (
                        `${item.price} грн`
                      )}
                    </div>
                  </Link>
                </picture>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Favorites
