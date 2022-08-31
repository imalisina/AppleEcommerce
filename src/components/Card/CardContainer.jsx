import React from 'react';

// Use Redux Hook To Access Store
import { useSelector } from 'react-redux';

// Import Related Components
import Card from './Card Data/Card';
import EmptyCard from './Card Data/EmptyCard';

const CardContainer = () => {

    const cardItems = useSelector((state) => state.card.cardItems);
    const cardItemsCount = Object.keys(cardItems).length;

    return (
        <>
            {
                cardItemsCount === 0
                ? (<EmptyCard />)
                : (<Card />)
            }
        </>
    )
}

export default CardContainer;