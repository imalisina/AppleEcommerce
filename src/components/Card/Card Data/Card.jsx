import React from 'react';

// Import Redux Hook To Gain Access To Shopping Card Items
import { useSelector } from 'react-redux';

const Card = () => {
  // Declare Shopping Card Items With Redux Hook
  const cardItems = useSelector((state) => state.card.cardItems);

  return (
      <>
          <div className="flex flex-row flex-wrap">
          {
              cardItems.map((product , index) => {
                  return (
                      <div key={index} className="w-96 ml-10 my-5 flex flex-row flex-wrap justify-start border shadow rounded">
                          <img className="ml-4" src={product.image} alt="product image" width="100px" height="100px" />
                          <div className="mt-10">
                              <h1>{product.title}</h1>
                              <h2>{product.price}$</h2>
                          </div>
                      </div>
                  )
              })
          }
          </div>
          {/* It's Not Working Because We Are Not Use Back End , This Is Only Front End :) */}
          <button className="flex flex-row justify-center mx-auto bg-blue-500 text-white text-lg px-2 py-1 rounded">Check Out</button>
      </>
  )
}

export default Card