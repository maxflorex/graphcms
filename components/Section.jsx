import React from 'react';
import CardSection from './CardSection';
import Link from 'next/link';

const Section = ({ genre, videos }) => {
    return (
        <div className="overflow-hidden pt-8 m-0">
            <h3 className='text-3xl pb-4 font-semibold' >{genre}</h3>
            <div className="flex gap-4 xl:gap-8">
                {videos.map((video) => (
                    <a key={video.id} href={`/video/${video.slug}`} className='overflow-hidden rounded-lg w-full h-full relative'>
                        <CardSection thumbnail={video.thumbnail} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Section;
