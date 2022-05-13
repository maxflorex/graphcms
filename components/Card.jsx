import React from 'react';
import Image from 'next/image';

const Card = ({ thumbnail, title }) => {
    return (
        <div className="w-full relative">
            <Image
                src={thumbnail.url}
                alt="My Movie"
                layout="responsive"
                height='60%'
                width='100%'                
                className="object-cover rounded-lg hover:scale-110 duration-500"
            />
            <h1 className="text-white text-sm absolute top-4 left-4 p-4 rounded-full bg-slate-500/40 backdrop-blur-sm">
                {title}
            </h1>
        </div>
    );
};
export default Card;
