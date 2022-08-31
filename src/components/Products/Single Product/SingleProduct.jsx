// Use React & Hooks
import React , { useEffect , useState } from 'react';
// Use Redux Hooks To Access The Actions & Store 
import { useSelector , useDispatch } from 'react-redux';
// Use Relative Action From Redux
import { fetchSelectedProduct , addProductToCard } from '../../../redux/actions/ProductActions';

// Use Link To Create 'Back' Route
import { Link } from 'react-router-dom';
// Access To Parameters Send In URL
import { useParams } from 'react-router';

// Add Framer Motion To Create Animations
import { motion } from 'framer-motion';
// Call  Animation Object From Framer.js File
import {Animation} from '../../../Framer/Framer';


const SingleProduct = () => {

    // Check The Condition & Call Related Action
    useEffect(() => {
        if ( productId || productId == "" ) dispatch(fetchSelectedProduct(productId)); 
    }, [])

    // Declare The Parameter
    const { productId } = useParams();
    // Declare Selected Product With Redux Hook
    const selected = useSelector((state) => state.allProducts.singleProduct);
    // Create Dispatch Instance To Call Specified Action
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
            <motion.div 
            initial="pageInitial" 
            animate="pageAnimate" 
            exit="pageExit" 
            variants={Animation}
            className="flex flex-row flex-wrap justify-around mt-20 ">
                <img className="border rounded shadow-md pb-7 px-6" src={selected.image} alt="product image" width="400px" height="400px" />
                <div className='mt-40 mr-40'>
                    <h1 className="text-5xl">{selected.title}</h1>
                    <h1 className="mt-5 text-xl">Cost : {selected.price}$</h1>
                    <button className="rounded-md mt-4 bg-blue-500 text-white text-sm px-2 py-1" onClick={addItemToCard.bind(this , selected)}>Add To Card</button>
                </div>
            </motion.div>
            <div className="flex flex-row justify-center">
                <button className="text-center mx-auto px-2 py-1 mt-10 rounded-md bg-black text-slate-50"><Link to="/products">Back</Link></button>
            </div>
        </>
    )
}

export default SingleProduct;