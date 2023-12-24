import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../logic/addToFavorites/favSlice'

export const useFavorites = () => {
  const [favoriteColors, setFavoriteColors] = useState({})
  const dispatch = useDispatch()

  const handleToFavorites = product => {
    dispatch(addToFavorites(product))
    setFavoriteColors(prevColors => {
      const updatedColors = { ...prevColors }
      if (!updatedColors[product.id] || updatedColors[product.id] === 'grey') {
        updatedColors[product.id] = 'red'
      } else {
        updatedColors[product.id] = 'grey'
      }

      return updatedColors
    })
  }

  const handleRemoveFromFavorites = product => {
    dispatch(addToFavorites(product))

    setFavoriteColors(prevColors => {
      const updatedColors = { ...prevColors }
      delete updatedColors[product.id]
      localStorage.setItem('favoriteProducts', JSON.stringify(updatedColors))
      return updatedColors
    })
  }

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteProducts'))
    if (savedFavorites) {
      setFavoriteColors(savedFavorites)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteColors))
  }, [favoriteColors])

  return { favoriteColors, handleToFavorites, handleRemoveFromFavorites }
}
