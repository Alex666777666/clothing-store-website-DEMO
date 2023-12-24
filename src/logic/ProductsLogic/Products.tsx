import React from 'react'
import { Link } from 'react-router-dom'

import { products } from './productsList.ts'
import { useFavorites } from '../../hooks/useFavorites.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { useSelect } from '../../hooks/useSelect.js'

const Products = () => {
  const { favoriteColors, handleToFavorites } = useFavorites()
  const { handleSelect } = useSelect()

  return (
    <>
      <div className='chapter'>Our Products</div>
      <div className='chapter__line'></div>
      <div className='products__container'>
        {products.map((product, index) => (
          <div key={index}>
            <picture>
              <div className={`image-wrapper`}>
                <span
                  className={`link image-icon icons heart `}
                  style={{ color: favoriteColors[product.id] || 'grey' }}
                  onClick={() => handleToFavorites(product)}>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
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
            </picture>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
