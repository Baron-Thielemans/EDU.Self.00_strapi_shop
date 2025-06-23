"use client";
import React, { useState } from 'react'

const AnnouncementBar = () => {
    return (
        <div className='w-full bg-black py-2'>
            <div className='container mx-auto flex items-center justify-center px -8'>
                <span className='text-center text-sm font-medium tracking-wide text-white'>
                    "ЭТО ЛУЧШЕЕ ОБЪЯВЛЕНИЕ"
                </span>
            </div>

        </div>
    )
}

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);

    return (
        <header className='w-full sticky top-0 z-50'>
            <div className='w-full transform transition-transform duration-300 ease-in-out'>
                <AnnouncementBar />
            </div>
        </header>
    )
}

export default Header