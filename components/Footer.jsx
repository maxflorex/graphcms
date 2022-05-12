import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="absolute bottom-0 p-8 flex w-full justify-between">
            <Link href={'/'}>
                <h1 className='hover:bg-white/20 hover:scale-110 duration-300 p-2 rounded-md cursor-pointer'>Back Home 🏠</h1>
            </Link>
            <h1>
                Made with ❤️ by
                <a href="https://maxflores.dev" target="_blank" className='hover:bg-white/20 hover:scale-110 duration-300 p-2 rounded-md cursor-pointer'>
                    Max Flores
                </a>
            </h1>
        </footer>
    );
};

export default Footer;
