import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { useSelect } from '../../hooks/useSelect'
import { products } from '../ProductsLogic/productsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ isVisible, toggleVisible }) => {
  const { handleSelect } = useSelect()
  const [inputText, setInputText] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const inputHandler = e => {
    const inputValue = e.target.value.toLowerCase()
    setInputText(inputValue)
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(inputValue)
    )
    setFilteredData(filteredProducts)
  }

  const selectProduct = product => {
    handleSelect(product)
    toggleVisible()
  }

  return isVisible ? (
    <div bodyLock={'overflow: hiden'}>
      <div className='overlay'>
        <div className='modal'>
          <div className='heart search-cancel' onClick={toggleVisible}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <TextField
            id='outlined-basic'
            onChange={inputHandler}
            variant='outlined'
            fullWidth
            label='Search'
          />
          {inputText && (
            <ul className='search-products'>
              {filteredData.map((product, index) => (
                <li key={index}>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => selectProduct(product)}>
                    <div className='search-items'>
                      <div
                        className='blur-load-search'
                        style={{
                          backgroundImage: `url(${product.blurImage})`,
                        }}>
                        <img
                          className='search-image'
                          src={product.image}
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                      <div className='products__info label'>{product.name}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  ) : null
}

export default SearchBar
