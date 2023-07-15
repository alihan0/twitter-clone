"use client";
import React from 'react'
import { SearchIcon } from '@/icons/icon';
import { Tweet, Timeline } from 'react-twitter-widgets';

const Widgets = () => {
   return (
    <aside className="w-80">
        <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus:outline-none focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base">
          <SearchIcon className="w-5 h-5"/>
          <input type="text" placeholder="Search Twitter" className="placeholder-gray-dark bg-transparent outline-none text-sm "  />
        </div>
        <div>
          <div className="mt-5">
          <Tweet tweetId="841418541026877441" />
          <Tweet tweetId="1678652790992666624" />
          
          </div>
        </div>
    </aside>
  )
}

export default Widgets
