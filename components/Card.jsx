import React from 'react';

const Card = ({ thumbnail, title }) => {
    return (
        <div className='relative'>
            <img
                className="w-full hover:scale-110 transition-all duration-300 h-64 object-cover rounded-lg"
                src={thumbnail.url}
                alt="My Movie"
            />
            <h1 className='text-white text-sm absolute top-4 left-4 p-4 rounded-full bg-slate-500/40 backdrop-blur-sm'>{title}</h1>
        </div>
    );
};
export default Card;
