import {React, useEffect, useState} from "react";
import Menu from "./Menu";
import Product from "./Product";
import '../stylesheet/layout.css'
import getProductList from '../service/GetProductService'


const Layout = () => {

    const [product,setProduct] = useState([]);

    useEffect(()=>{
        const fetchProductList = async() => {
            try {
                const url='https://fakestoreapi.com/products';
                const data = await getProductList(url);
                console.log(data);
                setProduct(data);
            }catch(err){
                console.log(`Error in fetchProductList ${err}`)
            }
        }
        fetchProductList()
    },[])

    return (
        <>
            <div class="header">
                <div class="menu">
                    <Menu />
                </div>
                <div>
                    <input type="text" placeholder="Looking for something.." />
                    <button>Search</button>
                </div>
            </div>
            <div class="product">
                {product.map((data,index) => (
                    <Product key={index} src={data.image} title={data.title} price={data.price}/>
                ))     
                }
            </div>
        </>
    );
}

export default Layout;