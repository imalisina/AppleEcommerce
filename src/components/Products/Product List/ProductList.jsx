// Use Hooks
import React , { useState } from 'react';

// Use Link To Show Single Product
import { Link } from 'react-router-dom';

// Use Redux Hooks To Get The Products From Store
import { useSelector , useDispatch } from 'react-redux';
// Use Card Actions
import { addProductToCard } from '../../../redux/actions/ProductActions';

// Use Framer Motion
import { motion } from 'framer-motion';
// Use Specified Framer Motion Animation Configs From Framer.js File
import { Animation } from '../../../Framer/Framer';


const ProductList = () => {

    // Declare All Of Products With Redux Hook
    const products = useSelector((state) => state.allProducts.products);

    // Use Dispatch To Call Actions
    const dispatch = useDispatch();

    // Send Information
    const [ send , setSend ] = useState(false);

    // Dispatch addProductToCard Action & Adding Items To Shopping Card
    const addItemToCard = ( product ) => {
        dispatch(addProductToCard(product))
        setSend(true);
        // After 1.5 Second The Success Message Will Be Hidden
        setTimeout(() => {
         setSend(false);   
        } , 1500)
    }

    return (
        <>
            {
            // Check Condition & Send Success Notification
            send && (
                <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={Animation} className="fixed bottom-2 right-2 z-50 w-72 py-2  mx-auto bg-green-500 text-white rounded my-3 text-center">
                    <h1>
                        Great ! Product Added
                        <button className="bg-white text-green-500 ml-4 px-3 py-1 rounded" onClick={() => setSend(false)}>Ok</button>
                    </h1>
                </motion.div>
            )
            } 
            <div className="flex flex-row flex-wrap justify-center mx-2 my-6">
            {
                products.map((item) => {
                    return (
                        <div className="border rounded-md duration-500 hover:duration-500 shadow-md hover:shadow-2xl p-2 mx-2 my-2" key={item.id}>
                            <Link to={`/products/single/${item.id}`}>
                                <img src={item.image} width="200px" height="200px" />
                                <h1>{item.title}</h1>
                                <h2>{item.description}</h2>
                                <p>{item.price}$</p>
                            </Link>
                            <button className='bg-slate-200 text-black mt-2 px-2 py-1 rounded' onClick={addItemToCard.bind(this , item)}>Add To Card</button>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default ProductList;