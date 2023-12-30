import React from 'react';

interface Card{
    id: number;
    name: string;
    address: string;
}

const BusinessCard: React.FC<{ card: Card }> = ({ card }) => {
    return(
        <div className="bg-white shadow-lg rounded-lg p-2 mb-2 hover:bg-gray-100">
         <div className="text-sm text-gray-600">ID: {card.id}</div>
            <div className="text-lg font-semibold text-gray-800">{card.name}</div> 
            <div className="text-md text-gray-700">{card.address}</div>  
        </div>
    );
}

export default BusinessCard;