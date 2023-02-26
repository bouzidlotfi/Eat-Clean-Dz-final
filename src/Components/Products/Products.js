import { React, useContext, useState } from 'react'
import products from './products.json'
import './Products.css'
import { Link } from 'react-router-dom'
import { GeneralContext } from '../../context/context'


function Products() {

  const { setCurrentProduct } = useContext(GeneralContext)

  return (
    <>
      <div id='productTitle'>Products</div>
      <div id="productContainer" >
        {
          products?.map((product, index) => {
            return (

              <Link to={`/Product/${product?.id}`} id='productContent' key={index} >
                <div className='product'>
                  <div className='productPic'>
                    <img src={product.image[0]} />
                  </div>
                  <div className='productDesc'>
                    <div id='productName'>{product.nom}.</div>
                    <div className='detailsBtn'>More details</div>
                  </div>
                </div>
              </Link>
            )
          })
        }

      </div>
    </>
  )
}

export default Products

