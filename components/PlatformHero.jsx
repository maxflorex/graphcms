import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const PlatformHero = ({ pageSlug, logo, setWatching, watching, random }) => {
    return (
        <>
            <div className="h-full w-full relative overflow-hidden">
                <img
                    src={random.thumbnail?.url}
                    alt={random.title}
                    className="w-full h-[50vh] object-cover"
                />
                <div className="w-[100vw] h-full absolute bg-gradient-to-t from-black backdrop-blur-sm top-0 duration-300 bg-clip-border">
                    <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                            src={logo}
                            alt={pageSlug}
                            className="w-32 m-auto"
                        />
                        <h1 className="font-thin uppercase text-5xl 2xl:text-6xl text-center py-8">
                            {random.title}
                        </h1>
                        <div
                            className="flex items-center bg-white rounded-md mx-auto py-4 px-6 m-4 cursor-pointer hover:scale-110 duration-300 active:scale-100 gap-2 text-black"
                            onClick={() => setWatching(!watching)}
                        >
                            <FaPlay className="text-xl mx-auto" />
                            <h1 className="font-semibold">Play</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlatformHero;
