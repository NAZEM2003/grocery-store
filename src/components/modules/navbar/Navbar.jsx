"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { FcPaid, FcLike, FcHome, FcShop, FcWikipedia, FcVoicePresentation, FcAbout, FcRules, FcViewDetails, } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";
import logo from "@/images/logo.svg";

import Sidebar from '@/templates/navbar/Sidebar';
import { loginRegisterMethods } from '@/utils/constants';
import { authUser, getUserWishlist } from '@/utils/actions';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const [wishesCount , setWishesCount ] = useState(0);

    const sidebarToggle = () => {
        setIsSidebarShown(prevState => !prevState);
    }
    useEffect(()=>{
        const fetchUser= async ()=>{
            const user = await authUser();
            if(user){
                const wishlist = await getUserWishlist(user._id);
                setWishesCount(wishlist.length);
            }
            setIsLogin(!!user);
        }
        fetchUser();
    },[]);

    return (
        <div className='w-full fixed top-0 left-0 z-10 bg-slate-200 flex items-center justify-between px-3 shadow-md shadow-zinc-400'>

            <Link href="/" className='relative w-36 h-16 overflow-hidden rounded-lg'>
                <Image src={logo} fill alt='logo' priority />
            </Link>

            <nav className='hidden lg:inline-block'>
                <ul className='flex items-center [&>*]:p-3 [&>*]:[&>*]:transition-all  [&>*]:text-zinc-800'>
                    <li>
                        <Link className='hover:text-custom-light-blue flex items-center' href="/">Home <FcHome className="ml-1" /></Link>
                    </li>
                    <li>
                        <Link className='hover:text-custom-light-blue flex items-center' href="/shop">Shop <FcShop className="ml-1" /></Link>
                    </li>
                    <li>
                        <Link className='hover:text-custom-light-blue flex items-center' href="/blog">Blog <FcWikipedia className="ml-1" /></Link>
                    </li>
                    <li>
                        <Link className='hover:text-custom-light-blue flex items-center' href="/contact-us">Contact Us <FcVoicePresentation className="ml-1" /></Link>
                    </li>
                    <li>
                        <Link className='hover:text-custom-light-blue flex items-center' href="/about">About Us <FcAbout className="ml-1" /></Link>
                    </li>
                    <li>
                        <Link className='hover:text-custom-light-blue flex items-center' href="/rules">Rules <FcRules className="ml-1" /></Link>
                    </li>
                    <li className='group relative'>
                        {
                            isLogin ? <>
                                <Link className='hover:text-custom-light-blue flex items-center' href="/p-user">
                                    Account <FaAngleDown className='ml-2' />  <FcViewDetails className="ml-1" />
                                </Link>
                                <ul className='group-hover:inline-block hidden absolute top-12 bg-slate-200 p-4 w-max [&>*]:p-2 left-0 z-10 rounded-md shadow shadow-zinc-500'>
                                    <li><Link className='hover:text-custom-light-blue' href="/p-user/orders">Orders</Link></li>
                                    <li><Link className='hover:text-custom-light-blue' href="/p-user/tickets">Ticket</Link></li>
                                    <li><Link className='hover:text-custom-light-blue' href="/p-user/comments">comments</Link></li>
                                    <li><Link className='hover:text-custom-light-blue' href="/p-user/wishlist">Wishlist</Link></li>
                                    <li><Link className='hover:text-custom-light-blue' href="/p-user/account-details">Account Details</Link></li>
                                </ul>
                            </>
                                : <Link href={`/login-register/?method=${loginRegisterMethods.signin}`} className='hover:text-custom-light-blue flex items-center' >
                                    Sign in <FaSignInAlt className='ml-2 text-cyan-500' />
                                </Link>
                        }
                    </li>
                </ul>
            </nav>

            <div className='flex items-center'>
                <Link className='relative text-3xl mx-5 transition-all' href="/p-user/wishlist"><FcLike /> <span className='flex items-center justify-center text-slate-200 text-sm font-bold rounded-full absolute bg-slate-700 -right-3 -top-3 w-6 h-6'>{wishesCount > 9 ? "+9":wishesCount}</span></Link>

                <Link className='relative text-3xl mx-5 transition-all' href="/cart"><FcPaid /><span className='flex items-center justify-center text-slate-200 text-sm font-bold rounded-full absolute bg-slate-700 -right-3 -top-3 w-6 h-6'>+9</span></Link>

                <div className='inline-block lg:hidden'>
                    <button className='text-4xl' onClick={sidebarToggle}>
                        {
                            isSidebarShown ? <IoClose /> : <IoMenu />
                        }
                    </button>
                    <Sidebar isLogin={isLogin} isShown={isSidebarShown} />
                </div>
            </div>

        </div>
    );
}

export default Navbar;