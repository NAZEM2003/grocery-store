import React from 'react';
import styles from "@/styles/p-admin/sidebar/style.module.css";
import { FcSearch } from "react-icons/fc";
import { IoLogOutOutline } from "react-icons/io5";
import { FcAnswers, FcComments, FcDownLeft } from 'react-icons/fc';
import { FaUsers } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { AiFillProduct } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import { IoMdNotifications } from "react-icons/io";

const Sidebar = ({ isShown, user }) => {
    return (
        <nav className={`${styles.sidebar_container} ${isShown ? "right-3" : "-right-96"} shadow shadow-zinc-500 lg:h-screen bg-slate-200 `}>


            <h2 className='w-full text-lg hidden sm:inline-block text-center border-b border-b-zinc-300 p-2 mt-5 mx-auto text-zinc-800 font-semibold'>
                Welcome Dear <span>{user.name}</span>
            </h2>

            <div className='flex items-center w-full sm:hidden'>
                <div className='w-16 h-16 relative rounded-full overflow-hidden'>
                    <Image src={user.img} alt='logo' fill />
                </div>
                <div className='ml-5 '>
                    <h2 title={user.name} className='text-xl cursor-pointer text-zinc-800 font-semibold'>{user.name.length > 16 ? `${user.name.slice(0, 10)} ...` : user.name}</h2>
                    <p className='mt-1 text-sm text-zinc-700'>{user.role}</p>
                </div>
            </div>

            <div className='relative flex my-8 h-10 lg:hidden items-center'>
                <input className='outline-none border border-r-0 h-full border-zinc-400 rounded-l-md p-1 text-lg w-9/12 text-zinc-700 font-semibold' type="text" placeholder='Search...' />
                <button className='text-2xl w-3/12 h-full bg-slate-200 rounded-r-md p-1 border border-zinc-400 flex items-center justify-center'><FcSearch /></button>
            </div>
            <button className='flex items-center lg:pl-2 ml-2 mt-8 relative lg:hidden'>
                Notifications
                <IoMdNotifications className='text-lg ml-2 text-custom-dark-blue '/>
            </button>

            <ul className={`${styles.nav_list_container} lg:pl-2`}>
                <li>
                    <Link className='hover:text-custom-light-blue' href="/p-admin">Counter <FcDownLeft className='ml-2' /></Link>
                </li>

                <li>
                    <Link className='hover:text-custom-light-blue' href="/p-admin/products">Products <AiFillProduct className='ml-2 text-emerald-600' /></Link>
                </li>

                <li>
                    <Link className='hover:text-custom-light-blue' href="/p-admin/users">Users <FaUsers className='ml-2' /></Link>
                </li>

                <li>
                    <Link className='hover:text-custom-light-blue' href="/p-admin/comments">Comments <FcComments className='ml-2' /></Link>
                </li>

                <li>
                    <Link className='hover:text-custom-light-blue' href="/p-admin/tickets">Tickets <FcAnswers className='ml-2' /></Link>
                </li>

                <li>
                    <Link className='hover:text-custom-light-blue' href="/p-admin/discounts">Discounts <CiDiscount1 className='ml-2 text-orange-600' /></Link>
                </li>
            </ul>
            <button className='flex items-center p-2 lg:ml-4 my-5 border text-red-500 font-semibold border-red-500 transition-all hover:bg-red-500 hover:text-slate-200 rounded-md'>Log out <IoLogOutOutline className='text-xl ml-2' /></button>
        </nav>
    );
}

export default Sidebar;