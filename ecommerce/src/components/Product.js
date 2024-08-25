import { React, useEffect, useState } from "react";
import { getProductList } from '../service/GetProductService'


const Product = () => {


    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const url = 'https://api.escuelajs.co/api/v1/products';
                const data = await getProductList(url);
                console.log(data);
                setProduct(data);
            } catch (err) {
                console.log(`Error in fetchProductList ${err}`)
            }
        }
        fetchProductList()
    }, [])



    return (
        <div className="product">{
            product.map((data, index) => (
                
                <div class="card" key={index}>
                    <img src={data.category.image} alt="Denim Jeans" />
                    <div className="title">{data.title}</div>
                    <div className="price">${data.price}</div>
                    <div><button>Add to Cart</button></div>
                </div>
            ))
        }
        </div>
    );
}

export default Product;