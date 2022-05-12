import React from 'react';
import Link from 'next/link'

const Tags = ({ videos, platform }) => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 px-8 mb-16 cursor-pointer">
                {platform.map((data, index) => (
                    <a
                        key={index}
                        href={`/platform/${data.slug}`}
                        className="py-8 bg-slate-800/60 rounded-lg justify-self-center w-full flex items-center justify-center hover:scale-105 duration-300 hover:bg-slate-800"
                    >
                        <img
                            src={data.logo.url}
                            alt={data.title}
                            className="w-40 h-32"
                        />
                        <h1>{data.url}</h1>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Tags;
