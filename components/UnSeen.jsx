import React from 'react';
import Card from './Card';

const UnSeen = ({ genre, videos }) => {
    return (
        <>
            <h3 className='text-3xl pb-4 pl-12 font-semibold'>Recommended for you</h3>
            <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 xl-grid-cols-6 2xl:grid-cols-6 gap-4 xl:gap-8 rounded-full">
                    {videos.map((video) => (
                        <a key={video.id} href={`/video/${video.slug}`}>
                            <Card
                                thumbnail={video.thumbnail}
                                title={video.title}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UnSeen;
