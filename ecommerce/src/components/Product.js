import {React,useEffect} from "react";
import getProductList from "../service/GetProductService";

const Product = ({src,title,price}) => {


    return (
        <div class="card">
            <img src={src} alt="Denim Jeans" />
            <div className="title">{title}</div>
            <div>${price}</div>
            <div><button>Add to Cart</button></div>
        </div>
    );
}

export default Product;