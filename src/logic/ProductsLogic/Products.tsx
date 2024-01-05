import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { products } from './productsList.ts'
import { useFavorites } from '../../hooks/useFavorites.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { useSelect } from '../../hooks/useSelect.js'

const Products = () => {
  const { handleToFavorites, handleRemoveFromFavorites, favoriteColors } =
    useFavorites()
  const { handleSelect } = useSelect()

  const favoriteItems = useSelector(state => state.favorites.favoriteItems)

  return (
    <>
      <div className='chapter'>Our Products</div>
      <div className='chapter__line'></div>
      <div className='products__container'>
        {products.map((product, index) => (
          <div key={index}>
            <picture>
              <div className={`image-wrapper`}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => handleSelect(product)}>
                  <div
                    className='blur-load'
                    style={{ backgroundImage: `url(${product.blurImage})` }}>
                    <img
                      className='products__image'
                      src={product.image}
                      loading='lazy'
                      alt={`Slide ${index + 1}`}
                    />
                  </div>

                  <div className='products__info discounts'>
                    {product.discounts}
                  </div>
                  <div className='products__info limited'>
                    {product.limited}
                  </div>
                  <div className='products__info new'>{product.new}</div>
                </Link>
              </div>

              <Link
                to={`/product/${product.id}`}
                onClick={() => handleSelect(product)}>
                <div className='products__info label'>{product.name}</div>
                <div className='products__info size'>{product.size}</div>
                <div className='products__info price'>
                  {product.discounts ? (
                    <>
                      <span className={`products__info price-decrease`}>
                        {product.price} грн
                      </span>
                      <span className={`products__info price`}>
                        &nbsp; {product.discountedPrice} грн
                      </span>
                    </>
                  ) : (
                    `${product.price} грн`
                  )}
                </div>
              </Link>

              <div
                className={`heart`}
                style={{ color: favoriteColors[product.id] || 'grey' }}
                onClick={() => {
                  if (favoriteColors[product.id] === 'red') {
                    handleRemoveFromFavorites(product)
                  } else {
                    handleToFavorites(product)
                  }
                }}>
                {favoriteColors[product.id] === 'red' ? (
                  <>
                    Remove from favorites &nbsp;
                    <FontAwesomeIcon icon={faTrashCan} />
                  </>
                ) : (
                  <>
                    Add to favorites &nbsp;
                    <FontAwesomeIcon icon={faHeart} />
                  </>
                )}
              </div>
            </picture>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
