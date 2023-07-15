"use client";
import React, {useState, useEffect} from 'react';
import db from '@/firebase';
import { PopulerIcon } from '@/icons/icon';
import TweetBox from '../components/TweetBox';
import Divider from '../components/Divider';
import FeedList from '../components/FeedList';

import { collection, getDocs } from "firebase/firestore";

const Content = () => {

  const [tweets, setTweets] = useState([]);

useEffect(() => {
  const fetchTweets = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "feed"));
      const tweetData = [];
      querySnapshot.forEach((doc) => {
        const tweet = {
          id: doc.id,
          data: doc.data()
        };
        tweetData.push(tweet);
        console.log(doc.id, " => ", doc.data());
      });
      setTweets(tweetData);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    }
  };

  fetchTweets();
}, []);


  return (
    <main className='flex-1 flex flex-col border-r border-l border-gray-extraLight'>
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-2 px-4 py-3">
        <img src="https://cdn-www.bluestacks.com/bs-images/Icon_com.sixjoy.game_.blue_.jpg" alt="Profile" className="w-11 h-11 rounded-full"/>
    
          {/** Tweet Box */}
          <TweetBox />
     
        

      </div>
      <Divider />

      <FeedList tweets={tweets} />
    </main>
  )
}

export default Content
