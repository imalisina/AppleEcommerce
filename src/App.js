import React from 'react';

// Import Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductContainer from './components/Products/ProductContainer';
import SingleProduct from './components/Products/Single Product/SingleProduct';
import CardContainer from './components/Card/CardContainer';
import NotFound from './components/404/NotFound';

// Use Framer Motion To Create Animating Routes
import { AnimatePresence } from 'framer-motion';

// Import Routers for Routing
import { Route , Routes , useLocation } from 'react-router-dom';

const App = () => {

  // Create An Instance Of UseLocation Hook
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductContainer />} />
          <Route path="/card" element={<CardContainer />} />
          <Route path="/products/single/:productId" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App