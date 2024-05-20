"use client"

import { CiMenuFries } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import Link from "next/link"
import { Navbar } from '../Navbar';
import { useEffect, useState } from 'react';


export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);   
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight - 600){
            setIsScrolling(true)


        }else
        setIsScrolling(false)



    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return ()=> {
            window.removeEventListener("scroll", handleScroll)

        }

    },[])

    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between px-5 md:px-0">
                <Link href="/">
                    <h1 className="font-medium"> Parcelas Terrasol</h1>
                </Link>            
                <CiMenuFries className="block text-2xl md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                
                <Navbar openMobileMenu={openMobileMenu}/>
                <div className="flex items-center gap-2 md:gap-5">
                    <Link href="tel:9 5018 6583" className="flex items-center gap-4 cursor-pointer">
                        <BsTelephone />
                        <span className="hidden md:block">+56 9 5018 6583</span>
                    </Link>  
                    <Link href="/contacto" className="px-3 py-2 text-white rounded-lg bg-secondary hover-bg.black">Contactenos</Link>
                </div>
            </div>
        </div>
    )
}

