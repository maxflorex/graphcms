import React from 'react';
import Card from './Card';

const Section = ({ genre, videos }) => {
    return (
        <div className="p-16">
            <h3>{genre}</h3>
            <div className="video-feed">
                {videos.map((video) => (
                    <a key={video.id} href={`/video/${video.slug}`}>
                        <Card thumbnail={video.thumbnail} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Section;
