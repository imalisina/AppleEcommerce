import React from 'react';

// Import Link For Routing
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-slate-50 py-6 flex flex-row justify-between">
            {/* Web App Name In Navbar Section */}
            <div className="mx-5"><Link to="/"><h1 className="text-xl font-semibold">Apple Shop</h1></Link></div>
            {/* Navbar Items Section */}
            <div className="mx-5">
                <ul className="flex flex-row ">
                    <li className="mx-4"><Link to="/products">Products</Link></li>
                    <li className="mx-4"><Link to="/card">Card</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;