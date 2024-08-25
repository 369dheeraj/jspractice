import React, { useEffect, useState } from "react";
import '../stylesheet/layout.css'
import {getMenuLabel} from '../service/GetProductService';

const Menu = () => {

    const [menu, setMenu] = useState([
        /* { label: 'home', content: ['furniture', 'curtains', 'lightning', 'bedsheets'] },
        { label: 'grocery', content: ['foodgrains', 'vegetables', 'pulses'] },
        { label: 'fashion', content: ['mens', 'womens', 'kids'] }, */
        // { label: 'electronics', content: [] }
    ]);

    useEffect(()=>{
        
        const fetchMenuLabel = async() =>{
            try {
                const url='https://api.escuelajs.co/api/v1/categories';
                const data = await getMenuLabel(url);
                console.log('Log 1');
                setMenu([...menu, ...data.map((item) => ({ label: item.name, content:[] }))]);
                //setMenu((prevMenu) => [...prevMenu, ...data.map((item) => ({ label: item, content: [] }))]);
                console.log('Log 3');
                console.log('Categories ',menu);
            }catch(err){
                console.log(`Error in fetchProductList ${err}`)
            }
        }
        fetchMenuLabel();
    },[])




    const [openDropdown, setopenDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setopenDropdown(index);
    }

    const handleMouseLeave = () => {
        setopenDropdown(null);
    }

    return (
        <>
            {menu.map((item, index) => (
                <div className="drpdwn">
                    <div key={index} onMouseEnter={()=>{handleMouseEnter(index)}} onMouseLeave={handleMouseLeave}>
                        {item.label.slice(0, 1).toUpperCase() + item.label.slice(1)}
                    </div>
                    {item.content.length !== 0 && openDropdown === index &&
                    <div className="drpdwncontent">
                        {item.content.map((subitem, index) => (
                            <div key={index}>{subitem}</div>
                        ))}
                    </div>
}
                </div>
            ))}
        </>
    );

}

export default Menu;