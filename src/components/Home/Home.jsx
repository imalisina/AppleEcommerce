import React from 'react';

// Import Link For Routing
import { Link } from 'react-router-dom';

// Use Framer Motion
import { motion } from 'framer-motion';
// Use Framer Motion Animation
import { Animation } from '../../Framer/Framer';

const Home = () => {
    return (
        // Main Elements For Home Section
        <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={Animation}>
            <div className="text-center mt-40">
                <h1 className="text-8xl">Welcome To Apple Store</h1>
                <button className="mt-10 bg-black text-xl rounded-md duration-500 hover:duration-500 hover:text-gray-300 hover:bg-black text-white px-3 py-2"><Link to="/products">Explore</Link></button>
            </div>
        </motion.div>
    )
}

export default Home;