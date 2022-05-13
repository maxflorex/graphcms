import React from 'react';
import Image from 'next/image';

const Card = ({ thumbnail }) => {
    return (
        <div className=''>
            <Image
                src={thumbnail.url}
                alt="My Movie"
                layout="responsive"
                height='80'
                width='100%'                
                className="object-cover rounded-lg hover:scale-110 duration-500"
            />
        </div>
    );
};
export default Card;
