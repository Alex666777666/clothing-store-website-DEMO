import { useDispatch } from 'react-redux'
import { selectItem } from '../logic/selectedProductInfo/selectSlice'

export const useSelect = () => {
  const dispatch = useDispatch()

  const handleSelect = product => {
    dispatch(selectItem(product))
    window.scrollTo(0, 0)
  }

  return { handleSelect }
}
