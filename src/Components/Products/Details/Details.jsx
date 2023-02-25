import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GeneralContext } from '../../../context/context'
import './Details.css'

const Details = () => {

    const { currentProduct, setCurrentProduct } = useContext(GeneralContext)

    const { id } = useParams()

    fetch('/products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == id);
            setCurrentProduct(product);
        })
        .catch(error => console.error(error));

    const { nom, image, ingredient, allergens, facts, freeof } = currentProduct


    return (
        <div key={id} className='product_details'>

            <div id='PicDetails'>
                {
                    image?.map((image, index) => {
                        return (
                            // console.log(image)
                            <img key={index} src={require(`./${image}`)} />
                        )
                    })
                }
            </div>
            {/* <img src={require('ici tu met le chemin de limage')} alt="signification" className="" /> */}

            <div id='InfoDetails'>
                        <div id="InfoContent">
                <div className='name' >
                    <h2>{nom} :</h2>
                </div>

                <div className='ingredient' >
                    <h3>Ingredient :</h3>
                    <p>{ingredient}</p>
                </div>

                <div className='allergens' >
                    <h3>Allergens :</h3>
                    <p>{allergens}</p>
                </div>

                <div className='facts' >
                    <h3>Facts :</h3>
                    <p>{facts}</p>
                </div>

                <div className='freeof' >
                    <h3>Free of :</h3>
                    <p>{freeof}</p>
                        </div>
                
                
                </div>
            </div>
        </div>
    )
}

export default Details