import React from 'react';

const Card = ({ thumbnail }) => {
    return (
        <div className='relative overflow-hidden'>
            <img
                className="transition-all duration-300 hover:scale-125 h-64 object-cover rounded-lg"
                src={thumbnail.url}
                alt="My Movie"
            />
        </div>
    );
};
export default Card;
