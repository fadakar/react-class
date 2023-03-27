import axios from 'axios'
import React from 'react'
import { BasePage } from '../../components/base-page'
import { BASE_URL } from '../../utils/constants'
import { ProductForm } from './product-form'
import { useNavigate} from 'react-router-dom'
const ProductNewPage = () => {
  /**
   * const navigate = useNavigate()
   * 
   * navigate(to) => to = 'new URL'
   * navigate(delta) => 
   *      delta => positive => forward
   *      delta => negative => back
   */
  const navigate = useNavigate()

  const newProduct = {
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "apple",
    category: "smartphone",
  }

  const addNewProduct = (product)=> {
    // console.log(product)
    axios.post(BASE_URL+'/products', product)
    .then(res=> {

      // navigate('/products')
      navigate(-1)
    })
  }

  return (
    <BasePage title={'New Product'}>
      <ProductForm product={newProduct} onSave={addNewProduct}/>
    </BasePage>
  )
}

export default ProductNewPage