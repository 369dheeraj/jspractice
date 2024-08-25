import {React} from "react";
import Menu from "./Menu";
import Product from "./Product";
import '../stylesheet/layout.css'
import { Outlet,Link } from "react-router-dom";

const Layout = () => {
    const productFlag = false;
   
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
                <div>
                    <Link to={"/updateProduct"}>Update Product </Link>
                </div>
                <div>
                    <Link to={"/product"}>Product </Link>
                </div>
            </div>
            <div>
            
                <div><Outlet/></div>    
    
            </div>
        </>
    );
}

export default Layout;