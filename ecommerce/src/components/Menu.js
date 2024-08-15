import React, { useState } from "react";
import '../stylesheet/layout.css'
const Menu = () => {

    const menu = [
        { label: 'home', content: ['furniture', 'curtains', 'lightning', 'bedsheets'] },
        { label: 'grocery', content: ['foodgrains', 'vegetables', 'pulses'] },
        { label: 'fashion', content: ['mens', 'womens', 'kids'] },
        { label: 'electronics', content: [] }
    ];

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