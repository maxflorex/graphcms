import Image from 'next/image';
import React from 'react';
import disneyLogo from '../public/disney.svg';

const Navbar = ({ account }) => {
    return (
        <div className=" absolute z-[9999] bg-gradient-to-b from-black/60 w-full overflow-hidden">
            <div className="flex justify-between px-8">
                <a href="/">
                    {' '}
                    <Image
                        src={disneyLogo}
                        alt="Disney Logo"
                        width={120}
                        height={120}
                    />
                </a>
                <div className="flex gap-2 items-center">
                    <h3 className="text-normal italic">
                        Welcome, {account.username}
                    </h3>
                    <Image
                        src={account.avatar.url}
                        alt="Member"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
