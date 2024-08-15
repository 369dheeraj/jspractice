import React from "react";
import Menu from "./Menu";
import '../stylesheet/layout.css'

const Layout = () => {
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
                <div class="card">
                    <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" />
                    <h2>Tailored Jeans</h2>
                    <p class="price">$19.99</p>
                    <p><button>Add to Cart</button></p>
                </div>
                <div class="card">
                    <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" />
                    <h2>Tailored Jeans</h2>
                    <p class="price">$19.99</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </div>
        </>
    );
}

export default Layout;