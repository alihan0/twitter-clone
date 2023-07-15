"use client";
import React, { useState } from 'react';
import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, MoreIcon } from '@/icons/icon';
import Logo from "@/images/Logo";
import SideLink from "../components/SideLink";
import UserBox from '../components/UserBox';

const sideLinks = [
    {
        name : 'Home',
        icon : HomeIcon,
    },
    {
        name : 'Explore',
        icon : ExploreIcon,
    },
    {
        name : 'Notification',
        icon : NotificationsIcon,
    },
    {
        name : 'Messages',
        icon : MessagesIcon,
    },
    {
        name : 'Bookmarks',
        icon : BookmarksIcon,
    },
    {
        name : 'Lists',
        icon : ListsIcon,
    },
    {
        name : 'Profile',
        icon : ProfileIcon,
    },
    {
        name : 'More',
        icon : MoreIcon,
    },
];

const Sidebar = () => {

    const [active, setActive] = useState('Home');

    const handleMenuItemClick = (name) => {
        setActive(name);
    }

  return (
    <div className="sticky top-0 h-screen flex flex-col justify-between w-72 px-2">
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transform transition-colors duration-200">
            <Logo/>
        </div>
        <nav className='mb-4'>
            <ul>
            {sideLinks.map(({ name, icon }) => (
                <SideLink key={name} name={name} Icon={icon} className="w-7 h-7" active={active} onMenuItemClick={handleMenuItemClick}/>
            ))}
            </ul>
        </nav>
        <button className="bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200">Tweet</button>
      </div>
      <UserBox />
    </div>
  )
}

export default Sidebar;
