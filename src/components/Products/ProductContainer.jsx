// Use React And Hooks
import React , { useState , useEffect , lazy , Suspense } from 'react';

// Import Relative Components
import Spinner from '../Spinner/Spinner';

// Use Framer Motion
import { motion } from 'framer-motion';
// Use Framer Motion Animation
import { Animation } from '../../Framer/Framer';

// Use Redux Hooks
import { useDispatch } from 'react-redux';
// Use fetchProduct Action
import { fetchProducts } from '../../redux/actions/ProductActions';

const ProductContainer = () => {

    // Apply Lazy Loading In ProductList Component
    const ProductList = lazy(() => import('./Product List/ProductList'));

    // Create Dispatch
    const dispatch = useDispatch();

    // Create Guard To Prevent Infinity Loop In Requests
    const [ guard , setGuard ] = useState(false);

    // Fetch Products When Component Mount 
    useEffect(() => {
        setGuard(true);
        dispatch(fetchProducts());
    } , [guard]);

    return (
        <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={Animation}>
        <Suspense fallback={<Spinner />}>
            <ProductList />
        </Suspense>
        </motion.div>
    )   
}

export default ProductContainer;