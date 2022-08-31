import React from 'react';

// Use Link To Move To Products Page
import { Link } from 'react-router-dom'

const EmptyCard = () => {
  return (
    <div className="text-center text-4xl mt-10">
        Ler's <Link to="/products" className="underline text-blue-500">Add</Link> Some Item To Your Shopping Card !
    </div>
  )
}

export default EmptyCard;