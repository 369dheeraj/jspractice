import React, { useState } from 'react'
import '../stylesheet/layout.css'


const UpdateProduct = () => {

    const [product,setProduct] = useState({name:'', price:''})

    const updateName = (value) => {
        setProduct((prevProduct)=>({...prevProduct,name:value}))
        console.log('Product form '+JSON.stringify(product));
    }
    return(
        <>
            <div className="update-product">
                <div className='form-field'>
                    <span>Product</span>
                    <span>Price</span>
                </div>
                <div className='input-field'>
                    <input type="text" value={product.name} onChange={(event)=>updateName(event.target.value)}/>
                    <input type="text" value=""/>
                </div>
            </div>
    
        </>
    );
}

export default UpdateProduct;